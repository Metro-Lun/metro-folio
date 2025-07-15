<script setup>
    import { RouterView } from 'vue-router'
    import HeaderComponent from './components/HeaderComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';

</script>

<template>
    <HeaderComponent />

    <main>
        <section id="app">
            <RouterView />
        </section>
    </main>

    <FooterComponent/>
</template>

<style>
    main {
        width: 100%;
        min-height: calc(100vh - 6.1em);
        padding-bottom: auto;
        margin-top: 4em;
    }
</style>