<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <section id="not-found">
        <section>
            <h1>404</h1>
            <h2>Oups... c'est pas par là.</h2>

            <div id="404-button">
                <RouterLink :to="{name: 'home'}">Retourner au portfolio</RouterLink>
            </div>
        </section>
    </section>
</template>

<style scoped>
    footer {
        bottom: 0;
        position: fixed;
    }

    #not-found {
        width: 100vw;
        height: calc(100vh - 10em);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #not-found section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80%;
        margin: auto;
        color: white;
    }

    h1 {
        font-size: 300px;
        font-family: 'Quicksand', Arial, Helvetica, sans-serif;
        margin: 0;
    }

    h2 {
        font-size: 50px;
    }

    a {
        margin-top: 0.8em;
        background-image: linear-gradient(-20deg, #e8a7fa 0%, #ffffff 100%);
        border: none;
        padding: 0.5em 1em;
        border-radius: 60px;
        box-shadow: rgba(188, 72, 255, 0.8) 0px 7px 29px 0px;
        transition: all 0.2s ease;
        text-decoration: none;
        font-family: "Quicksand", "Proxima Nova", Arial, Helvetica, sans-serif;
        font-size: 30px;
        font-weight: bold;
        color: rgb(188, 72, 255);
        display: flex;
        align-items: center;
        gap: 10px;
    }

    a:hover {
        transform: translateY(-5px);
    }

    @media (max-height: 900px) {
        #not-found {
            height: 100%;
        }

        a {
            font-size: 16px;
        }

        h1 {
            font-size: 150px;
        }

        h2 {
            font-size: 30px;
        }
    }


</style>