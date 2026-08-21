<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <div class="p-8">
        <h1 class="text-3xl font-bold" style="color: var(--color-primary)">
            {{ t('projects.title') }}
        </h1>
        <p class="mt-2 text-gray-600">{{ t('projects.description') }}</p>
    </div>
</template>
