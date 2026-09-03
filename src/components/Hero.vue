<script setup lang="ts">
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { personalInfo, resumeUrl } from '@/data/portfolioData'
import { Download } from '@lucide/vue'

const { scrollTo } = useSmoothScroll()
</script>

<template>
  <section
    id="hero"
    class="section min-h-screen flex items-center justify-center"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div class="max-w-5xl mx-auto">
        <!-- Intro label -->
        <p class="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-4">
          {{ personalInfo.title }}
        </p>

        <!-- Headline -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 mb-4">
          <span class="block mb-2">
            Welcome
            <span class="wave inline-block text-emerald-400" aria-label="Waving hello" role="img">👋</span>
          </span>
          <span class="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            I'm {{ personalInfo.name }}
          </span>
        </h1>

        <!-- Role subtitle -->
        <p class="text-xl text-slate-300 mb-6 max-w-3xl">
          {{ personalInfo.tagline }}
        </p>

        <!-- Bio -->
        <p class="text-lg text-slate-400 mb-8 max-w-2xl">
          {{ personalInfo.bio }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            type="button"
            @click="scrollTo('#projects')"
            class="px-8 py-3 bg-emerald-500 text-slate-900 font-semibold rounded-lg hover:bg-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
          >
            View My Work
          </button>
          <button
            type="button"
            @click="scrollTo('#contact')"
            class="px-8 py-3 border-2 border-slate-600 text-slate-200 font-semibold rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Contact Me
          </button>
          <a
            :href="resumeUrl"
            download="Pila-San-CV.pdf"
            class="px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Download class="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
