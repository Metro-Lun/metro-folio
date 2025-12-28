<script setup>

</script>

<template>
    <section class="big-section">
        <h1>Contact</h1>

        <section id="main-contact">
            <h2>Si vous souhaitez me contacter (je suis super sympa) :</h2>
            <nav>
                <a href="https://github.com/Metro-Lun">
                    <i class="fa-brands fa-github" />
                    <p>Metro-Lun</p>
                </a>

                <a href="https://www.linkedin.com/in/mehdi-bourbon-7266a2224/">
                    <i class="fa-brands fa-linkedin-in" />
                    <p>Mehdi Bourbon</p>
                </a>

                <a href="mailto:mehdi.bourbon@outlook.fr">
                    <i class="fa-solid fa-envelope" />
                    <p>mehdi.bourbon@outlook.fr</p>
                </a>
            </nav>
        </section>
    </section>
</template>

<style scoped>
    h2 {
        padding-bottom: 0.4em;
        margin-bottom: 1em;
    }

    #main-contact {
        margin-top: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 4em;
    }

    #main-contact nav {
        display: flex;
        gap: 5em;
    }

    #main-contact a {
        color: white;
        opacity: 1;
    }

    #main-contact i {
        font-size: 28px;
    }

    #main-contact p {
        font-size: 24px;
        opacity: 1;
        margin-left: 12px;
        font-weight: normal !important;
    }

    @media (max-width: 700px) {
        h2 {
            padding-bottom: 0.4em;
            margin-bottom: 1em;
            font-size: 12px;
        }

        #main-contact nav {
            display: flex;
            gap: 0.2em;
        }

        #main-contact nav a:last-child {
            margin-right: 0;
        }

        #main-contact i {
            font-size: 10px;
        }

        #main-contact p {
            font-size: 10px;
            opacity: 1;
            margin-left: 8px;
        }

        #main-contact {
            margin-top: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-bottom: 4em;
        }


    }
</style>