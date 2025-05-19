<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const words = ['App', 'Data', 'Resources'];
    const currentIndex = ref(0);

    onMounted(() => {
      const interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % words.length;
      }, 1500);

      onUnmounted(() => clearInterval(interval));
    });
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-background">
    <div class="text-2xl font-bold flex gap-2">
      <span>Preparing</span>
      <span class="relative inline-block overflow-hidden w-[120px] text-primary text-left">
        <transition-group name="slide-fixed" tag="div">
          <span
            :key="currentIndex"
            class="absolute left-0 top-0 w-full text-left"
          >
            {{ words[currentIndex] }}
          </span>
        </transition-group>
      </span>
    </div>
  </div>
</template>

<style scoped>
.slide-fixed-enter-active,
.slide-fixed-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.slide-fixed-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-fixed-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-fixed-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-fixed-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
