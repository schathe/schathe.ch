<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Cog6ToothIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'
import { useSettingsStore, ACCENTS } from '@/stores/settings'

const { t } = useI18n()
const settings = useSettingsStore()

const languages = [
    { value: 'fr' as const, label: 'Français' },
    { value: 'en' as const, label: 'English' },
]
</script>

<template>
    <nav class="flex items-center gap-6 p-4">
        <span class="text-xl font-bold" style="color: var(--color-primary)">Schathe</span>
        <router-link to="/" class="text-sm transition-colors hover:text-[var(--color-primary)]">
            {{ t('nav.home') }}
        </router-link>
        <router-link to="/projects" class="text-sm transition-colors hover:text-[var(--color-primary)]">
            {{ t('nav.projects') }}
        </router-link>
        <router-link to="/contact" class="text-sm transition-colors hover:text-[var(--color-primary)]">
            {{ t('nav.contact') }}
        </router-link>

        <div class="ml-auto">
            <Menu as="div" class="relative">
                <MenuButton
                    class="flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-[var(--color-primary)]"
                >
                    <Cog6ToothIcon class="size-6" />
                </MenuButton>
                <MenuItems
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg border border-gray-200 bg-white p-4 shadow-lg focus:outline-hidden dark:border-gray-700 dark:bg-gray-800"
                >
                    <div class="space-y-4">
                        <div>
                            <p class="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                                {{ t('settings.accent') }}
                            </p>
                            <div class="flex gap-2">
                                <MenuItem v-for="a in ACCENTS" :key="a.value">
                                    <button
                                        class="h-7 w-7 rounded-full transition-transform hover:scale-110"
                                        :class="settings.accent === a.value ? 'ring-2 ring-offset-2 ring-[var(--color-primary-ring)]' : ''"
                                        :style="{ backgroundColor: a.color }"
                                        :title="a.label"
                                        @click="settings.accent = a.value"
                                    />
                                </MenuItem>
                            </div>
                        </div>

                        <div class="border-t border-gray-200 dark:border-gray-600">
                            <p class="mb-2 pt-4 text-xs font-medium uppercase tracking-wider text-gray-400">
                                {{ t('settings.language') }}
                            </p>
                            <div class="flex gap-2">
                                <MenuItem v-for="lang in languages" :key="lang.value">
                                    <button
                                        class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
                                        :class="
                                            settings.locale === lang.value
                                                ? ''
                                                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                        "
                                        :style="
                                            settings.locale === lang.value
                                                ? { backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-text)' }
                                                : {}
                                        "
                                        @click="settings.locale = lang.value"
                                    >
                                        {{ lang.label }}
                                    </button>
                                </MenuItem>
                            </div>
                        </div>
                    </div>
                </MenuItems>
            </Menu>
        </div>
    </nav>
</template>
