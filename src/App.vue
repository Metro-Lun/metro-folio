<script setup>
    import { RouterView } from 'vue-router'
    import PortNav from '@/components/PortNav.vue'
</script>

<template>
    <header>
        <PortNav />
    </header>

    <main>
        <RouterView />
    </main>
</template>
