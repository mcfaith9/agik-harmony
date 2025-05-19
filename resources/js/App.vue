<script setup>
  import { ref, watch, provide } from 'vue';
  import axios from 'axios';
  import { Toaster } from '@/components/ui/sonner';
  import { useRouter, useRoute } from 'vue-router';

  import AppLoader from '@/components/pages/AppLoader.vue';

  const loading = ref(false);
  const router = useRouter();
  const route = useRoute();

  watch(route, async (newRoute, oldRoute) => {
    if (newRoute.path === '/app') {
      loading.value = true;
      // Show loader for 3 seconds after login navigation
      await new Promise(resolve => setTimeout(resolve, 3000));
      loading.value = false;
    }
  });
</script>

<template>
  <Toaster />
  <AppLoader v-if="loading" />
  <router-view v-else />
</template>
