<script setup>
    import { RouterLink } from 'vue-router';
    import { useThemeStore } from '@/stores/theme';
    
    const themeStore = useThemeStore();
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <header :class="themeStore.theme">
        <div id="profile-container">
            <img src="/assets/images/pfp.png" />
            <p>Mehdi BOURBON</p>
        </div>

        <section id="links-n-light">
            <nav :class="themeStore.theme">
                <RouterLink :to="{name: 'home'}">Accueil</RouterLink>
                <RouterLink :to="{name: 'projs'}">Projets</RouterLink>
                <RouterLink :to="{name: 'skills'}">Compétences à l'IUT</RouterLink>
            </nav>

            <!-- <LightSwitch /> -->
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
        backdrop-filter: blur(10px);
        color: white;
    }

    header :is(.router-link-active, .router-link-exact-active, .active) {
        opacity: 1;
    }

    /* LIGHT SWITCH */
    #links-n-light {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-right: 1em;
    }

    header img {
        height: 80%;
        border-radius: 50%;
        margin: 0.2em 0.7em;
    }

    #profile-container {
        height: 4em;
        display: flex;
        align-items: center;
    }

    #profile-container p {
        font-family: 'Cascadia', 'Consolas', 'Proxima Nova', Arial, Helvetica, sans-serif;
        font-size: 32px;
        font-weight: bold;
    }

    header.dark #profile-container p {
        color: white;
    }

    header.light #profile-container p {
        color: black;
    }
</style>