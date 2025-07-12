<script setup>
    defineProps(["saeToDisplay", "techToDisplay", "clickHandler", "hoverHandler"])
</script>

<template>
    <section id="card">
        <div id="close-button"><button @click="clickHandler(-1)">X</button></div>
        
        <div id="card-titles">
            <h2>{{saeToDisplay.code}}</h2>
            <h3>{{saeToDisplay.title}}</h3>
            <div>
                <img v-for="t in saeToDisplay.technos" :key="t.id" :src="`/assets/images/tech/${t}.png`" class="project-techno" @mouseover="evt => hoverHandler(evt, t)" @mouseout="hoverHandler(evt, null)"/> 
            </div>

            <p v-if='techToDisplay !== null' id="tech-name" :style="{ top: techToDisplay.top, left: techToDisplay.left }">
                {{techToDisplay.name}}
            </p>
        </div>

        <div id="card-desc">
            <img :src="`/assets/images/projects/${saeToDisplay.image}`" />

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

        <div id="ok-button"><button @click="clickHandler(-1)">OK</button></div>
    </section>
</template>

<style scoped>
    .project-techno {
        height: 30px;
        margin: auto 0.5em;
    }

    #card {
        box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
        border-radius: 20px;
        z-index: 5000;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 85%;
        width: 90%;
        overflow: hidden;
        background: rgb(255, 232, 245);
    }

    #card p {
        font-size: 17px;
    }

    #close-button {
        display: flex;
        justify-content: right;
    }

    #ok-button {
        display: flex;
        justify-content: center;
    }
    
    #close-button button {
        font-weight: bold;
        margin-top: 1em;
        margin-right: 2em;
        padding: 0.2em 0.5em;
        border: 2px solid black;
        background-color: transparent;
        border-radius: 50%;
        font-size: 25px;
    }

    #ok-button button {
        color: rgb(255, 255, 255);
        box-shadow: 10px 5px 5px rgb(118, 7, 155);
        font-size: 25px;
        background-image: linear-gradient(-20deg, #cb54ec 0%, #840c96 100%);
        border: none;
        padding: 2px 1em;
        border-radius: 16px;
        box-shadow: rgba(118, 0, 186, 0.6) 0px 7px 29px 0px;
    }

    button:hover {
        scale: 0.8;
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
        border-radius: 24px;
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
        margin-top: 1em;
    }

    /* TECH-NAME */

    #tech-name {
        position: absolute;
        z-index: 2012;
        margin-top: 1em;

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