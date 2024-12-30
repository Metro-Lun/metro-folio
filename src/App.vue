<script setup>
    import { RouterView } from 'vue-router'
    import HeaderComponent from './components/HeaderComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';
    import { ref } from 'vue';

    let windowTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    let theme = ref(windowTheme);

    function toggleTheme() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
    }

</script>

<template>
    <HeaderComponent :theme="theme" @newTheme="toggleTheme" />

    <main :class="theme === 'light' ? 'light' : 'dark'">
        <RouterView />
    </main>

    <FooterComponent />
</template>

<style>

    /* FOOTER */

    footer {
        display: grid;
        grid-template: auto / 1fr 1fr;
    }

    footer nav {
        display: flex;
        margin-top: 5em;
        margin-bottom: 0;
    }

    footer div {
        justify-content: flex-end;
    }

    footer img {
        width: 70px;
    }

    header {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    main {
        width: 100%;
        max-width: 200em;
        margin: auto;
    }

    /* DARK MAIN*/

    /* LIGHT MAIN */



</style>