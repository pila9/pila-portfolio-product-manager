<script setup lang="ts">
import { computed } from 'vue'
import { education } from '@/data/portfolioData'
import { GraduationCap, Award, Star } from '@lucide/vue'

const degreeItems = computed(() => education.filter((i) => i.type === 'degree'))
const trainingItems = computed(() =>
  education.filter((i) => i.type === 'training' || i.type === 'course'),
)
</script>

<template>
  <section id="education" class="section bg-slate-800/30">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <p class="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-4">
          Academic Journey &amp; Credentials
        </p>
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Education &amp; Growth</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Formal education, professional certificates, and recognized achievements.
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <!-- Academic Background -->
        <div class="mb-12">
          <h3
            class="text-xl font-semibold text-slate-200 flex items-center gap-2 mb-6"
          >
            <GraduationCap class="w-5 h-5 text-emerald-400" />
            Academic Background
          </h3>
          <div class="space-y-6">
            <div
              v-for="item in degreeItems"
              :key="item.id"
              class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <Star class="w-4 h-4 text-yellow-400" />
                    <h4
                      class="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors"
                    >
                      {{ item.degree }}
                    </h4>
                  </div>
                  <p class="text-emerald-400 font-medium mb-1">
                    {{ item.institution }}
                  </p>
                  <p class="text-slate-400 text-sm mb-2">
                    {{ item.period }}
                  </p>
                  <p v-if="item.description" class="text-slate-300 text-sm">
                    {{ item.description }}
                  </p>
                </div>
                <div
                  class="flex items-center px-3 py-1 bg-slate-900/50 border border-slate-700/50 rounded-full text-sm text-slate-300"
                >
                  Degree
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Training & Certifications -->
        <div>
          <h3
            class="text-xl font-semibold text-slate-200 flex items-center gap-2 mb-6"
          >
            <Award class="w-5 h-5 text-emerald-400" />
            Training &amp; Certifications
          </h3>
          <div class="space-y-6">
            <div
              v-for="item in trainingItems"
              :key="item.id"
              class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div class="flex-1">
                  <h4
                    class="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-1"
                  >
                    {{ item.degree }}
                  </h4>
                  <p class="text-emerald-400 font-medium mb-1">
                    {{ item.institution }}
                  </p>
                  <p class="text-slate-400 text-sm">
                    {{ item.period }}
                  </p>
                </div>
                <div
                  class="flex items-center px-3 py-1 bg-slate-900/50 border border-slate-700/50 rounded-full text-sm text-slate-300"
                >
                  Certificate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
