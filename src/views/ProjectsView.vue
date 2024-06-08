<script setup>
    import { ref } from 'vue';
    import s from '@/assets/dataSAE.json';

    const saes = s.sae;

    const saeToDisplayIndex = ref(-1);
    const saeToDisplay = ref(null);

    function handleClick(i) {
        if(saeToDisplayIndex.value === i) {
            saeToDisplayIndex.value = -1;
            saeToDisplay.value = null;
        } else {
            saeToDisplayIndex.value = i;
            saeToDisplay.value = saes[i];
        }
    }




</script>

<template>
    <section :class="saeToDisplayIndex !== -1 ? 'overlay' : ''"></section>

    <div id="titles">
        <h1>Projets universitaires</h1>
        <h2>développés dans le cadre des SAÉ du BUT Informatique</h2>

        <p>Le BUT Informatique, orienté sur la pratique, propose de nombreux projets à réaliser au cours de la formation.</p>
        <p>Voici les projets que j'ai réalisés et qui me tiennent le plus à coeur :</p>
    </div>

    <section id="saes">
        <div v-for="(sae, index) in saes" :key="sae.id" @click="handleClick(index)">
            <h3>{{ sae.code }}</h3>
            <img :src="`/src/assets/images/sae/${sae.image}`" />
        </div>
    </section>

    <div v-if="saeToDisplayIndex !== -1" id="card">
            <p id="close-button" @click="handleClick(-1)">X</p>
            <p>{{ saeToDisplay.code }}</p>
    </div>
    
</template>

<style scoped>
    #titles {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5em auto;
    }

    #titles h1 {
        margin-bottom: 1px;
    }

    #titles h2 {
        margin-bottom: 3em;
    }

    #titles p {
        margin-bottom: 0;
    }

    #saes {
        margin-top: 10em;
        display: grid;
        grid-template: auto / 1fr 1fr;
        gap: 2em;
    }

    #saes div {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 20px;
        background: rgb(240, 180, 180);
        transition: all 0.5s ease;
    }

    #saes div:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transform: translateY(-5px);
    }

    #saes img {
        width: 80%;
        height: auto;
    }

    /* CARD */


    #card {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 20px;
        background: rgb(246, 246, 246);
        z-index: 5000;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 90%;
        width: 90%;
    }

    #close-button {
        cursor: pointer;
    }

    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(3px);
        z-index: 3000;
    }

    #card h3 {
        font-size: 25px;
    }



</style>