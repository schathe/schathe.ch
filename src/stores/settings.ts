import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
    const theme = ref(localStorage.getItem('theme') || 'system')
    const locale = ref(localStorage.getItem('locale') || navigator.language.slice(0, 2))

    function applyTheme(value: string) {
        const isDark =
            value === 'dark' ||
            (value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
        document.documentElement.classList.toggle('dark', isDark)
    }

    // watch(theme, (value) => {
    //     localStorage.setItem('theme', value)
    //     applyTheme(value)
    // }, { immediate: true })

    watch(locale, (value) => {
        localStorage.setItem('locale', value)
    })

    return { theme, locale }
})
