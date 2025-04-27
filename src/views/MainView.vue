<script setup>
    import { ref } from 'vue';
    import TechComponent from '@/components/TechComponent.vue';
    import JourneyComponent from '@/components/JourneyComponent.vue';
    import HobbiesComponent from '@/components/HobbiesComponent.vue';

    const tab = ref(0);

    function handleClick(tabNum) {
        tab.value = tabNum;
    }

</script>

<template>
    <section id="main-home">
        <section id="main-front-presentation">
            <div>
                <h1>Mehdi BOURBON</h1>
                <h2>Texte pour me présenter</h2>
            </div>

            <div>
                <p>Image de moi</p>
            </div>
        </section>

        <section id="main-small-talk">
            <p>blabla</p>
            <p>blabla2</p>
        </section>

        <section id="choose">
            <h2 @click="handleClick(0)" :class="tab == 0 ? 'selected' : ''">Technologies</h2>
            <h2 @click="handleClick(1)" :class="tab == 1 ? 'selected' : ''">Parcours professionnel</h2>
            <h2 @click="handleClick(2)" :class="tab == 2 ? 'selected' : ''">Passe-temps</h2>
        </section>

        <section id="choice-container">
            <TechComponent v-if="tab == 0"/>
            <JourneyComponent v-if="tab == 1" />
            <HobbiesComponent v-if="tab == 2" />
        </section>
    </section>
</template>

<style scoped>
    #main-front-presentation {
        display: flex;
        background-color: #8E1616;
    }

    /* CHOOSE */

    #choose {
        margin: 4em auto 0 auto;
        display: grid;
        grid-template: auto / 1fr 1fr 1fr;
        text-align: center;
        justify-content: center;
        gap: 3em;
    }

    #choose h2 {
        font-size: 40px;
        position: relative;
        cursor: pointer;
    }

    #choose h2::after, #choose h2.selected::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 1.5px;
        background: red;
        transition: transform 0.2s ease-in-out;
        transform: scale(0);
        margin-top:0.5em;
    }

    #choose h2:hover::after, #choose h2.selected::after {
        transform: scale(1);
    }
</style>