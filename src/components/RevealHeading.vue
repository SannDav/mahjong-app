<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  text: { type: String, default: '' },
  words: { type: Array, default: null },
  as: { type: String, default: 'h2' },
  staggerMs: { type: Number, default: 85 },
  threshold: { type: Number, default: 0.2 },
  once: { type: Boolean, default: false }
})

const items = computed(() => {
  if (props.words) return props.words
  return props.text.split(' ').map(t => ({ text: t }))
})

const revealed = ref(false)
const el = ref(null)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        revealed.value = true
      } else if (!props.once) {
        revealed.value = false
      }
    },
    { threshold: props.threshold }
  )
  if (el.value) observer.observe(el.value)
})

onUnmounted(() => {
  if (observer && el.value) observer.unobserve(el.value)
})
</script>

<template>
  <component :is="as" ref="el" class="reveal-heading">
    <span
      v-for="(item, i) in items"
      :key="i"
      :class="['reveal-word', item.class, { 'is-revealed': revealed }]"
      :style="{
        transitionDelay: revealed ? `${i * staggerMs}ms` : '0s'
      }"
    >
      {{ item.text }}<template v-if="i < items.length - 1"> </template>
    </span>
  </component>
</template>

<style scoped>
.reveal-heading {
  font-family: 'Archivo Black', 'Bebas Neue', sans-serif;
}

.reveal-word {
  display: inline-block;
  opacity: 0;
  filter: blur(18px);
  transform: translateY(70px) scale(0.7);
  will-change: transform, opacity, filter;
  transition:
    opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
    filter 1s cubic-bezier(0.16, 1, 0.3, 1),
    transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-word.is-revealed {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0) scale(1);
}
</style>
