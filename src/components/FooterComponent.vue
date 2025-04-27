<script setup>
    import { useThemeStore } from '@/stores/theme';

    const themeStore = useThemeStore();

    function getMonthAndYear() {
        let options = {year: 'numeric', month: 'long'};
        return new Date().toLocaleDateString("fr-FR", options);
    }

</script>

<template>
    <footer :class="themeStore.theme">
        <section>
            <p>© Mehdi BOURBON - {{ getMonthAndYear() }}</p>
        </section>

        <nav>
            <div>
                <a href="https://github.com/Metro-Lun"><img src="/assets/images/github-blanc.png" /></a>
                <a href="https://www.linkedin.com/in/mehdi-bourbon-7266a2224/"><img src="/assets/images/linkedin-blanc.png" /></a>
            </div>
        </nav>
    </footer>
</template>

<style scoped>
    footer {
        background-color: rgb(255, 227, 227);
        display: grid;
        grid-template: auto / 1fr 1fr;
        height: 6em;
    }

    footer nav {
        display: flex;
        margin: auto 0;
    }

    footer div {
        justify-content: flex-end;
    }

    footer img {
        width: 64px;
    }

    footer.dark {
        background-color: #1D1616;
    }

    footer.light {
        background-color: rgb(255, 79, 79);
    }
</style>