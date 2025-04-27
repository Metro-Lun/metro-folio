<script setup>
    import { RouterLink } from 'vue-router';
    import LightSwitch from './LightSwitch.vue';
    import { useThemeStore } from '@/stores/theme';
    
    const themeStore = useThemeStore();
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <header :class="themeStore.theme === 'light' ? 'light' : 'dark'">
        <div id="profile-container">
            <img src="/assets/images/pfp.png" />
            <p>Mehdi BOURBON</p>
        </div>

        <section id="links-n-light">
            <nav>
                <RouterLink :to="{name: 'home'}">Accueil</RouterLink>
                <RouterLink :to="{name: 'projs'}">Projets</RouterLink>
                <RouterLink :to="{name: 'skills'}">Compétences à l'IUT</RouterLink>
                <RouterLink :to="{name: 'contact'}">Me contacter</RouterLink>
            </nav>

            <LightSwitch />
         </section>
    </header>
</template>

<style scoped>
    header {
        top: 0;
        position: fixed;
        display: grid;
        grid-template: auto / 1fr 1fr;
        width: 100%;
        z-index: 2000;
        height: 4em;
        color: black;
    }

    header.light {
        background-color: rgb(255, 79, 79);
    }

    header.dark {
        background-color: rgb(255, 205, 205);
    }

    header.light :is(.router-link-active, .router-link-exact-active, .active) {
        color: #6b0000;
    }

    header.dark :is(.router-link-active, .router-link-exact-active, .active) {
        color: #1f0000;
    }

    /* LIGHT SWITCH */
    #links-n-light {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-right: 1em;
    }

    header img {
        height: 90%;
        border-radius: 50%;
        margin: auto 1em;
    }

    #profile-container {
        height: 4em;
        display: flex;
    }

</style>