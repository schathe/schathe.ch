<!-- File made with the assistance of OpenCode -->

<script setup lang="ts">
defineProps<{
    items: { label: string; title: string; period: string; description: string }[]
}>()
</script>

<template>
    <div class="relative">
        <!-- Vertical line -->
        <div
            class="absolute left-4 top-0 bottom-0 w-px bg-gray-800 sm:left-1/2 sm:-translate-x-px"
        ></div>

        <div class="space-y-12">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                :class="index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'"
            >
                <!-- Content -->
                <div
                    class="ml-12 flex-1 sm:ml-0"
                    :class="index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'"
                >
                    <p
                        class="mb-1 text-xs font-semibold uppercase tracking-wider"
                        style="color: var(--color-primary)"
                    >
                        {{ item.label }}
                    </p>
                    <h3 class="text-lg font-semibold text-white">{{ item.title }}</h3>
                    <p class="mb-1 text-xs text-gray-500">{{ item.period }}</p>
                    <p class="text-sm text-gray-400">{{ item.description }}</p>
                </div>

                <!-- Dot on the line -->
                <div
                    class="absolute left-4 top-3 size-3 -translate-x-1/2 rounded-full border-2 sm:left-1/2 sm:top-auto"
                    :style="{
                        borderColor: 'var(--color-primary)',
                        backgroundColor: 'var(--color-primary)',
                    }"
                ></div>

                <!-- Invisible spacer on the other side -->
                <div class="hidden flex-1 sm:block"></div>
            </div>
        </div>
    </div>
</template>
