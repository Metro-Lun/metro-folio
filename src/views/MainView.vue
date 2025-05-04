<script setup>
    import { ref } from 'vue';
    import TechComponent from '@/components/TechComponent.vue';
    import JourneyComponent from '@/components/JourneyComponent.vue';
    import HobbiesComponent from '@/components/HobbiesComponent.vue';
    import { useThemeStore } from '@/stores/theme';

    const tab = ref(0);
    const themeStore = useThemeStore();

    function handleClick(tabNum) {
        tab.value = tabNum;
    }

</script>

<template>
    <section id="main-home" :class="themeStore.theme">
        <section id="main-front-presentation">
            <section id="inner-presentation">
                <div>
                    <h1>Mehdi BOURBON</h1>

                    <h2>Texte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaa</h2>
                </div>

                <img src="/assets/images/testphoto.png" />
            </section>
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
        background-color: #8E1616;
    }

    #inner-presentation {
        display: flex;
        justify-content: space-around;
        padding: 5em 0;
        max-width: 200em;
        margin: auto;
    }

    #main-front-presentation h1 {
        font-family: 'Cascadia', 'Proxima Nova', Arial, Helvetica, sans-serif;
        font-weight: normal;
        justify-content: start;
    }

    #main-front-presentation h2 {
        max-width: 40em;
    }

    #main-front-presentation img {
        max-height: 30em;
        border-radius: 20%;
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
        transition: transform 0.2s ease-in-out;
        transform: scale(0);
        margin-top:0.5em;
    }

    #main-home.dark #choose h2::after, #choose h2.selected::after {
        background: white;
    }

    #main-home.light #choose h2::after, #choose h2.selected::after {
        background: black;
    }

    #choose h2:hover::after, #choose h2.selected::after {
        transform: scale(1);
    }
</style>