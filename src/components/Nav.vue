<script setup>


</script>

<template>
    <nav>
        <RouterLink :to="{name: 'home'}">Accueil</RouterLink>
        <RouterLink :to="{name: 'perso'}">Qui suis-je ?</RouterLink>
        <RouterLink :to="{name: 'pro'}">Parcours professionnel</RouterLink>
        <RouterLink :to="{name: 'projs'}">Projets</RouterLink>
    </nav>

    <nav>
        <a href="https://github.com/Metro-Lun" id='pfp'>
            <img src='../assets/images/pfp.png' />
        </a>
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
        background: #1f2c79;
        color: white;
        display: flex;
        align-items: center;
        border-bottom: 5px solid #ada4ff;
        z-index: 2;
    }

    nav a {
        display: inline-block;
        margin-right: 20px;
        opacity: 0.7;
        text-decoration: none;
        font-weight: bold;
        color: #ada4ff;
    }

    header nav:nth-child(2) {
        display: flex;
        justify-content: flex-end;
    }

    #pfp {
        opacity: 1;
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
        color: #b71dff;
    }
</style>