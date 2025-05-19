<script setup>
  import { Toaster } from '@/components/ui/sonner';
  import AppLoader from '@/components/pages/AppLoader.vue';
  import { loading } from '@/lib/loading';
</script>

<template>
  <Toaster />
  <AppLoader v-if="loading" />
  <router-view v-else />
</template>
