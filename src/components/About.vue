<script setup lang="ts">
import { personalInfo, productSkills } from '@/data/portfolioData'
</script>

<template>
  <section id="about" class="section pt-8 md:pt-12">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <p class="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-4">
          About me
        </p>
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Introduction</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          {{ personalInfo.bio }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left: Overview & Role Cards -->
        <div class="space-y-8">
          <div class="space-y-4 text-slate-300">
            <p class="text-base leading-relaxed">
              {{ personalInfo.bioLong }}
            </p>
          </div>
        </div>

        <!-- Right: Profile Image & Product Skills -->
        <div class="space-y-10">
          <!-- Profile -->
          <div class="flex flex-col items-center text-center">
            <div
              class="relative mb-4"
            >
              <div
                class="w-48 h-48 rounded-full overflow-hidden ring-4 ring-emerald-400/20 border-4 border-slate-700/50 shadow-xl"
              >
                <img
                  :src="personalInfo.profileImage"
                  :alt="personalInfo.name"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <h3 class="text-xl font-bold text-slate-100">
              {{ personalInfo.name }}
            </h3>
            <p class="text-emerald-400">
              {{ personalInfo.title }}
            </p>
          </div>

          <!-- Product Skills with progress bars -->
          <div class="space-y-5">
            <h3 class="text-lg font-semibold text-slate-200">
              Product Skills
            </h3>
            <div class="space-y-4">
              <div
                v-for="skill in productSkills"
                :key="skill.id"
                class="space-y-2"
              >
                <div class="flex justify-between items-center">
                  <span class="text-slate-300 font-medium">{{ skill.name }}</span>
                  <span class="text-emerald-400 font-medium">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <div
                    class="bg-gradient-to-r from-emerald-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                    :style="{ width: `${skill.level}%` }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
