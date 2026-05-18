<script setup>
import { useRouter } from 'vue-router'
import AnimateInView from '../components/AnimateInView.vue'

const router = useRouter()

const timeline = [
  { year: '2024', label: 'Mulai belajar coding', desc: 'Perkenalan pertama dengan Python dan logika pemrograman.' },
  { year: '2025', label: 'Explore web development', desc: 'Belajar HTML, CSS, JavaScript, PHP, dan Laravel. Mulai bikin project-project kecil.' },
  { year: '2026', label: 'Masuk SMK Negeri 7 Batam', desc: 'Jurusan RPL (Rekayasa Perangkat Lunak). Makin dalem di Laravel, Vue, dan full-stack web.' }
]

const interests = [
  { emoji: '&#128187;', label: 'Coding', desc: 'Terutama web development — Laravel, Vue, dan ekosistemnya.' },
  { emoji: '&#127760;', label: 'Sejarah', desc: 'Terutama sejarah perang, peradaban, dan kisah-kisah epik masa lalu.' },
  { emoji: '&#128218;', label: 'Belajar Hal Baru', desc: 'Dari teknologi sampe filosofi — selama menarik, pasti dicoba.' }
]
</script>

<template>
  <div class="bg-black text-white min-h-screen font-sans">
    <nav class="flex items-center justify-between px-6 md:px-16 py-8">
      <button
        @click="router.push('/')"
        class="flex items-center gap-2 text-zinc-500 hover:text-white transition text-sm uppercase tracking-widest"
      >
        <span class="text-lg">&larr;</span>
        Back
      </button>

      <a
        href="https://github.com/SannDav"
        target="_blank"
        class="text-sm uppercase tracking-widest text-zinc-500 hover:text-white transition"
      >
        GitHub
      </a>
    </nav>

    <section class="px-6 md:px-16 pb-24">
      <AnimateInView as="div" :distance="60" :duration="1" :threshold="0.1">
        <p class="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
          Get to Know Me
        </p>

        <h1 class="text-6xl md:text-9xl leading-[0.9] font-black uppercase tracking-tight">
          About
          <span class="block text-zinc-500 italic mt-2 md:ml-20">
            Me
          </span>
        </h1>
      </AnimateInView>

      <div class="mt-16 grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-center">
        <AnimateInView as="div" :distance="40" :duration="0.9" :delay="0.1">
          <div class="aspect-[4/5] bg-zinc-900 rounded-[2rem] border border-zinc-800 overflow-hidden">
            <img
              src="/images/about.jpg"
              alt="Muhammad Ihsaan"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </AnimateInView>

        <div>
          <AnimateInView as="div" :distance="30" :duration="0.9" :delay="0.2">
            <p class="text-zinc-300 text-lg leading-relaxed">
              Halo! Aku <strong class="text-white">Muhammad Ihsaan</strong>,
              seorang siswa <strong class="text-white">RPL</strong> di
              <strong class="text-white">SMK Negeri 7 Batam</strong>.
            </p>

            <p class="mt-6 text-zinc-400 leading-relaxed">
              Aku mulai belajar coding di tahun 2024, dan sejak itu terus
              explore dunia pengembangan web. Dari Python, HTML, CSS, sampe
              Laravel dan Vue — makin dalem, makin seru.
            </p>

            <p class="mt-6 text-zinc-400 leading-relaxed">
              Di luar coding, aku juga tertarik banget sama
              <strong class="text-white">sejarah</strong> — terutama
              sejarah perang, imperium, dan peradaban masa lalu.
              Buat aku, coding dan sejarah itu mirip: dua-duanya soal
              memahami pola, bikin strategi, dan ngerakit sesuatu
              yang lebih besar dari bagian-bagiannya.
            </p>
          </AnimateInView>

          <AnimateInView as="div" :distance="30" :duration="0.9" :delay="0.3" class="mt-10">
            <p class="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
              Connect
            </p>

            <div class="flex flex-wrap gap-4">
              <a
                href="https://github.com/SannDav"
                target="_blank"
                class="px-6 py-3 bg-white text-black rounded-full text-sm uppercase tracking-widest font-semibold hover:scale-105 transition inline-flex items-center gap-2"
              >
                <i class="devicon-github-original text-lg"></i>
                GitHub
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                class="px-6 py-3 border border-zinc-800 rounded-full text-sm uppercase tracking-widest hover:bg-zinc-900 transition inline-flex items-center gap-2"
              >
                Instagram
              </a>
            </div>
          </AnimateInView>
        </div>
      </div>

      <AnimateInView as="div" :distance="40" :duration="1" :delay="0.3" class="mt-24">
        <p class="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-8">
          My Journey
        </p>

        <div class="relative">
          <div class="absolute left-[11px] md:left-[19px] top-0 bottom-0 w-px bg-zinc-800" />

          <div class="space-y-12">
            <div
              v-for="(item, i) in timeline"
              :key="i"
              class="relative pl-10 md:pl-14"
            >
              <div class="absolute left-0 md:left-1.5 top-1.5 w-6 h-6 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center">
                <div class="w-2 h-2 rounded-full bg-zinc-500" />
              </div>

              <AnimateInView as="div" :distance="20" :duration="0.7" :delay="i * 0.12">
                <span class="text-zinc-500 text-sm font-mono">{{ item.year }}</span>
                <h3 class="text-xl font-bold mt-1 uppercase tracking-wide">{{ item.label }}</h3>
                <p class="text-zinc-400 mt-1 leading-relaxed">{{ item.desc }}</p>
              </AnimateInView>
            </div>
          </div>
        </div>
      </AnimateInView>

      <AnimateInView as="div" :distance="40" :duration="1" :delay="0.4" class="mt-24">
        <p class="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-8">
          Interests
        </p>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(item, i) in interests"
            :key="i"
            class="bg-zinc-900/50 border border-zinc-800 rounded-[2rem] p-8 hover:bg-zinc-800/50 transition duration-500"
          >
            <div class="text-4xl mb-4" v-html="item.emoji"></div>
            <h4 class="text-lg font-bold uppercase tracking-wide">{{ item.label }}</h4>
            <p class="text-zinc-400 text-sm mt-2 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </AnimateInView>
    </section>

    <footer class="px-6 md:px-16 py-12 border-t border-zinc-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <h4 class="text-2xl font-black uppercase tracking-tight">Muhammad Ihsaan</h4>
        <p class="text-zinc-500 mt-2 text-sm uppercase tracking-widest">Masih belajar, tapi gak pernah berhenti.</p>
      </div>

      <div class="flex gap-6 text-sm uppercase tracking-widest text-zinc-500">
        <a href="https://github.com/SannDav" target="_blank" class="hover:text-white transition">GitHub</a>
        <a href="https://instagram.com" target="_blank" class="hover:text-white transition">Instagram</a>
      </div>
    </footer>
  </div>
</template>
