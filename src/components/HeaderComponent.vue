<script setup>
    import { RouterLink } from 'vue-router';
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps([theme]);
    const emits = defineEmits([newTheme]);

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
                <p>X</p>
                <div></div>
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
</style>