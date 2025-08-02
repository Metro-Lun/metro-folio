<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const opened = ref(false);

    const openHeader = () => {
        opened.value = !opened.value;
    }
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <header>
        <div id="profile-container">
            <img src="/assets/images/pfp.png" />
            <p>Mehdi BOURBON</p>
        </div>

        <div id="burger" v-on:click="openHeader">
            <i class="fa-solid fa-bars" />
        </div>

        <nav id="links" :class="`${opened ? 'opened': ''}`">
            <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
            <RouterLink :to="{ name: 'home', hash: '#technologies' }">Technologies</RouterLink>
            <RouterLink :to="{ name: 'home', hash: '#projects' }">Projets</RouterLink>
            <RouterLink :to="{ name: 'home', hash: '#journey' }">Parcours pro et perso</RouterLink>
            <RouterLink :to="{ name: 'home', hash: '#contact' }">Contact</RouterLink>
            <RouterLink :to="{ name: 'skills' }">Compétences à l'IUT</RouterLink>
        </nav>

        <!-- <LightSwitch /> -->
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
        background-color: rgba(255,255,255,0.2);
    }

    header :is(.router-link-active, .router-link-exact-active, .active) {
        opacity: 1;
    }

    /* LIGHT SWITCH */
    #links {
        display: flex;
        gap: 1em;
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
        font-family: 'Quicksand', 'Cascadia', 'Consolas', 'Proxima Nova', Arial, Helvetica, sans-serif;
        font-size: 32px;
        font-weight: bold;
    }

    header #profile-container p {
        color: white;
    }

    /* RESPONSIVE */

    #burger {
        display: none;
    }

    @media (max-height: 800px) {
        #burger {
            display: flex;
            align-items: center;
            justify-content: end;
            margin-right: 1em;
            font-size: 35px;
        }

        #links {
            opacity: 0;
            top: 4em;
            right: 0;
            position: absolute;
            z-index: 1212;
            display: flex;
            flex-direction: column;
            align-items: end;
            background-color: white;
            border-radius: 16px;
            transition: all .5s ease-in-out;
            user-select: none;
            pointer-events: none;
        }

        #links.opened {
            opacity: 1;
            user-select: auto;
            pointer-events: auto;
        }

        #links.opened a {
            color: black;
            margin : 5px 20px 5px 20px;
        }

        #profile-container p {
            font-size: 15px;
        }

        header img {
            height: 60%;
        }
    }
</style>