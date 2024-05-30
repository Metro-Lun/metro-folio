<script setup>
    import { ref } from 'vue';
    import data from '@/assets/data.json';
    const skills = data.skills;

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

    
</template>

<style scoped>
    .skill-explain {
        display: grid;
        grid-template: 1fr 1fr / 1fr;
        width: 90vw;
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



</style>