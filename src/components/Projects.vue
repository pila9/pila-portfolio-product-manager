<script setup lang="ts">
import { projects } from '@/data/portfolioData'
</script>

<template>
  <section id="projects" class="section">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <p class="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-4">
          Selected work
        </p>
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Featured Projects</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          A selection of projects I'm proud of, built with modern technologies
          across digital payment platforms, marketplaces, and e-commerce systems.
        </p>
      </div>

      <div class="space-y-16">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
        >
          <div class="grid lg:grid-cols-2 gap-0">
            <!-- Image -->
            <div class="relative aspect-[16/9] lg:aspect-auto lg:h-full overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div
                class="absolute top-4 left-4 text-3xl font-bold text-slate-100/30"
              >
              </div>
              <div
                v-if="project.subtitle"
                class="absolute bottom-4 left-4 px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-medium rounded-full backdrop-blur-sm"
              >
                {{ project.subtitle }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-8 space-y-5">
              <div>
                <div class="flex items-baseline gap-3 mb-1">
                  <h3
                    class="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors"
                  >
                    {{ project.title }}
                  </h3>
                </div>
                <p class="text-slate-400 text-sm">
                  {{ project.subtitle }}
                </p>
              </div>

              <p class="text-slate-300 text-sm leading-relaxed">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.techStack"
                  :key="tech"
                  class="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
