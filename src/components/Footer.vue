<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const links = [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Gmail', href: 'mailto:contact@schathe.ch' },
]
</script>

<template>
    <footer class="mt-24 border-t border-gray-800 px-6 py-8">
        <div class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p class="text-sm text-gray-500">&copy; {{ new Date().getFullYear() }} Schathe. {{ t('footer.rights') }}</p>
            <div class="flex gap-4">
                <a
                    v-for="link in links"
                    :key="link.label"
                    :href="link.href"
                    target="_blank"
                    rel="noopener"
                    class="text-sm text-gray-500 transition-colors hover:text-[var(--color-primary)]"
                >
                    {{ link.label }}
                </a>
            </div>
        </div>
    </footer>
</template>
