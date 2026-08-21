<script setup lang="ts">
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <div class="flex min-h-screen flex-col">
        <Navbar />
        <main class="flex-1">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>
