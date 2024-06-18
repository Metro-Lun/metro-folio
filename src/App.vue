<script setup>
    import { RouterView } from 'vue-router'
    import PortNav from '@/components/PortNav.vue'
</script>

<template>
    <header>
        <PortNav />
    </header>

    <main>
        <RouterView />
    </main>

    <footer>
        <nav>
            <p>© Mehdi BOURBON - juin 2024</p>
        </nav>

        <nav>
            <div>
                <a href="https://github.com/Metro-Lun"><img src="/assets/images/github-blanc.png" /></a>
                <a href="https://www.linkedin.com/in/mehdi-bourbon-7266a2224/"><img src="/assets/images/linkedin-blanc.png" /></a>
            </div>
        </nav>
    </footer>
</template>

<style>
    footer {
        display: grid;
        grid-template: auto / 1fr 1fr;
    }

    footer nav {
        display: flex;
        margin-top: 5em;
        margin-bottom: 0;
    }

    footer div {
        justify-content: flex-end;
    }

    footer img {
        width: 70px;
    }

</style>