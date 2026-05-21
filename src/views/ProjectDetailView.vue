<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProjectBySlug } from '../data/projects.js'
import AnimateInView from '../components/AnimateInView.vue'

const route = useRoute()
const router = useRouter()
const project = getProjectBySlug(route.params.slug)
const menuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="bg-black text-white min-h-screen font-sans">
    <div v-if="!project" class="flex flex-col items-center justify-center min-h-screen gap-6 px-6">
      <p class="text-6xl font-black uppercase tracking-tight text-zinc-800">404</p>
      <p class="text-zinc-500 uppercase tracking-widest text-sm">Project not found</p>
      <button
        @click="router.push('/')"
        class="mt-4 px-8 py-3 border border-zinc-800 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition duration-500"
      >
        Back Home
      </button>
    </div>

    <template v-else>
      <!-- GLASS STICKY NAV -->
      <nav 
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        :class="[
          isScrolled 
            ? 'backdrop-blur-2xl bg-black/80 border-b border-white/10 shadow-lg shadow-black/20 py-4' 
            : 'backdrop-blur-2xl bg-black/60 py-6'
        ]"
        style="padding-top: calc(env(safe-area-inset-top, 0px) + 1rem)"
      >
        <div class="flex items-center justify-between px-6 md:px-16">
          <button
            @click="router.push('/')"
            class="flex items-center gap-2 text-zinc-500 hover:text-white transition text-sm uppercase tracking-widest py-2"
          >
            <span class="text-lg">&larr;</span>
            Back
          </button>

          <!-- Desktop nav -->
          <div class="hidden md:flex gap-6 text-sm uppercase tracking-widest text-zinc-400">
            <a
              :href="project.githubUrl"
              target="_blank"
              class="hover:text-white transition py-2"
            >
              View on GitHub
            </a>
          </div>

          <!-- Mobile hamburger -->
          <button @click="menuOpen = !menuOpen" class="md:hidden text-2xl p-2 text-zinc-400 hover:text-white transition">
            {{ menuOpen ? '✕' : '☰' }}
          </button>
        </div>

        <!-- Mobile dropdown menu -->
        <div v-if="menuOpen" class="md:hidden px-6 pb-4 border-t border-white/5 pt-4 space-y-3">
          <a
            :href="project.githubUrl"
            target="_blank"
            class="block py-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition"
          >
            View on GitHub
          </a>
          <button @click="router.push('/')" class="block py-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition text-left w-full">
            Back to Home
          </button>
        </div>
      </nav>

      <section class="px-6 md:px-16 pb-16 md:pb-24 pt-32">
        <AnimateInView as="div" :distance="60" :duration="1" :threshold="0.1">
          <p class="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            {{ project.type }}
          </p>

          <h1 class="text-5xl md:text-9xl leading-[0.9] font-black uppercase tracking-tight">
            {{ project.title }}
          </h1>
        </AnimateInView>

        <div class="mt-12 md:mt-16 grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-start">
          <AnimateInView as="div" :distance="40" :duration="0.9" :delay="0.1">
            <div class="aspect-video bg-zinc-900 rounded-[1.5rem] md:rounded-[2rem] border border-zinc-800 overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimateInView>

          <div>
            <AnimateInView as="div" :distance="30" :duration="0.9" :delay="0.2">
              <p class="text-zinc-300 leading-relaxed text-sm md:text-lg">
                {{ project.fullDesc }}
              </p>
            </AnimateInView>

            <AnimateInView as="div" :distance="30" :duration="0.9" :delay="0.3" class="mt-6 md:mt-8">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.techStack"
                  :key="tech"
                  class="px-3 md:px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs uppercase tracking-widest text-zinc-400"
                >
                  {{ tech }}
                </span>
              </div>
            </AnimateInView>

            <AnimateInView as="div" :distance="30" :duration="0.9" :delay="0.35" class="mt-6 md:mt-8 flex flex-wrap gap-4">
              <a
                :href="project.githubUrl"
                target="_blank"
                class="px-8 py-3 bg-white text-black rounded-full text-sm uppercase tracking-widest font-semibold hover:scale-105 transition inline-block"
              >
                View on GitHub
              </a>

              <button
                v-if="project.demoUrl"
                class="px-8 py-3 border border-zinc-800 rounded-full text-sm uppercase tracking-widest hover:bg-zinc-900 transition"
              >
                Live Demo
              </button>
            </AnimateInView>
          </div>
        </div>

        <AnimateInView as="div" :distance="40" :duration="1" :delay="0.4" class="mt-16 md:mt-24">
          <p class="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-6 md:mb-8">
            Features
          </p>

          <div class="grid md:grid-cols-2 gap-3 md:gap-4">
            <div
              v-for="(feature, i) in project.features"
              :key="i"
              class="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl md:rounded-2xl p-4 md:p-5 hover:bg-zinc-800/50 transition duration-500"
            >
              <span class="text-zinc-600 text-lg mt-0.5 shrink-0">&#9656;</span>
              <span class="text-zinc-300 text-sm md:text-base">{{ feature }}</span>
            </div>
          </div>
        </AnimateInView>
      </section>
    </template>
  </div>
</template>
