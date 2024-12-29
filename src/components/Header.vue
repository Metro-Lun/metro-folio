<script setup>
</script>

<template>
    <header>
        <img src="/assets/images/pfp.png" />

        <section>
            <RouterLink :to="{name: 'home'}">Accueil</RouterLink>
            <RouterLink :to="{name: 'projs'}">Projets</RouterLink>
            <RouterLink :to="{name: 'skills'}">Compétences à l'IUT</RouterLink>
        </section>
    </header>
</template>

<style scoped>

</style>