<script setup>
    import { RouterView } from 'vue-router'
    import HeaderComponent from './components/HeaderComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';
    import { ref } from 'vue';
    import { useThemeStore } from '@/stores/theme';

    const themeStore = useThemeStore();

    let windowTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    let theme = ref(windowTheme);

    function toggleTheme() {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
        console.log(theme.value)
    }

</script>

<template>
    <HeaderComponent :theme="themeStore.theme" @newTheme="toggleTheme" />

    <main :class="themeStore.theme === 'light' ? 'light' : 'dark'">
        <RouterView />
    </main>

    <FooterComponent :theme="themeStore.theme"/>
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
        margin: 0 auto;
        padding-bottom: 1em;
    }

    /* DARK MAIN*/
    .dark {
        background-color: rgb(22, 0, 0);
        color: white;
    }
</style>