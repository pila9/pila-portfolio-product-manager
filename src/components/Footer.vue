<script setup lang="ts">
import { computed } from 'vue'
import { socialLinks, personalInfo, contactInfo } from '@/data/portfolioData'

const contactLinks = computed(() => contactInfo.filter((i) => i.href))
</script>

<template>
  <footer class="bg-slate-900 border-t border-slate-700/50 section">
    <div class="container mx-auto">
      <div class="text-center">
        <p class="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-4">
          Connect
        </p>
        <h2 class="text-2xl font-bold text-slate-100 mb-2">
          Let's connect
        </h2>
        <p class="text-slate-400 max-w-xl mx-auto mb-8">
          Find me online — explore my code, professional background, or reach
          out directly.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.label"
            class="flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-300 hover:text-emerald-400 hover:border-emerald-400/50 transition-all duration-200 group"
          >
            <component
              :is="link.icon"
              class="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-200"
            />
            <span>{{ link.label }}</span>
          </a>
        </div>

        <div class="flex flex-col sm:flex-row gap-6 justify-center text-sm text-slate-400">
          <a
            v-for="info in contactLinks"
            :key="info.label"
            :href="info.href"
            class="flex items-center justify-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <component :is="info.icon" class="w-4 h-4 text-emerald-400" />
            <span>{{ info.value }}</span>
          </a>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-slate-700/50 text-center text-sm text-slate-400">
        <p>
          &copy; {{ new Date().getFullYear() }} {{ personalInfo.name }}. All rights reserved.
        </p>
        <p class="mt-2">
          Built with Vue 3, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>
