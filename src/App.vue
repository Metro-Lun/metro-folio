<script setup>
    import { RouterView } from 'vue-router'
    import Nav from '@/components/Nav.vue'
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
    h1.title {
        display: flex;
        justify-content: center;
    }

    main {
        max-width: 100em;
        margin: auto;
    }

    

    .v-enter-active, .v-leave-active {
        transition: all 2s ease;
    }

    .v-enter-from, .v-leave-to {
        max-height: 0;
        opacity: 0;
        transform: translateY(-50px);
    }

    .v-enter-to, .v-leave-from {
        max-height: 1000px; /* Ajustez cette valeur selon le contenu */
        opacity: 1;
        transform: translateY(0);
    }
</style>
