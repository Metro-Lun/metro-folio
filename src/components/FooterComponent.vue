<script setup>

    function getMonthAndYear() {
        let options = {year: 'numeric', month: 'long'};
        return new Date().toLocaleDateString("fr-FR", options);
    }

</script>

<template>
    <footer>
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
    }
</style>