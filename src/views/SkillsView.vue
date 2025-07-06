<script setup>
    import { ref, onMounted } from "vue";
    import sa from '@/assets/dataSAE.json';
    import sk from '@/assets/dataSkills.json';

    import SkillCard from '@/components/SkillCard.vue';

    const skills = sk.skills;
    const saes = sa.sae;

    const show = ref(false)

    onMounted(() => {
        show.value = true;
    });
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <section class="big-section">
        <div id="titles">
            <transition name="slide-fade">
                <h1 v-if="show">Compétences à l'IUT</h1>
            </transition>
            <h2></h2>

            <transition name="slide-fade">
                <div v-if="show" class="delay-1">
                    <p>Le BUT Informatique est l'occasion de réaliser des projets notés, mais également de s'en inspirer pour trouver des idées et développer ses propres applications.</p>
                    <p>Il est composé de six compétences :</p>
                </div>
            </transition>
            
        </div>

        <section id="skill-section">
            <SkillCard v-for="(skill, index) in skills" :key="skill.id" :skill="skill" :index="index"/>
        </section>

        <section id="sae-vs-skills">
            <div id="titles">
                <h1>Lien compétences / projets</h1>
            </div>

            <section class="sae-table">
                <div>
                    <p id="empty"></p>
                    <div v-for="(s, index) in skills" :key="s.id" :class="`comp-header skill-div-${index+1}`">
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
                        <i class="fa-solid fa-circle" :style="`font-size: ${25 * parseInt(l)}px`" />
                    </p>
                </div>
            </section>
        </section>
    </section>
</template>

<style scoped>
    #skill-section {
        display: grid;
        grid-template : auto / 1fr 1fr;
        gap: 2em;
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
        background: rgba(255, 255, 255, 0.6);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        border-radius: 20px;
        padding-top: 1em;
        padding-bottom: 2em;
        width: 100%;
        position: relative;
        z-index: 1000;
        transition: all 0.3s ease;
    }

    .sae-tile:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-5px);
    }

    .sae-tile img {
        width: 80%;
        height: auto;
        border-radius: 16px;
        margin-top: 10px;
    }

    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
</style>