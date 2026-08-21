<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Timeline from '@/components/Timeline.vue'

const { t, tm } = useI18n()

const parcoursRaw = tm('parcours.items') as {
    place: string
    level: string
    period: string
    description: string
}[]

const parcours = parcoursRaw.map((item) => ({
    label: item.level,
    title: item.place,
    period: item.period,
    description: item.description,
}))

const experiencesRaw = tm('experiences.items') as {
    title: string
    date: string
    description: string
}[]

const experiences = experiencesRaw.map((item) => ({
    label: item.date,
    title: item.title,
    period: '',
    description: item.description,
}))
</script>

<template>
    <div class="mx-auto max-w-4xl px-6 py-20">
        <!-- Hero -->
        <section class="space-y-6">
            <h1 class="text-5xl font-bold" style="color: var(--color-primary)">
                {{ t('home.title') }}
            </h1>
            <p class="text-lg text-gray-400">{{ t('home.subtitle') }}</p>
            <div class="flex gap-4">
                <router-link
                    to="/projects"
                    class="inline-block rounded-lg px-6 py-3 text-sm font-medium transition-colors"
                    style="background-color: var(--color-primary); color: var(--color-primary-text)"
                    @mouseenter="
                        ($event.target as HTMLElement).style.backgroundColor =
                            'var(--color-primary-hover)'
                    "
                    @mouseleave="
                        ($event.target as HTMLElement).style.backgroundColor =
                            'var(--color-primary)'
                    "
                >
                    {{ t('home.cta') }}
                </router-link>
                <router-link
                    to="/contact"
                    class="inline-block rounded-lg border px-6 py-3 text-sm font-medium transition-colors hover:bg-gray-800"
                    style="border-color: var(--color-primary); color: var(--color-primary)"
                >
                    {{ t('home.ctaSecondary') }}
                </router-link>
            </div>
        </section>

        <!-- Education -->
        <section class="mt-24 space-y-8">
            <h2 class="text-2xl font-bold" style="color: var(--color-primary)">
                {{ t('parcours.title') }}
            </h2>
            <Timeline :items="parcours" />
        </section>

        <!-- Experiences -->
        <section class="mt-24 space-y-8">
            <h2 class="text-2xl font-bold" style="color: var(--color-primary)">
                {{ t('experiences.title') }}
            </h2>
            <Timeline :items="experiences" />
        </section>
    </div>
</template>
