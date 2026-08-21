<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <div class="p-8">
        <h1 class="text-3xl font-bold" style="color: var(--color-primary)">
            {{ t('home.title') }}
        </h1>
    </div>
</template>
