<script setup lang="ts">
import { skillCategories } from '@/data/portfolioData'
</script>

<template>
  <section id="skills" class="section bg-slate-800/30">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <p class="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-4">
          Technical Expertise
        </p>
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Skills</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Technologies and tools I specialize in across the full development stack.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-6">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300"
        >
          <h3 class="text-lg font-semibold text-slate-200 mb-4">
            {{ category.title }}
          </h3>
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="flex items-center gap-2 bg-slate-900/40 border border-slate-700/40 rounded-lg px-3 py-2 text-sm text-slate-300"
            >
              <component :is="skill.icon" class="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span class="truncate">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
