<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { Toaster } from '@/components/ui/sonner';

  const loading = ref(true);

  onMounted(async () => {
    try {
      // await axios.get('/api/user', { withCredentials: true });
    } catch (error) {
      // handle error or unauthenticated state
      console.log(error);
    } finally {
      loading.value = false;
    }
  });
</script>

<template>
  <Toaster />
  <div v-if="loading">Loading...</div>
  <router-view v-else />
</template>
