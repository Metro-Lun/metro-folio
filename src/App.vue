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
</style>