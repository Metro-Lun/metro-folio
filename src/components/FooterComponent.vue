<script setup>
    function getMonthAndYear() {
        let options = {year: 'numeric', month: 'long'};
        return new Date().toLocaleDateString("fr-FR", options);
    }

</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <footer id="footer">
        <p>
            © Mehdi BOURBON - {{ getMonthAndYear() }}
        </p>

        <nav>
            <div>
                <a href="https://github.com/Metro-Lun"><img src="/assets/images/logos/github-blanc.png" /></a>
                <a href="https://www.linkedin.com/in/mehdi-bourbon-7266a2224/"><img src="/assets/images/logos/linkedin-blanc.png" /></a>
                <a href="mailto:mehdi.bourbon@outlook.fr"><i class="fas fa-envelope"></i></a>
            </div>
        </nav>
    </footer>
</template>

<style scoped>
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4em;
        height: 6em;
        backdrop-filter: blur(10px);
        color: white;
    }

    footer nav {
        display: flex;
        margin: auto 0;
    }

    footer div {
        justify-content: flex-end;
    }

    footer img, i {
        width: 46px;
    }

    i {
        color: white;
        font-size: 46px;
    }
</style>