<script setup>
    import { ref } from 'vue';
    import sa from '@/assets/dataSAE.json';
    import sk from '@/assets/dataSkills.json';

    const skills = sk.skills;
    const saes = sa.sae;

    const skill = ref(skills[0]);
    const skillIndex = ref(0);

    function handleClick(i) {
        if(skillIndex.value !== i) {
            skill.value = skills[i];
            skillIndex.value = i;
        }
    }
</script>

<template>
    <section class="big-section">
        <div id="titles">
            <h1>Compétences à l'IUT</h1>
            <h2></h2>

            <div>
                <p>Le BUT Informatique est l'occasion de réaliser des projets notés, mais également de s'en inspirer pour trouver des idées et développer ses propres applications.</p>
                <p>Il est composé de six compétences :</p>
            </div>
        </div>

        <section>
            <section id="tabs">
                <div v-for="(s, index) in skills" :key="s.id" :class="skillIndex === index ? 'tab selected' : 'tab'" @click="handleClick(index)">
                    <p>C{{index + 1}} - {{ s.title }}</p>
                </div>
            </section>

            <Transition>
                <section :class="`skill-desc-${skillIndex}`" v-if="skill !== null">
                    <h2>Compétence {{ skill.title }}</h2>

                    <p v-for="p in skill.description" :key="p.id">{{ p }}</p>

                    <h3>Niveaux</h3>
                    <ul>
                        <li v-for="(l, indexL) in skill.levels" :key="l.id">
                            <h4>{{indexL + 1}} - {{l.name}}</h4>
                            <p>{{l.info}}</p>
                        </li>
                    </ul>

                    <h3>Situations professionnelles</h3>
                    <ul>
                        <li v-for="ps in skill.professional_situations" :key="ps.id">
                            <p>{{ ps }}</p>
                        </li>
                    </ul>

                    <h3>Niveau personnel : <strong>{{ skill.personal_review.level }}</strong></h3>
                    <p>{{skill.personal_review.explanation}}</p>
                </section>
            </Transition>
        </section>

        <section id="sae-vs-skills">
            <div id="titles">
                <h1>Lien compétences / projets</h1>
            </div>

            <section class="sae-table">
                <div>
                    <p id="empty"></p>
                    <div v-for="(s, index) in skills" :key="s.id" class="comp-header">
                        <p>C{{ index + 1 }}</p>
                        <p>{{ s.title }}</p>
                    </div>
                </div>

                <div v-for="sae in saes" :key="sae.id">
                    <RouterLink :to="{name: 'projs'}">
                        <div class="sae-tile">
                            <p>{{sae.code}}</p>
                            <img :src="`/assets/images/${sae.image}`" />
                        </div>
                    </RouterLink>
                    
                    <p v-for="l in sae.links" :key="l.id" class="sae-link vertical-line">
                        <span class="link-span" :style="`font-size: ${60 * parseInt(l)}px`">o</span>
                    </p>
                </div>
            </section>
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
        width: 12%; 
        height: 3em;
        padding: 0px 15px;
        transition: all 0.6s ease;
    }

    .tab.selected {
        transform: translateY(20px);
    }

    .tab:nth-child(1) {
        background-color: rgb(252, 125, 125);
    }
    .tab:nth-child(2) {
        background-color: rgb(252, 176, 125);
    }
    .tab:nth-child(3) {
        background-color: rgb(255, 248, 155);
    }
    .tab:nth-child(4) {
        background-color: rgb(171, 255, 163);
    }
    .tab:nth-child(5) {
        background-color: rgb(125, 191, 252);
    }
    .tab:nth-child(6) {
        background-color: #cccccc;
    }

    #tabs:hover > .tab {
        opacity: 0.45;
    }

    #tabs:hover > .tab:hover {
        opacity: 1;
    }

    /* SKILL DESCRIPTION */

    [class^="skill-desc-"] {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        border-radius: 0px 50px 50px 50px;
        flex-direction: column;
        padding: 2em 10em 2em 2em;
        z-index: 1000;
        position: relative;
    }

    [class^="skill-desc-"] h2 {
        font-size: 30px;
        margin: 0px 0px 1em 0px;
    }

    [class^="skill-desc-"] h3 {
        margin-top: 2em;
        font-size: 25px;
    }

    [class^="skill-desc-"] h4 {
        font-size: 22px;
        margin-bottom: 0;
    }

    [class^="skill-desc-"] h4 ~ p {
        font-size: 17px;
        margin: 0;
    }

    .skill-desc-0 {
        background-color: rgb(240, 180, 180);
    }
    .skill-desc-1 {
        background-color: rgb(255, 210, 179);
    }
    .skill-desc-2 {
        background-color: rgb(255, 252, 216);
    }
    .skill-desc-3 {
        background-color: rgb(223, 255, 220);
    }
    .skill-desc-4 {
        background-color: rgb(201, 229, 255);
    }
    .skill-desc-5 {
        background-color: #e7e5e5;
    }

    /* SAE TABLE */

    #sae-vs-skills {
        margin-top: 5em;
    }

    .sae-table {
        display: grid;
        grid-template: 1fr / 1fr;
        border-radius: 0px 50px 50px 50px;
    }

    .sae-table > div {
        display: grid;
        grid-template: 1fr / 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
        text-align: center;
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

    .sae-table p:not(.sae-tile p, .comp-header) {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .comp-header {
        font-weight: bolder;
        align-self: center;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        border-radius: 20px;
        padding: 0.2em 0;
        margin: 0 auto;
        width: 80%;
    }

    .comp-header:nth-child(2) {
        background-color: rgb(252, 125, 125);
    }
    .comp-header:nth-child(3) {
        background-color: rgb(252, 176, 125);
    }
    .comp-header:nth-child(4) {
        background-color: rgb(255, 248, 155);
    }
    .comp-header:nth-child(5) {
        background-color: rgb(171, 255, 163);
    }
    .comp-header:nth-child(6) {
        background-color: rgb(125, 191, 252);
    }
    .comp-header:nth-child(7) {
        background-color: #cccccc;
    }

    .comp-header p:first-child {
        font-size: 40px;
    }

    .comp-header p:nth-child(2) {
        font-size: 20px;
    }

    /* MINI DIVS SAE */

    .sae-tile {
        font-size: 10px;
        margin: 3em 0;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        border-radius: 20px;
        background: rgb(240, 180, 180);
        padding-top: 1em;
        padding-bottom: 2em;
        width: 100%;
        position: relative;
        z-index: 1000;

        transition: all 0.5s ease;
    }

    .sae-tile:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transform: translateY(-5px);
    }

    .sae-tile img {
        width: 80%;
        height: auto;
    }

    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }




</style>