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

                    <h2>Développeur web</h2>
                    <h2>chais pas j'ai 20 ans je suis super cool</h2>
                
                    <button id="cv-link" :class="themeStore.theme">
                        <a href="/assets/files/CV_Mehdi_Bourbon.pdf" download>
                            <i class="fas fa-download"></i>
                            Mon super CV
                        </a>
                    </button>
                </div>

                <img src="/assets/images/testphoto.png" alt="" class="floating"/>
                
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
    .floating {
        position: relative;
        animation: float2d 30s ease-in-out infinite;
        will-change: transform;
    }

    @keyframes float2d {
        0%   { transform: translate(0px, 0px) rotate(0deg); }
        10%  { transform: translate(12px, -8px) rotate(2deg); }
        20%  { transform: translate(20px, -20px) rotate(3deg); }
        30%  { transform: translate(12px, -35px) rotate(2deg); }
        40%  { transform: translate(0px, -45px) rotate(0.5deg); }
        50%  { transform: translate(-12px, -35px) rotate(-2deg); }
        60%  { transform: translate(-20px, -20px) rotate(-3deg); }
        70%  { transform: translate(-12px, -8px) rotate(-2deg); }
        80%  { transform: translate(0px, 0px) rotate(0deg); }
        90%  { transform: translate(8px, 6px) rotate(1deg); }
        100% { transform: translate(0px, 0px) rotate(0deg); }
    }

    #main-front-presentation {
        height: calc(100vh - 4em);
    }

    #main-front-presentation {
        color: white;
    }

    #inner-presentation {
        display: flex;
        justify-content: space-around;
        padding: 5em 0;
        max-width: 200em;
        margin: auto;
    }

    #main-front-presentation h1 {
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
        color: white;
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

    #main-home #choose h2::after, #choose h2.selected::after {
        background: white;
    }

    #choose h2:hover::after, #choose h2.selected::after {
        transform: scale(1);
    }

    #choice-container {
        margin-top: 4em;
    }

    /* CV LINK */
    #cv-link {
        margin-top: 0.8em;
        box-shadow: 10px 5px 5px rgb(118, 7, 155);
        font-size: 30px;
        background-image: linear-gradient(-20deg, #e8a7fa 0%, #ffffff 100%);
        border: none;
        padding: 0.5em 1em;
        border-radius: 60px;
        box-shadow: rgba(188, 72, 255, 0.8) 0px 7px 29px 0px;
        transition: all 0.2s ease;
    }

    #cv-link:hover {
        transform: translateY(-5px);
    }

    #cv-link a {
        text-decoration: none;
        font-family: "Quicksand", "Proxima Nova", Arial, Helvetica, sans-serif;
        font-size: 30px;
        font-weight: bold;
        color: rgb(188, 72, 255);
    }
</style>