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
        background-color: rgba(255,255,255,0.2);
    }

    footer div {
        justify-content: flex-end;
    }

    @media (max-width: 900px) {
        footer {
            gap: 1em;
        }

        p {
            font-size: 10px;
        }
    }
</style>