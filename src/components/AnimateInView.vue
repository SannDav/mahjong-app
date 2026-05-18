<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  direction: { type: String, default: 'up' },
  distance: { type: Number, default: 60 },
  duration: { type: Number, default: 0.9 },
  delay: { type: Number, default: 0 },
  threshold: { type: Number, default: 0.15 },
  blur: { type: Number, default: 0 },
  once: { type: Boolean, default: false },
  as: { type: String, default: 'div' },
  rotate: { type: Number, default: 0 }
})

const visible = ref(false)
const el = ref(null)
let observer = null

const transformStart = computed(() => {
  const d = props.distance
  switch (props.direction) {
    case 'up': return `translateY(${d}px)`
    case 'down': return `translateY(${-d}px)`
    case 'left': return `translateX(${d}px)`
    case 'right': return `translateX(${-d}px)`
    case 'none': return ''
    default: return `translateY(${d}px)`
  }
})

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
      } else if (!props.once) {
        visible.value = false
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
  <component
    :is="as"
    ref="el"
    class="animate-in-view"
    :class="{ 'is-visible': visible }"
    :style="{
      '--anim-duration': `${duration}s`,
      '--anim-delay': visible ? `${delay}s` : '0s',
      '--anim-rotate': `${rotate}deg`,
      '--anim-transform': transformStart,
      '--anim-blur': blur ? `blur(${blur}px)` : 'blur(0)'
    }"
  >
    <slot />
  </component>
</template>

<style scoped>
.animate-in-view {
  opacity: 0;
  transform: var(--anim-transform, translateY(60px)) rotate(var(--anim-rotate, 0deg));
  filter: var(--anim-blur, blur(0));
  will-change: transform, opacity, filter;
  transition-property: opacity, transform, filter;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: var(--anim-duration, 0.9s);
  transition-delay: var(--anim-delay, 0s);
}

.animate-in-view.is-visible {
  opacity: 1;
  transform: translateY(0) translateX(0) rotate(0deg);
  filter: blur(0);
}
</style>
