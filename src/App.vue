<script setup>
    import { RouterView } from 'vue-router'
    import Nav from '@/components/PortNav.vue'
</script>

<template>
    <header>
        <Nav></Nav>
    </header>

    <main>
        <RouterView />
    </main>
</template>

<style>


    
</style>
