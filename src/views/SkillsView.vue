<script setup>
    import { ref } from 'vue';
    import sa from '@/assets/dataSAE.json';
    import sk from '@/assets/dataSkills.json';

    const skills = sk.skills;
    const saes = sa.sae;

    const skill = ref(null);
    const skillIndex = ref(-1);

    function handleClick(i) {
        if(skillIndex.value === i) {
            skill.value = null;
            skillIndex.value = null;
        } else {
            skill.value = skills[i];
            skillIndex.value = i;
        }
    }



</script>

<template>
    <h1>Compétences à l'IUT</h1>
    <p>Le BUT Informatique est l'occasion de réaliser des projets notés, mais également de s'en inspirer pour trouver des idées et développer ses propres applications.</p>

    <p>Il est composé de six compétences :</p>

    <section>
        <section id="tabs">
            <div v-for="(s, index) in skills" :key="s.id" :class="skillIndex === index ? 'tab selected' : 'tab'" @click="handleClick(index)">
                <p>img</p>
                <p>C{{index + 1}} - {{ s.title }}</p>
            </div>
        </section>

        <Transition>
            <section class="skill-desc" v-if="skill !== null">
                <h2>Compétence {{ skill.title }}</h2>

                <p v-for="p in skill.description" :key="p.id">{{ p }}</p>

                <h3>Niveaux</h3>
                <ul>
                    <li v-for="l in skill.levels" :key="l.id">
                        <h4>{{l.name}}</h4>
                        <p>{{l.info}}</p>
                    </li>
                </ul>

                <h3>Situations professionnelles</h3>
                <ul>
                    <li v-for="ps in skill.professional_situations" :key="ps.id">
                        <p>{{ ps }}</p>
                    </li>
                </ul>
            </section>
        </Transition>
    </section>



    <section id="sae-vs-skills">
        <p>Voici une liste des projets que j'ai réalisés, selon leur lien avec les compétences.</p>
        <p>N'hésitez pas à cliquer sur les images pour en savoir plus !</p>

        <section class="sae-table">
            <div>
                <p id="empty"></p>
                <p v-for="(s, index) in skills" :key="s.id">C{{index + 1}}</p>
            </div>

            <div v-for="sae in saes" :key="sae.id" id="not-top-line">
                <div class="sae-tile">
                    <p>title</p>
                </div>
                
                <p v-for="l in sae.links" :key="l.id" class="sae-link vertical-line">
                    <span >{{l}}</span>
                </p>
            </div>
        </section>
    </section>

    
</template>

<style scoped>
    /* TABS */

    #tabs {
        display: flex;
    }

    .tab {
        border-radius: 16px 40px 0 0;
        user-select: none;
        display: flex;
        gap: 10px;
        padding: 0px 15px;
        transition: all 0.6s ease;
    }

    .tab.selected {
        transform: translateY(20px);
    }

    .tab:nth-child(1) {
        border: 2px solid rgb(230, 71, 71);
        background-color: rgb(252, 125, 125);
    }
    .tab:nth-child(2) {
        border: 2px solid orange;
        background-color: rgb(252, 176, 125);
    }
    .tab:nth-child(3) {
        border: 2px solid yellow;
        background-color: rgb(255, 248, 155);
    }
    .tab:nth-child(4) {
        border: 2px solid rgb(92, 238, 92);
        background-color: rgb(171, 255, 163);
    }
    .tab:nth-child(5) {
        border: 2px solid rgb(120, 120, 253);
        background-color: rgb(125, 191, 252);
    }
    .tab:nth-child(6) {
        border: 2px solid #999999;
        background-color: #cccccc;
    }

    #tabs:hover > .tab {
        opacity: 0.45;
    }

    #tabs:hover > .tab:hover {
        opacity: 1;
    }

    /* SKILL DESCRIPTION */

    .skill-desc {
        background-color: rgb(231, 231, 231);
        border-radius: 0px 50px 50px 50px;
        flex-direction: column;
        padding: 2em 10em 2em 2em;
        z-index: 1000;
        position: relative;
    }

    .skill-desc h2 {
        font-size: 30px;
        margin: 0px 0px 1em 0px;
    }

    .skill-desc h3 {
        margin-top: 2em;
        font-size: 25px;
    }

    .skill-desc h4 {
        font-size: 22px;
        margin-bottom: 0;
    }

    .skill-desc h4 ~ p {
        font-size: 17px;
        margin: 0;
    }

    /* SAE TABLE */

    #sae-vs-skills {
        margin-top: 5em;
    }

    .sae-table {
        display: grid;
        grid-template: 1fr / 1fr;
        background-color: rgb(231, 231, 231);
        border-radius: 0px 50px 50px 50px;
    }

    .sae-table > div {
        display: grid;
        grid-template: 1fr / 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
        text-align: center;
    }

    .sae-table > div:first-child p {
        font-weight: bolder;
        font-size: 40px;
        padding: 0.5em;
        margin: 0;
    }

    .vertical-line {
        position: relative;
    }

    .vertical-line::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 3px;
        height: 105%;
        background-color: black;
        transform: translateX(-50%);
    }


    .vertical-line::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: black;
        transform: translateY(-50%);
    }

    #not-top-line p:first-child, .sae-table p:first-child {
        border-right: 1px solid black;
    }

    .sae-table p {
        margin: 0;
        font-size: 50px;
    }

    .sae-table > div:first-child p:not(#empty) {
        border-bottom: 1px solid black;
    }

    /* MINI DIVS SAE */

    .sae-tile {
        padding: 1em 0;
    }




</style>