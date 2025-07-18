<script setup>
    import ProjectCard from '@/components/ProjectCard.vue';
    import ProjectModal from '@/components/ProjectModal.vue';
    import { ref, onMounted } from 'vue';
    import s from '@/assets/dataSAE.json';

    const saes = s.sae;

    const show = ref(false);
    onMounted(() => {
        show.value = true
    });

    const saeToDisplayIndex = ref(-1);
    const display = ref(false);

    function handleClick(i) {
        saeToDisplayIndex.value = i;
        handleOpen();
    }

    function handleOpen() {
        console.log(display.value)
        display.value = !display.value;
        console.log(display.value)
    }


</script>

<template>
    <section class="big-section">
        <section :class="saeToDisplayIndex !== -1 ? 'overlay' : ''"></section>

        <section tabindex="0" @keyup.esc="handleClick(-1)">
            <div id="titles">
                <transition name="slide-fade">
                    <h1 v-if="show">Projets</h1>
                </transition>
            </div>

            <section id="saes">
                <ProjectCard v-for="(sae, index) in saes" :key="sae.id" :sae="sae" :index="index" :clickHandler="handleClick" :hoverHandler="handleHover"/>
            </section>

            <section v-if="saeToDisplayIndex !== -1">
                <div id="black-filter" :class="`${display ? 'active' : ''}`"></div>
                <div :class="`wrapper ${display ? 'active' : ''}`">
                    <ProjectModal :saeToDisplay="saes[saeToDisplayIndex]" :clickHandler="handleOpen" />
                </div>
            </section>

        </section>
    </section>
</template>

<style scoped>
    #saes {
        margin: 5em 0;
        display: grid;
        grid-template: auto / 1fr 1fr 1fr;
        gap: 2em;
    }

    .wrapper {
        box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
        border-radius: 20px;
        z-index: -12;
        position: fixed;
        top: 50%;
        left: 50%;
        height: 85%;
        width: 90%;
        overflow: auto;
        background: rgb(255, 232, 245);
        transform: translateX(-50%) translateY(-30%);
        opacity: 0;
    }

    .wrapper.active {
        transform: translateX(-50%) translateY(-50%);
        opacity: 1;
        z-index: 5000;
    }

    #black-filter {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0);
        z-index: -13;
        opacity: 0;
    }

    #black-filter.active {
        z-index: 4999;
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(3px);
    }

    @media (max-height: 800px) {
        #saes {
            display: grid;
            grid-template : auto / 1fr;
        }
    }
</style>