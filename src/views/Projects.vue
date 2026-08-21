<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const projects = tm('projects.items') as {
    title: string
    tech: string
    description: string
    link: string
    linkLabel: string
}[]
</script>

<template>
    <div class="mx-auto max-w-5xl px-8 py-12 sm:py-24">
        <h1 class="text-3xl font-bold" style="color: var(--color-primary)">
            {{ t('projects.title') }}
        </h1>
        <p class="mt-2 text-gray-200">{{ t('projects.description') }}</p>

        <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
                v-for="(project, index) in projects"
                :key="index"
                class="flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-800/50 p-6 transition-colors hover:border-gray-700"
            >
                <div class="space-y-3">
                    <div>
                        <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
                        <p class="text-xs font-medium" style="color: var(--color-primary)">
                            {{ project.tech }}
                        </p>
                    </div>
                    <p class="text-sm text-gray-200">{{ project.description }}</p>
                </div>
                <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-4 inline-block text-sm font-medium transition-colors hover:underline"
                    style="color: var(--color-primary)"
                >
                    {{ project.linkLabel }}
                </a>
            </div>
        </div>
    </div>
</template>
