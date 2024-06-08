<script setup>


</script>

<template>
    <nav>
        <a href="https://github.com/Metro-Lun" id='pfp'>
            <img src='../assets/images/pfp.png' />
        </a>
    </nav>

    <nav>
        <RouterLink :to="{name: 'home'}">Accueil</RouterLink>
        <RouterLink :to="{name: 'perso'}">Qui suis-je ?</RouterLink>
        <RouterLink :to="{name: 'pro'}">Parcours professionnel</RouterLink>
        <RouterLink :to="{name: 'skills'}">Compétences à l'IUT</RouterLink>
        <RouterLink :to="{name: 'projs'}">Mes projets</RouterLink>
    </nav>
</template>

<style scoped>
    nav {
        top: 0;
        left: 0;
        right: 0;
        margin-top: 0;
        margin-bottom: 2em;
        padding: 6px 20px;
        background-color: #4d0000;
        display: flex;
        align-items: center;
        z-index: 2;
    }

    nav a, nav p {
        display: inline-block;
        margin-right: 20px;
        opacity: 0.7;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        color: #ffffff;
    }

    nav p {
        font-size: 30px;
        margin: 0;
    }

    header nav:nth-child(2) {
        display: flex;
        justify-content: flex-end;
    }

    #pfp {
        display: flex;
        opacity: 1;
    }

    #pfp:hover{
        animation: tourne 2s infinite;
    }

    #pfp img {
        width: 70px;
        border-radius: 50%;
    }

    nav a.active,
    nav a:hover {
        opacity: 1;
    }

    .router-link-active, .router-link-exact-active, .active {
        color: #ff44cd;
    }

    /* ROTATION DE L'IMAGE */

    @keyframes tourne {
        0% {
            transform: rotate( 0deg );
        }
        100% {
            transform: rotate( -360deg );
        }
    };
</style>