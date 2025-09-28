<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const opened = ref(false);

    const openHeader = (value) => {
        if(value !== undefined && value !== null) opened.value = value;
        else opened.value = !opened.value;
    }
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <header>
        <div id="profile-container">
            <img draggable="false" src="/assets/images/pfp.png" />
            <p>Mehdi BOURBON</p>
        </div>

        <div id="burger" v-on:click="() => openHeader(null)">
            <i class="fa-solid fa-bars" />
        </div>

        <nav id="links" :class="`${opened ? 'opened': ''}`" v-click-outside="() => openHeader(false)">
            <RouterLink :to="{ name: 'home' }"><p>Accueil</p></RouterLink>
            <RouterLink :to="{ name: 'home', hash: '#technologies' }"><p>Technologies</p></RouterLink>
            <RouterLink :to="{ name: 'home', hash: '#projects' }"><p>Projets</p></RouterLink>
            <RouterLink :to="{ name: 'home', hash: '#journey' }"><p>Parcours pro et perso</p></RouterLink>
            <RouterLink :to="{ name: 'home', hash: '#hobbies'}"><p>Centres d'intérêt</p></RouterLink>
            <RouterLink :to="{ name: 'home', hash: '#contact' }"><p>Contact</p></RouterLink>
        </nav>

        <!-- <LightSwitch /> -->
    </header>
</template>

<style scoped>
    header {
        top: 0;
        position: fixed;
        display: grid;
        grid-template: auto / 1fr 2fr;
        width: 100%;
        z-index: 2000;
        height: 4em;
        backdrop-filter: blur(10px);
        color: white;
        background-color: rgba(255,255,255,0.2);
    }

    a:hover {
        opacity: 0.4;
    }

    nav p {
        font-size: 17px;
    }

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

    @media (max-height: 700px) {
        #burger {
            display: flex;
            align-items: center;
            justify-content: end;
            margin-right: 1em;
            font-size: 35px;
        }

        #links {
            opacity: 0;
            top: 3.5em;
            right: 0;
            position: absolute;
            z-index: 1212;
            display: flex;
            flex-direction: column;
            align-items: end;
            background-color: rgba(0,0,0,0.4);
            border-radius: 16px;
            transition: all .5s ease-in-out;
            user-select: none;
            pointer-events: none;
            gap: 0.2em;
            padding: 0.2em 0;
        }

        #links a {
            margin-left: 20px;
        }

        #links.opened {
            opacity: 1;
            user-select: auto;
            pointer-events: auto;
        }

        #profile-container p {
            font-size: 15px;
        }

        header img {
            height: 60%;
        }
    }
</style>