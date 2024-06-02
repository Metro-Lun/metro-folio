<script setup>
    import { ref } from 'vue';
    import sa from '@/assets/dataSAE.json';
    import sk from '@/assets/dataSkills.json';

    const skills = sk.skills;
    const saes = sa.sae;

    const skillIndex = ref(-1);

    function handleClick(i) {
        skillIndex.value = skillIndex.value ? i : -1 ;
    }



</script>

<template>
    <h1>Parcours professionnel</h1>
    <p>traitera de tutorat, stage</p>

    <p>composé de 6 compétences</p>

    <section>
        <section class="skill-explain">
            <div>
                <div v-for="(s, index) in skills" :key="s.id" @click="(evt) => handleClick(index)">
                    <p>img</p>
                    <p>C{{index + 1}} - {{ s.title }}</p>
                </div>
            </div>

            <div>
                <Transition>
                    <p v-if="skillIndex !== -1">{{ skillIndex }}</p>
                </Transition>
            </div>
        </section>
    </section>

    <section>
        <p>lien avec compétences</p>

        <section class="sae-table">
            <div>
                <p>x</p>
                <p v-for="(s, index) in skills" :key="s.id">C{{index + 1}}</p>
            </div>

            <div v-for="sae in saes" :key="sae.id">
                <p>title</p>

                <p v-for="l in sae.links" :key="l.id">
                    {{l}}
                </p>
            </div>
        </section>
    </section>

    
</template>

<style scoped>
    .skill-explain {
        display: grid;
        grid-template: 1fr 1fr / 1fr;
        width: 80vw;
    }
    .skill-explain div {
        display: flex;
        border: 1px solid red;
    }

    .skill-explain div > p:first-child {
        margin-right: 1em;
    }

    .skill-explain p {
        margin: 20px;
    }

    /* SAE TABLE */

    .sae-table {
        display: grid;
        grid-template: 1fr / 1fr;
    }

    .sae-table > div {
        display: grid;
        grid-template: 1fr / 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
        border: 1px solid blue;
    }


</style>