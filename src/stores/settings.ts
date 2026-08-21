import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import i18n from '@/i18n'

export type Accent = 'blue' | 'green' | 'pink' | 'purple' | 'orange' | 'white'
export type Locale = 'fr' | 'en'

export const ACCENTS: { value: Accent; label: string; color: string }[] = [
    { value: 'blue', label: 'Bleu', color: '#2563eb' },
    { value: 'green', label: 'Vert', color: '#059669' },
    { value: 'pink', label: 'Rose', color: '#db2777' },
    { value: 'purple', label: 'Violet', color: '#9333ea' },
    { value: 'orange', label: 'Orange', color: '#ea580c' },
    { value: 'white', label: 'Blanc', color: '#ffffff' },
]

export const useSettingsStore = defineStore('settings', () => {
    const accent = ref<Accent>((localStorage.getItem('accent') as Accent) || 'pink')
    const locale = ref<Locale>((localStorage.getItem('locale') as Locale) || 'fr')

    function applyAccent(value: Accent) {
        document.documentElement.setAttribute('data-accent', value)
    }

    function applyLocale(value: Locale) {
        i18n.global.locale.value = value
        document.documentElement.setAttribute('lang', value)
    }

    watch(accent, (value) => {
        localStorage.setItem('accent', value)
        applyAccent(value)
    })

    watch(locale, (value) => {
        localStorage.setItem('locale', value)
        applyLocale(value)
    })

    function init() {
        applyAccent(accent.value)
        applyLocale(locale.value)
    }

    return { accent, locale, init, ACCENTS }
})
