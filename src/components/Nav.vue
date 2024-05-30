<script setup>


</script>

<template>
    <nav>
        <RouterLink :to="{name: 'pro'}">PRO</RouterLink>
        <RouterLink :to="{name: 'perso'}">PERSO</RouterLink>
    </nav>
</template>

<style scoped>
    nav {
        top: 0;
        left: 0;
        right: 0;
        margin-top: 0;
        margin-bottom: 5em;
        padding: 30px;
        background: #4b019a;
        color: white;
        display: flex;
        align-items: center;
        border-bottom: 5px solid #400070;
        z-index: 2;
    }

    nav a {
        display: inline-block;
        margin-right: 20px;
        color: white;
        opacity: 0.7;
        text-decoration: none;
        font-weight: bold;
    }

    nav a.active,
    nav a:hover {
        opacity: 1;
    }

    .router-link-active, .router-link-exact-active, .active {
        color: #49BAAD
    }
</style>