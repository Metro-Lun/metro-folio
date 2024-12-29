<script setup>
    import { RouterLink } from 'vue-router';

    defineProps(["theme"]);
    const emits = defineEmits(["newTheme"]);

    function changeTheme() {
        emits("newTheme");
    }
</script>

<template>
    <header :class="theme === 'light' ? 'light' : 'dark'">
        <img src="/assets/images/pfp.png" />

        <section>
            <nav>
                <RouterLink :to="{name: 'home'}">Accueil</RouterLink>
                <RouterLink :to="{name: 'projs'}">Projets</RouterLink>
                <RouterLink :to="{name: 'skills'}">Compétences à l'IUT</RouterLink>
            </nav>
            <div id="light-switch" @click="changeTheme">
                <i class="fas fa-moon"></i>
                <div id="switch-btn"></div>
            </div>
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
    }

    /* LIGHT SWITCH */

    #light-switch{
        width: 4rem;
        height: 2rem;
        border: 1px solid #1E2939;
        background-color: #1E2939;
        border-radius: 1rem;  
        position: relative;
        border: 1px solid red;
    }

    #switch-btn {
        width: 2rem;
        height: 2rem;
        border-radius: 50%; /* Avec 50% on obtient un disque */ 
        background-color: white;
        position: absolute; 
    }

    header.dark #switch-btn {
        right: -1px;
    }















</style>