<script setup>
import { useRouter } from 'vue-router'
import { projects } from '../data/projects.js'
import RevealHeading from '../components/RevealHeading.vue'
import AnimateInView from '../components/AnimateInView.vue'

const router = useRouter()

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Vue',
  'Laravel',
  'Blade',
  'Tailwind',
  'Python',
  'Git'
]
</script>

<template>
  <div class="bg-black text-white overflow-hidden min-h-screen font-sans">
    <!-- HERO -->
    <section class="relative min-h-screen flex flex-col justify-between px-6 md:px-16 py-10 bg-gradient-to-br from-black via-zinc-900 to-neutral-950">
      <div class="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <nav class="flex items-center justify-between z-10 relative">
        <h1 class="text-xl md:text-2xl font-black tracking-widest uppercase">
          Muhammad Ihsaan
        </h1>

        <div class="flex gap-6 text-sm uppercase tracking-widest text-zinc-400">
          <a href="#projects" class="hover:text-white transition">Projects</a>
          <a href="#skills" class="hover:text-white transition">Skills</a>
          <a href="https://github.com/SannDav" target="_blank" class="hover:text-white transition">GitHub</a>
        </div>
      </nav>

      <div class="grid md:grid-cols-[1.4fr_0.6fr] gap-10 items-center relative z-10 mt-16 md:mt-0">
        <div>
          <p class="uppercase tracking-[0.4em] text-zinc-500 mb-4 text-sm">
            Student × Developer × Experimenter
          </p>

          <RevealHeading
            as="h2"
            class="text-6xl md:text-9xl leading-[0.9] font-black uppercase tracking-tight"
            :stagger-ms="90"
            :threshold="0.3"
            :words="[
              { text: 'Building' },
              { text: 'Better', class: 'block text-zinc-500 italic ml-8 md:ml-20' },
              { text: 'Webs.' }
            ]"
          />

          <p class="mt-8 max-w-2xl text-zinc-300 text-lg leading-relaxed">
            Student-developer from Batam, exploring full-stack web
            development with Laravel, Vue, and modern frontend tools.
            Always building, always learning.
          </p>
        </div>

        <div class="relative flex justify-center md:justify-end">
          <div class="rotate-6 bg-white text-black rounded-[2rem] p-8 w-72 shadow-2xl border border-zinc-300 hover:rotate-0 transition duration-500">
            <div class="text-xs uppercase tracking-[0.3em] mb-6 text-zinc-500">
              Live Status
            </div>

            <div class="space-y-4 text-sm">
              <div class="flex justify-between border-b border-zinc-200 pb-2">
                <span>Currently Learning</span>
                <span>Vue + Laravel</span>
              </div>

              <div class="flex justify-between border-b border-zinc-200 pb-2">
                <span>Focus</span>
                <span>Full-Stack Web</span>
              </div>

              <div class="flex justify-between border-b border-zinc-200 pb-2">
                <span>Level</span>
                <span>Always Learning</span>
              </div>
            </div>

            <a href="https://github.com/SannDav" target="_blank" class="mt-8 bg-black text-white w-full block text-center py-3 rounded-full hover:scale-105 transition">
              Follow My Journey
            </a>
          </div>
        </div>
      </div>

    </section>

    <!-- PROJECTS -->
    <section id="projects" class="bg-white text-black px-6 md:px-16 py-24">
      <div class="grid md:grid-cols-[0.7fr_1.3fr] gap-16 items-start">
        <AnimateInView as="div" :distance="40" :duration="1">
          <p class="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Selected Work
          </p>

          <h3 class="text-5xl md:text-7xl font-black leading-none uppercase">
            My
            <span class="block italic text-zinc-400 ml-10" >
              Projects
            </span>
          </h3>
        </AnimateInView>

        <div class="grid md:grid-cols-2 gap-6">
          <AnimateInView
            v-for="(project, index) in projects"
            :key="index"
            :delay="index * 0.1"
            :distance="50"
            :rotate="index % 2 === 0 ? 1.5 : -1.5"
            :duration="0.8"
          >
            <a
              @click.prevent="router.push(`/project/${project.slug}`)"
              :href="`/project/${project.slug}`"
              :class="[
                'project-card group rounded-[2rem] p-8 min-h-[260px] flex flex-col justify-between transition duration-500 cursor-pointer',
                index % 2 === 0 ? 'bg-black text-white' : 'bg-zinc-100 border border-zinc-200'
              ]"
            >
              <div>
                <p class="uppercase tracking-[0.3em] text-xs opacity-60 mb-4">
                  {{ project.type }}
                </p>

                <h4 class="text-3xl font-black uppercase leading-tight group-hover:tracking-wide transition-all">
                  {{ project.title }}
                </h4>
              </div>

              <p class="mt-8 opacity-80 leading-relaxed">
                {{ project.shortDesc }}
              </p>
            </a>
          </AnimateInView>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="relative px-6 md:px-16 py-24 bg-zinc-950">
      <div class="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

      <AnimateInView
        as="div"
        :distance="40"
        :duration="1"
        class="flex flex-col md:flex-row md:items-end md:justify-between gap-10 relative z-10"
      >
        <div>
          <p class="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Tech Stack
          </p>

          <h3 class="text-5xl md:text-7xl font-black uppercase leading-none">
            Skills
            <span class="block italic text-zinc-600 ml-8">
              In Motion
            </span>
          </h3>
        </div>

        <p class="max-w-xl text-zinc-400 leading-relaxed">
          Tech stack yang lagi aku pelajari dan pakai buat bikin web.
          Dari Laravel backend sampe Vue frontend — makin dalem, makin seru.
        </p>
      </AnimateInView>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-5 mt-20 relative z-10">
        <AnimateInView
          v-for="(skill, index) in skills"
          :key="index"
          :delay="index * 0.06"
          :distance="40"
          :duration="0.7"
          :blur="4"
        >
          <div
            class="skill-card-inner group border border-zinc-800 bg-zinc-900 rounded-3xl p-6 hover:bg-white hover:text-black transition duration-500 hover:-translate-y-2"
            :style="{ '--skill-index': index }"
          >
            <div class="text-4xl mb-6 group-hover:rotate-12 transition duration-500">
              ✦
            </div>

            <h4 class="font-bold uppercase tracking-wide text-sm">
              {{ skill }}
            </h4>
          </div>
        </AnimateInView>
      </div>
    </section>

    <!-- LAB -->
    <section id="lab" class="px-6 md:px-16 py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div class="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <AnimateInView
          as="div"
          :distance="80"
          :duration="1.1"
          :blur="12"
          :threshold="0.1"
        >
          <p class="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Experimental Zone
          </p>

          <h3 class="text-5xl md:text-8xl font-black uppercase leading-none font-heading">
            Random
            <span class="block italic text-zinc-600 ml-10">
              Lab
            </span>
          </h3>

          <p class="mt-10 max-w-2xl text-zinc-300 leading-relaxed text-lg">
            Tempat aku bereksperimen dengan project-project random,
            belajar teknologi baru, dan kadang-kadang bikin sesuatu
            yang cuma kelihatan keren aja.
          </p>
        </AnimateInView>

        <AnimateInView
          as="div"
          :distance="60"
          :duration="1.2"
          :delay="0.15"
          :blur="10"
          :threshold="0.1"
        >
          <div class="playground-card bg-white text-black rounded-[2.5rem] p-8 rotate-3 hover:rotate-0 transition duration-700 shadow-2xl">
            <div class="flex items-center justify-between mb-8">
              <div>
                <p class="uppercase tracking-[0.3em] text-xs text-zinc-500">
                  Current Build
                </p>

                <h4 class="text-3xl font-black mt-2 uppercase">
                  Dream Machine
                </h4>
              </div>

              <div class="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            </div>

            <div class="space-y-4 text-sm">
              <div class="bg-zinc-100 rounded-2xl p-4 hover:translate-x-2 transition">
                Nyoba-nyoba Vue 3 component + animasi
              </div>

              <div class="bg-zinc-100 rounded-2xl p-4 hover:translate-x-2 transition">
                Eksperimen Laravel + Livewire
              </div>

              <div class="bg-zinc-100 rounded-2xl p-4 hover:translate-x-2 transition">
                Project iseng + belajar hal baru
              </div>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="px-6 md:px-16 py-12 border-t border-zinc-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <h4 class="text-2xl font-black uppercase tracking-tight">
          Muhammad Ihsaan
        </h4>

        <p class="text-zinc-500 mt-2 text-sm uppercase tracking-widest">
          Masih belajar, tapi gak pernah berhenti.
        </p>
      </div>

      <div class="flex gap-6 text-sm uppercase tracking-widest text-zinc-500">
        <a href="https://github.com/SannDav" target="_blank" class="hover:text-white transition">
          GitHub
        </a>

        <a href="https://instagram.com" target="_blank" class="hover:text-white transition">
          Instagram
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.project-card {
  will-change: transform;
}

.project-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.skill-card-inner {
  animation: skill-float 5s ease-in-out infinite;
  animation-delay: calc(var(--skill-index, 0) * 0.2s + 1.2s);
}

@keyframes skill-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.playground-card {
  will-change: transform;
}
</style>
