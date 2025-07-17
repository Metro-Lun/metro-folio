<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <section id="not-found">
        <section>
            <h1>404</h1>
            <h2>Oups... vous êtes perdu, non ?</h2>

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
        background-color: blue;
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
        font-size: 100px;
    }

    h2 {
        font-size: 50px;
    }

    button {
        margin-top: 0.8em;
        box-shadow: 10px 5px 5px rgb(118, 7, 155);
        font-size: 30px;
        background-image: linear-gradient(-20deg, #e8a7fa 0%, #ffffff 100%);
        border: none;
        padding: 0.5em 1em;
        border-radius: 60px;
        box-shadow: rgba(188, 72, 255, 0.8) 0px 7px 29px 0px;
        transition: all 0.2s ease;
    }

    button:hover {
        transform: translateY(-5px);
    }

    button a {
        text-decoration: none;
        font-family: "Quicksand", "Proxima Nova", Arial, Helvetica, sans-serif;
        font-size: 30px;
        font-weight: bold;
        color: rgb(188, 72, 255);
        display: flex;
        align-items: center;
        gap: 10px;
    }


</style>