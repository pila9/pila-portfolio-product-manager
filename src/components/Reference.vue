<script setup lang="ts">
import { references } from '@/data/referenceData'
import { Mail, Phone } from '@lucide/vue'
</script>

<template>
  <section id="reference" class="section bg-slate-800/30">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <p class="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-4">
          Professional Endorsement
        </p>
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Reference Available</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Professional references available upon request from former colleagues and managers.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div
          v-for="ref in references"
          :key="ref.name"
          class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-emerald-400/50 transition-all duration-300"
        >
          <div class="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-100 mb-1">
            {{ ref.name }}
          </h3>
          <p class="text-emerald-400 font-medium text-sm mb-1">
            {{ ref.title }}
          </p>
          <p class="text-slate-400 text-sm mb-4">
            {{ ref.company }}
          </p>
          <div class="flex flex-col gap-2 text-sm text-slate-400">
            <a
              v-if="ref.email"
              :href="`mailto:${ref.email}`"
              class="flex items-center justify-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <Mail class="w-4 h-4" />
              <span>{{ ref.email }}</span>
            </a>
            <a
              :href="`tel:${ref.phone.replace(/\D/g, '')}`"
              class="flex items-center justify-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <Phone class="w-4 h-4" />
              <span>{{ ref.phone }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
