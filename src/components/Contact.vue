<script setup lang="ts">
import { contactInfo } from '@/data/portfolioData'
</script>

<template>
  <section id="contact" class="section bg-slate-800/30">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <p class="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-4">
          Get in Touch
        </p>
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Contact</h2>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="group flex items-center gap-4 bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-emerald-400/50 transition-all duration-300"
          >
            <div
              class="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform duration-300"
            >
              <component :is="info.icon" class="w-5 h-5" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-slate-400 truncate">
                {{ info.label }}
              </p>
              <p v-if="info.href" class="text-slate-200 truncate">
                <a
                  :href="info.href"
                  class="hover:text-emerald-400 transition-colors"
                >{{ info.value }}</a>
              </p>
              <p v-else class="text-slate-200 truncate">
                {{ info.value }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
