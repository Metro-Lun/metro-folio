<script setup>
    import ProjectCard from '@/components/ProjectCard.vue';
    import ProjectModal from '@/components/ProjectModal.vue';
    import { ref } from 'vue';
    import s from '@/assets/dataSAE.json';
    import { useThemeStore } from '@/stores/theme';

    const themeStore = useThemeStore();

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
    <section :class="`big-section ${themeStore.theme}`">
        <section :class="saeToDisplayIndex !== -1 ? 'overlay' : ''"></section>

        <section tabindex="0" @keyup.esc="handleClick(-1)">
            <div id="titles">
                <h1>Projets universitaires</h1>
                <h2>développés dans le cadre du BUT Informatique</h2>

                <div>
                    <p>Le BUT Informatique, orienté sur la pratique, propose de nombreux projets à réaliser au cours de la formation.</p>
                    <p>Voici les projets que j'ai réalisés et qui me tiennent le plus à coeur :</p>
                </div>
            </div>

            <section id="saes">
                <ProjectCard v-for="(sae, index) in saes" :key="sae.id" :sae="sae" :index="index" :clickHandler="handleClick" :hoverHandler="handleHover"/>
            </section>

            <section v-if="saeToDisplayIndex !== -1">
                <ProjectModal :saeToDisplay="saeToDisplay" :techToDisplay="techToDisplay" :clickHandler="handleClick" :hoverHandler="handleHover"/>
            </section>

        </section>
    </section>
</template>

<style scoped>
    #titles {
        color: white;
    }

    /* SAE GRID */

    #saes {
        margin: 5em 0;
        display: grid;
        grid-template: auto / 1fr 1fr 1fr;
        gap: 2em;
    }
</style>