<script setup>
import { RouterView } from 'vue-router'
import { VueLenis } from 'lenis/vue'
</script>

<template>
  <VueLenis
    root
    :options="{
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5
    }"
  >
    <RouterView />
  </VueLenis>
</template>
