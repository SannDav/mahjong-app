<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { projects } from '../data/projects.js'
import RevealHeading from '../components/RevealHeading.vue'
import AnimateInView from '../components/AnimateInView.vue'

const router = useRouter()
const menuOpen = ref(false)
const isScrolled = ref(false)
const typedText = ref('')
const isTypingComplete = ref(false)
const isInView = ref(true)
const heroRef = ref(null)

const fullTagline = 'Student × Developer × Experimenter'

let typingInterval = null
let observer = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const startTyping = () => {
  let index = 0
  typedText.value = ''
  isTypingComplete.value = false
  
  typingInterval = setInterval(() => {
    if (index < fullTagline.length) {
      typedText.value += fullTagline[index]
      index++
    } else {
      clearInterval(typingInterval)
      isTypingComplete.value = true
    }
  }, 60)
}

const skills = [
  { name: 'HTML', icon: 'devicon-html5-plain', color: '#e34f26' },
  { name: 'CSS', icon: 'devicon-css3-plain', color: '#1572b6' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#f7df1e' },
  { name: 'PHP', icon: 'devicon-php-plain', color: '#777bb4' },
  { name: 'Vue', icon: 'devicon-vuejs-plain', color: '#4fc08d' },
  { name: 'Laravel', icon: 'devicon-laravel-original', color: '#ff2d20' },
  { name: 'Blade', icon: 'devicon-laravel-plain', color: '#f05340' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-original', color: '#06b6d4' },
  { name: 'Python', icon: 'devicon-python-plain', color: '#3776ab' },
  { name: 'Git', icon: 'devicon-git-plain', color: '#f05032' }
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  setTimeout(startTyping, 800)
  
  if (heroRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTypingComplete.value) {
            isInView.value = true
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(heroRef.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (typingInterval) clearInterval(typingInterval)
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="bg-black text-white overflow-hidden min-h-screen font-sans">
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
        <button @click="router.push('/')" class="text-base md:text-xl font-black tracking-widest uppercase hover:text-zinc-300 transition">
          M. Ihsaan
        </button>

        <!-- Desktop nav -->
        <div class="hidden md:flex gap-6 text-sm uppercase tracking-widest text-zinc-400">
          <a href="#projects" class="hover:text-white transition py-2">Projects</a>
          <a href="#skills" class="hover:text-white transition py-2">Skills</a>
          <a href="/about" class="hover:text-white transition py-2">About</a>
          <a href="https://github.com/SannDav" target="_blank" class="hover:text-white transition py-2">GitHub</a>
        </div>

        <!-- Mobile hamburger -->
        <button @click="menuOpen = !menuOpen" class="md:hidden text-2xl p-2 text-zinc-400 hover:text-white transition">
          {{ menuOpen ? '✕' : '☰' }}
        </button>
      </div>

      <!-- Mobile dropdown menu -->
      <div v-if="menuOpen" class="md:hidden px-6 pb-4 border-t border-white/5 pt-4 space-y-3">
        <a href="#projects" @click="menuOpen = false" class="block py-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition">Projects</a>
        <a href="#skills" @click="menuOpen = false" class="block py-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition">Skills</a>
        <a href="/about" @click="menuOpen = false" class="block py-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition">About</a>
        <a href="https://github.com/SannDav" target="_blank" class="block py-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition">GitHub</a>
      </div>
    </nav>

    <!-- HERO -->
    <section ref="heroRef" class="relative min-h-[calc(100dvh-80px)] flex flex-col px-6 md:px-16 py-12 pt-32 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-neutral-950">
        <!-- Glow orbs -->
        <div class="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/20 to-transparent rounded-full blur-[120px] animate-pulse-slow"></div>
        <div class="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-blue-600/15 to-transparent rounded-full blur-[150px] animate-pulse-slow animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-t from-cyan-500/10 to-transparent rounded-full blur-[100px]"></div>
        
        <!-- Grid pattern -->
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 60px 60px;"></div>
        
        <!-- Floating particles -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="particle particle-1"></div>
          <div class="particle particle-2"></div>
          <div class="particle particle-3"></div>
          <div class="particle particle-4"></div>
          <div class="particle particle-5"></div>
        </div>
      </div>

      <div class="grid md:grid-cols-[1fr_400px] gap-10 md:gap-16 items-center relative z-10 mt-4 md:mt-0">
        <div>
          <!-- Typing tagline -->
          <div class="mb-6 h-6">
            <p class="text-zinc-500 text-xs md:text-sm tracking-[0.3em] font-mono">
              {{ typedText }}<span v-if="!isTypingComplete" class="animate-blink">|</span>
            </p>
          </div>

          <RevealHeading
            as="h2"
            class="text-5xl md:text-8xl lg:text-9xl leading-[0.9] font-black uppercase tracking-tight"
            :stagger-ms="90"
            :threshold="0.3"
            :words="[
              { text: 'Building' },
              { text: 'Better', class: 'block text-zinc-500 italic ml-4 md:ml-20' },
              { text: 'Webs.' }
            ]"
          />

          <p class="mt-6 md:mt-8 max-w-xl text-zinc-300 text-base md:text-lg leading-relaxed">
            Student-developer from Batam, exploring full-stack web
            development with Laravel, Vue, and modern frontend tools.
            <span class="text-zinc-500">Always building, always learning.</span>
          </p>

          <div class="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
            <button @click="router.push('/about')" class="group relative px-8 py-4 bg-white text-black rounded-full text-sm font-semibold uppercase tracking-widest hover:scale-105 transition-all duration-300 overflow-hidden">
              <span class="relative z-10 flex items-center gap-2">
                About Me
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </span>
            </button>
            
            <a href="#projects" class="group px-8 py-4 border border-zinc-700 rounded-full text-sm font-semibold uppercase tracking-widest hover:border-zinc-500 hover:bg-zinc-900/50 transition-all duration-300 flex items-center gap-2">
              View Work
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
            </a>
          </div>
        </div>

        <!-- Profile Card -->
        <div class="relative flex justify-center md:justify-end">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 rounded-[2rem] blur-2xl transform scale-95"></div>
          
          <div class="relative group">
            <!-- Avatar -->
            <div class="relative w-64 md:w-72 aspect-square">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-[2rem] transform rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-[2rem] transform -rotate-3 opacity-50 group-hover:rotate-0 transition-transform duration-700"></div>
              
              <div class="relative bg-zinc-900 rounded-[2rem] p-6 border border-zinc-800 transform group-hover:-translate-y-2 transition-all duration-500">
                <div class="w-full aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[1.5rem] overflow-hidden border border-zinc-700/50">
                  <img 
                    src="/images/avatar.jpg" 
                    alt="Muhammad Ihsaan" 
                    class="w-full h-full object-cover"
                    @error="$event.target.style.display='none'"
                  />
                  <div v-if="true" class="w-full h-full flex items-center justify-center bg-zinc-900">
                    <span class="text-7xl font-black text-zinc-700">MI</span>
                  </div>
                </div>
                
                <!-- Status badge -->
                <div class="absolute -bottom-3 -right-3 bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl">
                  <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Available
                </div>
              </div>
            </div>
            
            <!-- Floating stats -->
            <div class="absolute -left-6 top-1/4 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl px-4 py-3 text-center transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
              <span class="text-2xl font-black">3+</span>
              <p class="text-[10px] uppercase tracking-widest text-zinc-500">Projects</p>
            </div>
            
            <div class="absolute -right-6 bottom-1/4 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl px-4 py-3 text-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <span class="text-2xl font-black">1+</span>
              <p class="text-[10px] uppercase tracking-widest text-zinc-500">Years Exp</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span class="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
        <div class="w-5 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
          <div class="w-1 h-2 bg-zinc-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="bg-white text-black px-6 md:px-16 py-16 md:py-24">
      <div class="grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-16 items-start">
        <AnimateInView as="div" :distance="40" :duration="1">
          <p class="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Selected Work
          </p>

          <h3 class="text-4xl md:text-7xl font-black leading-none uppercase">
            My
            <span class="block italic text-zinc-400 ml-6 md:ml-10" >
              Projects
            </span>
          </h3>
        </AnimateInView>

        <div class="grid md:grid-cols-2 gap-4 md:gap-6">
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
                'project-card group rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 min-h-[200px] md:min-h-[260px] flex flex-col justify-between transition duration-500 cursor-pointer',
                index % 2 === 0 ? 'bg-black text-white' : 'bg-zinc-100 border border-zinc-200'
              ]"
            >
              <div>
                <p class="uppercase tracking-[0.3em] text-xs opacity-60 mb-3">
                  {{ project.type }}
                </p>

                <h4 class="text-2xl md:text-3xl font-black uppercase leading-tight group-hover:tracking-wide transition-all">
                  {{ project.title }}
                </h4>
              </div>

              <p class="mt-4 md:mt-8 opacity-80 leading-relaxed text-sm md:text-base">
                {{ project.shortDesc }}
              </p>
            </a>
          </AnimateInView>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="relative px-6 md:px-16 py-16 md:py-24 bg-zinc-950">
      <div class="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

      <AnimateInView
        as="div"
        :distance="40"
        :duration="1"
        class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 relative z-10"
      >
        <div>
          <p class="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Tech Stack
          </p>

          <h3 class="text-4xl md:text-7xl font-black uppercase leading-none">
            Skills
            <span class="block italic text-zinc-600 ml-6 md:ml-8">
              In Motion
            </span>
          </h3>
        </div>

        <p class="max-w-xl text-zinc-400 leading-relaxed text-sm md:text-base">
          Tech stack yang lagi aku pelajari dan pakai buat bikin web.
          Dari Laravel backend sampe Vue frontend — makin dalem, makin seru.
        </p>
      </AnimateInView>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 mt-12 md:mt-20 relative z-10">
        <AnimateInView
          v-for="(skill, index) in skills"
          :key="index"
          :delay="index * 0.06"
          :distance="40"
          :duration="0.7"
          :blur="4"
        >
          <div
            class="skill-card-inner group border border-zinc-800 bg-zinc-900 rounded-2xl md:rounded-3xl p-4 md:p-6 hover:bg-white hover:text-black transition-all duration-500 hover:-translate-y-2"
            :style="{
              '--skill-index': index,
              '--skill-color': skill.color
            }"
          >
            <div class="text-4xl md:text-5xl mb-3 md:mb-5 flex items-center justify-center h-10 md:h-14 group-hover:scale-110 transition-transform duration-500">
              <i :class="[skill.icon + ' colored', 'text-4xl md:text-5xl']"></i>
            </div>

            <h4 class="font-bold uppercase tracking-wide text-xs md:text-sm text-center">
              {{ skill.name }}
            </h4>
          </div>
        </AnimateInView>
      </div>
    </section>

    <!-- LAB -->
    <section id="lab" class="px-6 md:px-16 py-16 md:py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div class="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-10 items-center">
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

          <h3 class="text-4xl md:text-8xl font-black uppercase leading-none font-heading">
            Random
            <span class="block italic text-zinc-600 ml-6 md:ml-10">
              Lab
            </span>
          </h3>

          <p class="mt-6 md:mt-10 max-w-2xl text-zinc-300 leading-relaxed text-sm md:text-lg">
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
          <div class="playground-card bg-white text-black rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-8 md:rotate-3 hover:rotate-0 transition duration-700 shadow-2xl">
            <div class="flex items-center justify-between mb-6 md:mb-8">
              <div>
                <p class="uppercase tracking-[0.3em] text-xs text-zinc-500">
                  Current Build
                </p>

                <h4 class="text-2xl md:text-3xl font-black mt-2 uppercase">
                  Dream Machine
                </h4>
              </div>

              <div class="w-4 h-4 bg-green-500 rounded-full animate-pulse shrink-0" />
            </div>

            <div class="space-y-3 md:space-y-4 text-sm">
              <div class="bg-zinc-100 rounded-xl md:rounded-2xl p-3 md:p-4 hover:translate-x-2 transition">
                Nyoba-nyoba Vue 3 component + animasi
              </div>

              <div class="bg-zinc-100 rounded-xl md:rounded-2xl p-3 md:p-4 hover:translate-x-2 transition">
                Eksperimen Laravel + Livewire
              </div>

              <div class="bg-zinc-100 rounded-xl md:rounded-2xl p-3 md:p-4 hover:translate-x-2 transition">
                Project iseng + belajar hal baru
              </div>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="px-6 md:px-16 py-10 md:py-12 border-t border-zinc-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style="padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 2.5rem)">
      <div>
        <h4 class="text-xl md:text-2xl font-black uppercase tracking-tight">
          Muhammad Ihsaan
        </h4>

        <p class="text-zinc-500 mt-2 text-xs md:text-sm uppercase tracking-widest">
          Masih belajar, tapi gak pernah berhenti.
        </p>
      </div>

      <div class="flex gap-6 text-sm uppercase tracking-widest text-zinc-500">
        <a href="https://github.com/SannDav" target="_blank" class="hover:text-white transition py-2">
          GitHub
        </a>

        <a href="https://instagram.com" target="_blank" class="hover:text-white transition py-2">
          Instagram
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Typing cursor animation */
.animate-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Pulse slow animation for glows */
.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.1); }
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Floating particles */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
}

.particle-1 {
  top: 20%;
  left: 10%;
  animation: float-particle 20s linear infinite;
}

.particle-2 {
  top: 60%;
  left: 80%;
  animation: float-particle 25s linear infinite;
  animation-delay: -5s;
  width: 3px;
  height: 3px;
}

.particle-3 {
  top: 80%;
  left: 30%;
  animation: float-particle 18s linear infinite;
  animation-delay: -10s;
}

.particle-4 {
  top: 30%;
  left: 70%;
  animation: float-particle 22s linear infinite;
  animation-delay: -15s;
  width: 2px;
  height: 2px;
}

.particle-5 {
  top: 10%;
  left: 50%;
  animation: float-particle 15s linear infinite;
  animation-delay: -8s;
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100vh) translateX(100px);
    opacity: 0;
  }
}

/* Hover effects for buttons */
button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}

button:hover::before {
  left: 100%;
}

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

.skill-card-inner {
  position: relative;
}

.skill-card-inner::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: var(--skill-color);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.5s;
  filter: blur(8px);
}

.skill-card-inner:hover::before {
  opacity: 0.15;
}

.skill-card-inner i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.skill-card-inner:hover i {
  filter: brightness(1.2);
}
</style>
