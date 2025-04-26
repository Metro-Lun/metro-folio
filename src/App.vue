<script setup>
    import { RouterView } from 'vue-router'
    import HeaderComponent from './components/HeaderComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';
    import { ref } from 'vue';

    let windowTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    let theme = ref(windowTheme);

    function toggleTheme() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
        console.log(theme.value)
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

    main {
        width: 100%;
        max-width: 200em;
        margin: auto;
    }

    /* DARK MAIN*/
    .dark {
        background-color: rgb(22, 0, 0);
        color: white;
    }

    /* LIGHT MAIN */
    .light {
        background-color: rgb(255, 247, 247);
    }


</style>