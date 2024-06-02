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
    h1 {
        display: flex;
        justify-content: center;
        margin-bottom: 3em;
    }

    main {
        max-width: 100em;
        margin: auto;
    }

    /* EXPLAIN SECTION */

    .explain-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100em;
        margin: 5em auto;
        gap: 20px;
    }

    .explain-div h2 {
        background-color: grey;
        border-radius: 24px 24px 0px 0px;
        margin: 0px;
        padding: 10px 20px;
    }

    .explain-div div {
        margin: 0;
        border-radius: 0px 0px 24px 24px;
        padding: 10px;
        background-color: rgb(107, 107, 253);
    }

    .explain-title-right {
        text-align: right;
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
        max-height: 1000px;
        opacity: 1;
        transform: translateY(0);
    }

    header {
        display: grid;
        grid-template: auto / 1fr 3fr;
    }
</style>
