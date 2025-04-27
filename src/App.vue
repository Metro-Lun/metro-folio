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

    <main :class="themeStore.theme">
        <section :class="themeStore.theme" id="app">
            <RouterView />
        </section>
    </main>

    <FooterComponent :theme="themeStore.theme"/>
</template>

<style>
    main {
        width: 100%;
        min-height: 100vh;
        padding-bottom: auto;
    }

    main.dark {
        background-color: #D84040;
        color: white;
    }
</style>