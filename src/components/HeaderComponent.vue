<script setup>
    import { RouterLink } from 'vue-router';

    const props = defineProps(["theme"]);
    const emits = defineEmits(["newTheme"]);

    function changeTheme() {
        emits("newTheme");
    }
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <header :class="props.theme === 'light' ? 'light' : 'dark'">
        <section id="links-n-light">
            <nav>
                <RouterLink :to="{name: 'home'}">Accueil</RouterLink>
                <RouterLink :to="{name: 'projs'}">Projets</RouterLink>
                <RouterLink :to="{name: 'skills'}">Compétences à l'IUT</RouterLink>
            </nav>
            <section id="switch-container">
                <div id="light-switch" @click="changeTheme">
                    <div>
                        <i v-show="props.theme === 'dark'" id="dark-icon" class="fas fa-moon"></i>
                    </div>
                    <div>
                        <i v-show="props.theme === 'light'" id="light-icon" class="fas fa-sun"></i>
                    </div>
                    <div id="switch-btn"></div>
                </div>
            </section>
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
    }

    header.light {
        background-color: rgb(255, 79, 79);
    }

    header.dark {
        background-color: blue;
    }



    /* LIGHT SWITCH */

    #light-switch{
        width: 4rem;
        height: 2rem;
        background-color: #1E2939;
        border-radius: 1rem;  
        position: relative;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    header.light #light-switch {
        background-color: rgb(95, 223, 255);
    }

    #switch-btn {
        width: 2rem;
        height: 2rem;
        border-radius: 50%; /* Avec 50% on obtient un disque */ 
        background-color: white;
        position: absolute; 
    }

    #dark-icon {
        padding-left: 10px;
        color: white;
    }

    #light-icon {
        padding-right: 10px;
        color: yellow;
    }
    
    #switch-btn {
        border: 1px solid black;
    }

    header.dark #switch-btn {
        right: -1px;        /* allows for the button to move */
        background-color: white;
    }

    header.light #switch-btn {
        background-color: yellow;
    }

    #links-n-light {
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .router-link-active, .router-link-exact-active, .active {
        color: #ff44cd;
    }







</style>