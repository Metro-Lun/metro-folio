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
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <section id="main-home" :class="themeStore.theme">
        <section id="main-front-presentation" :class="themeStore.theme">
            <section id="inner-presentation">
                <div>
                    <h1>Mehdi BOURBON</h1>

                    <h2>Texte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaaTexte pour me présenter oueeeeeeee jsuis trop sympaaaaa</h2>
                
                    <button id="cv-link" :class="themeStore.theme">
                        <a href="/assets/files/CV_Mehdi_Bourbon.pdf" download>
                            <i class="fas fa-download"></i>
                            Mon super CV
                        </a>
                    </button>
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
        height: calc(100vh - 4em);
    }

    #main-front-presentation.dark {
        color: white;
        background-color: #8E1616;
    }

    #main-front-presentation.light {
        color: black;
        background-color: #ffaeae;
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
        max-height: 35em;
        border-radius: 20%;
    }

    /* CHOOSE */

    #choose {
        margin: 1.8em 2em 0 2em;
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

    #choice-container {
        margin-top: 4em;
    }

    /* CV LINK */
    #cv-link {
        padding: 1em;
        background: none;
        border-radius: 8px;
        margin-top: 2em;
        transition: all 0.5s ease;
    }

    #cv-link.dark {
        border: 2px solid white;
    }

    #cv-link.light {
        border: 2px solid black;
    }

    #cv-link a {
        text-decoration: none;
        font-family: "Consolas", "Proxima Nova", Arial, Helvetica, sans-serif;
        font-size: 24px;
    }

    #cv-link.dark a {
        color: white;
    }

    #cv-link.light a {
        color: black;
    }

    #cv-link:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transform: translateY(-5px);
    }
</style>