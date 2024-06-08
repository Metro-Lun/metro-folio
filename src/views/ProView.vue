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

    // <section class="explain-section">
    //     <div v-for="(i, index) in interests" :key="i.id" class="explain-div">
    //         <h2 :class="index % 2 == 0 ? '' : 'explain-title-right'" @click="(evt) => updateClickTabOnId(index)">{{i.interestName}}</h2>
    //         <p>{{i.interestExplanation}}</p>
    //     </div>
    // </section>



</script>

<template>
    <div id="titles"><h1>Parcours professionnel</h1></div>

    <p>traitera de tutorat, stage</p>

    <p>Voici une liste de mes expériences m'ayant apporté de nombreuses compétences, à la fois utiles personnellement mais également indispensables dans le monde du travail.</p>
    

    
</template>

<style scoped>

</style>