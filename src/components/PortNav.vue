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
        <RouterLink :to="{name: 'projs'}">Projets</RouterLink>
        <RouterLink :to="{name: 'skills'}">Compétences à l'IUT</RouterLink>
    </nav>
</template>