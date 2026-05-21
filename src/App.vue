<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { VueLenis } from 'lenis/vue'
import { StatusBar, Style } from '@capacitor/status-bar'

const isTouchDevice = ref(false)
const isReady = ref(false)

onMounted(async () => {
  isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  isReady.value = true

  try {
    await StatusBar.setStyle({ style: Style.Dark })
    await StatusBar.setBackgroundColor({ color: '#000000' })
  } catch (e) {
  }
})
</script>

<template>
  <VueLenis
    v-if="isReady && !isTouchDevice"
    root
    :options="{
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    }"
  >
    <RouterView v-slot="{ Component }">
      <Transition :css="false" @before-enter="onBeforeEnter" @after-enter="onAfterEnter" @enter="onEnter">
        <component :is="Component" :key="$route.path" />
      </Transition>
    </RouterView>
  </VueLenis>
  <RouterView v-else-if="isReady" v-slot="{ Component }">
    <Transition :css="false" @before-enter="onBeforeEnter" @after-enter="onAfterEnter" @enter="onEnter">
      <component :is="Component" :key="$route.path" />
    </Transition>
  </RouterView>
</template>

<script>
export default {
  methods: {
    onBeforeEnter(el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(10px)'
    },
    onEnter(el, done) {
      el.animate([
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], {
        duration: 300,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards'
      }).onfinish = () => done()
    },
    onAfterEnter(el) {
      el.style.opacity = ''
      el.style.transform = ''
    }
  }
}
</script>
