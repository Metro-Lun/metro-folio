<script setup>
    import { ref } from 'vue';
    import s from '@/assets/dataSAE.json';

    const saes = s.sae;

    const saeToDisplayIndex = ref(-1);
    const saeToDisplay = ref(null);

    const techToDisplay = ref(null);

    function handleClick(i) {
        if(saeToDisplayIndex.value === i) {
            saeToDisplayIndex.value = -1;
            saeToDisplay.value = null;
        } else {
            saeToDisplayIndex.value = i;
            saeToDisplay.value = saes[i];
        }
    }

    function handleHover(evt, t) {
       if(t === null) {
            techToDisplay.value = null;
       } else {
            const rect = evt.target.getBoundingClientRect();
            techToDisplay.value = {
                name: t,
                left: `${evt.target.offsetLeft - (rect.width / 4)}px`,
                top: `${evt.target.offsetTop + 16}px`
            };
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

    <section v-if="saeToDisplayIndex !== -1" id="card">
        <p id="close-button" @click="handleClick(-1)">X</p>

        <div id="card-titles">
            <h2>{{saeToDisplay.code}}</h2>
            <h3>{{saeToDisplay.title}}</h3>
            <div>
                <img v-for="t in saeToDisplay.technos" :key="t.id":src="`/src/assets/images/technos/${t}.png`" class="project-techno" @mouseover="evt => handleHover(evt, t)" @mouseout="handleHover(evt, null)"/> 
            </div>

            <p v-if='techToDisplay !== null' id="tech-name" :style="{ top: techToDisplay.top, left: techToDisplay.left }">
                {{techToDisplay.name}}
            </p>
        </div>

        <div id="card-desc">
            <img :src="`/src/assets/images/sae/${saeToDisplay.image}`" />

            <div>
                <p v-for="d in saeToDisplay.description" :key="d.id">{{d}}</p>
                
                <h3>Situations professionnelles</h3>
                <ul>
                    <li v-for="s in saeToDisplay.skills" :key="s.id">
                        <p>{{ s }}</p>
                    </li>
                </ul>
            </div>
        </div>

        
    </section>
    
</template>

<style scoped>
    #titles {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5em auto;
    }

    #titles h1 { margin-bottom: 1px; }
    #titles h2 { margin-bottom: 3em; }
    #titles p { margin-bottom: 0; }

    #saes {
        margin-top: 7em;
        display: grid;
        grid-template: auto / 1fr 1fr;
        gap: 2em;
    }

    #saes div {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        border-radius: 20px;
        background: rgb(240, 180, 180);
        transition: all 0.5s ease;
    }

    #saes div:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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

    #card p {
        font-size: 17px;
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
        z-index: 3000;
    }

    #card h3 { font-size: 25px; }

    .project-techno {
        height: 30px;
        margin: auto 0.5em;
    }

    #card-titles {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #card-titles h2 {
        font-size: 50px;
        margin: 0;
    }

    #card-titles h3 {
        margin: 0;
        font-weight: normal;
    }

    #card-titles > div {
        margin-top: 0.5em;
    }

    #card-titles > div > div {
        margin: 5px 0 0 0;
        gap: 20px;
    }

    #card-desc {
        margin: auto 2em;
        display: grid;
        grid-template: auto / 4fr 5fr;
    }

    #card-desc img {
        width: 90%;
    }

    li p {
        margin: 10px auto;
    }

    #card-desc > * {
        margin-top: 2em;
    }

    #card-desc div > p:first-child {
        margin-top: 0;
    }

    #card-desc h3 {
        margin-top: 1.5em;
    }

    /* TECH-NAME */

    #tech-name {
        position: absolute;
        z-index: 2012;

        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.51);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(1.8px);
        -webkit-backdrop-filter: blur(1.8px);
        border: 1px solid rgba(55, 55, 55, 0.99);
        padding: 1px 5px;
    }



</style>