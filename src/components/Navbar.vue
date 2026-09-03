<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Download } from '@lucide/vue'
import { resumeUrl } from '@/data/portfolioData'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const isMenuOpen = ref(false)
const activeSection = ref('hero')
const scrolled = ref(false)

const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'education', 'contact']

const observerOptions = {
  root: null,
  rootMargin: '-50% 0px -50% 0px',
  threshold: 0,
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id
    }
  }
}, observerOptions)

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  observer.disconnect()
  window.removeEventListener('scroll', onScroll)
})

const isActive = (href: string) => {
  const id = href.replace('#', '')
  return activeSection.value === id
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg shadow-slate-900/50' : 'bg-transparent'"
  >
    <nav class="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3" aria-label="Main navigation">
      <div class="flex items-center gap-2 text-xl font-bold">
        <a href="#hero" class="hidden sm:block text-slate-100 hover:text-emerald-400 transition-colors">San Pila</a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-1">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          @click="closeMenu"
          :class="[
            'text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200',
            isActive(link.href)
              ? 'text-emerald-400 bg-emerald-500/10'
              : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50',
          ]"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Download CV Button -->
      <a
        :href="resumeUrl"
        download="Pila-San-CV.pdf"
        class="hidden md:flex items-center gap-2 px-4 py-2 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-colors text-sm"
      >
        <Download class="w-4 h-4" />
        CV
      </a>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        class="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800/50 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="sr-only">Toggle navigation</span>
        <div class="flex flex-col h-6 w-6 justify-around">
          <span
            class="block h-0.5 w-6 bg-current rounded transition-all duration-300"
            :class="isMenuOpen ? 'rotate-45 translate-y-1' : ''"
          />
          <span
            class="block h-0.5 w-6 bg-current rounded transition-all duration-300"
            :class="isMenuOpen ? 'opacity-0' : ''"
          />
          <span
            class="block h-0.5 w-6 bg-current rounded transition-all duration-300"
            :class="isMenuOpen ? '-rotate-45 -translate-y-1' : ''"
          />
        </div>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-show="isMenuOpen"
      class="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 shadow-lg transition-all duration-300 ease-in-out"
    >
      <div class="section flex flex-col space-y-1 pb-4">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          @click="closeMenu"
          :class="[
            'text-sm font-medium px-4 py-3 rounded-lg transition-all duration-200',
            isActive(link.href)
              ? 'text-emerald-400 bg-emerald-500/10'
              : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50',
          ]"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </header>
</template>
