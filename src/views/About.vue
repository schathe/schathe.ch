<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const contacts = [
    {
        icon: 'phone',
        label: 'Téléphone',
        value: '079 964 41 90',
        href: 'tel:+41799644190',
    },
    {
        icon: 'email',
        label: 'Email',
        value: 'theoschaff@gmail.com',
        href: 'mailto:theoschaff@gmail.com',
    },
    {
        icon: 'github',
        label: 'GitHub',
        value: 'Schathe',
        href: 'https://github.com/schathe',
    },
    {
        icon: 'x',
        label: 'X',
        value: 'schathe_',
        href: 'https://x.com/schathe_',
    },
    {
        icon: 'linkedin',
        label: 'LinkedIn',
        value: 'Théo Schaffner',
        href: 'https://www.linkedin.com/in/th%C3%A9o-schaffner-923204417/',
    },
]
</script>

<template>
    <div class="mx-auto max-w-5xl px-8 py-12 sm:py-24">
        <h1 class="text-3xl font-bold" style="color: var(--color-primary)">
            {{ t('contact.title') }}
        </h1>
        <p class="mt-2 text-gray-200">{{ t('contact.description') }}</p>

        <div class="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-6">
            <a
                v-for="(item, index) in contacts"
                :key="item.label"
                :href="item.href"
                :target="item.icon === 'phone' || item.icon === 'email' ? undefined : '_blank'"
                :rel="item.icon === 'phone' || item.icon === 'email' ? undefined : 'noopener noreferrer'"
                class="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-800/50 p-4 transition-colors hover:border-gray-700"
                :class="index < 3 ? 'sm:col-span-2' : 'sm:col-span-3'"
            >
                <!-- Phone -->
                <svg v-if="item.icon === 'phone'" class="size-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>

                <!-- Email -->
                <svg v-else-if="item.icon === 'email'" class="size-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>

                <!-- GitHub -->
                <svg v-else-if="item.icon === 'github'" class="size-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>

                <!-- X -->
                <svg v-else-if="item.icon === 'x'" class="size-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>

                <!-- LinkedIn -->
                <svg v-else-if="item.icon === 'linkedin'" class="size-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>

                <div class="min-w-0">
                    <p class="text-xs text-gray-400">{{ item.label }}</p>
                    <p class="truncate text-sm font-medium text-white">{{ item.value }}</p>
                </div>
            </a>
        </div>
    </div>
</template>
