<script setup lang="ts">
import { ref } from 'vue'
import { certificates } from '@/data/portfolioData'
import { Award, X } from '@lucide/vue'

const previewImage = ref<string | null>(null)
</script>

<template>
  <section id="certifications" class="section">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-100 mb-4 flex items-center justify-center gap-3">
          <Award class="w-7 h-7 text-emerald-400" />
          Certifications & Achievements
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Professional certifications and recognized achievements.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="cert in certificates"
          :key="cert.id"
          class="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
        >
          <button
            type="button"
            class="aspect-[4/3] overflow-hidden block w-full text-left"
            @click="previewImage = cert.image"
          >
            <img
              :src="cert.image"
              :alt="cert.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </button>
          <div class="p-5 space-y-2">
            <h3 class="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
              {{ cert.title }}
            </h3>
            <p class="text-slate-400 text-sm">{{ cert.issuer }}</p>
            <p class="text-slate-500 text-xs">{{ cert.date }}</p>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="previewImage"
        class="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        @click.self="previewImage = null"
      >
        <div class="relative max-w-5xl w-full mx-4">
          <img
            :src="previewImage"
            alt="Certificate preview"
            class="max-h-[90vh] mx-auto rounded-xl shadow-2xl"
          />
          <button
            type="button"
            class="absolute top-3 right-3 bg-slate-900/70 hover:bg-slate-900 text-slate-100 rounded-full p-2 transition-colors"
            @click="previewImage = null"
          >
            <X class="w-6 h-6" />
          </button>
        </div>
      </div>
    </Teleport>
  </section>
</template>
