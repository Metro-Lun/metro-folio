<script setup>
    import { RouterView } from 'vue-router'
    import HeaderComponent from './components/HeaderComp.vue';
    import FooterComponent from './components/FooterComp.vue';

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