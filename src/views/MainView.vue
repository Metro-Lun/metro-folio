<script setup>
    import { ref, onMounted } from 'vue';
    import TechComponent from '@/components/TechComponent.vue';
    import JourneyComponent from '@/components/JourneyComponent.vue';
    import HobbiesComponent from '@/components/HobbiesComponent.vue';

    const tab = ref(0);
    const show = ref(false);

    const handleClick = (tabNumber) => tab.value = tabNumber;

    onMounted(() => {
        show.value = true
    });
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <section id="main-home">
        <section id="main-front-presentation">
            <section id="inner-presentation">
                    <div id="title">
                        <transition name="slide-fade">
                            <section v-if="show">
                                <div class="big-title">
                                    <h2>Mehdi BOURBON</h2>
                                    <h2>Mehdi BOURBON</h2>
                                </div>
                            </section>
                        </transition>

                        <transition name="slide-fade">
                            <div v-if="show" class="delay-1">
                                <h2 id="job-title">Développeur junior</h2>
                                <h2>Toujours en quête de nouvelles connaissances, je tourne principalement au web, mais je touche à tout !</h2>
                            </div>
                        </transition>

                        <transition name="slide-fade">
                            <section id="main-buttons" v-if="show" class="delay-2">
                                <nav>
                                    <button class="main-button-style">
                                        <a href="#choose">À propos de moi</a>
                                    </button>
                                    <button class="main-button-style">
                                        <RouterLink :to="{name: 'projs'}">Projets</RouterLink>
                                    </button>
                                </nav>
                            </section>
                        </transition>

                        <transition name="slide-fade">
                            <section id="main-contact" v-if="show" class="delay-3">
                                <h2>Me contacter :</h2>
                                <nav>
                                    <a href="https://github.com/Metro-Lun">
                                        <i class="fa-brands fa-github" />
                                        <p>Metro-Lun</p>
                                    </a>

                                    <a href="https://www.linkedin.com/in/mehdi-bourbon-7266a2224/">
                                        <i class="fa-brands fa-linkedin-in" />
                                        <p>Mehdi Bourbon</p>
                                    </a>

                                    <a href="mailto:mehdi.bourbon@outlook.fr">
                                        <i class="fa-solid fa-envelope" />
                                        <p>mehdi.bourbon@outlook.fr</p>
                                    </a>
                                </nav>
                            </section>
                        </transition>

                        <transition name="slide-fade">
                            <div class="delay-4" v-if="show">
                                <button class="main-button-style">
                                    <a href="/assets/files/CV_Mehdi_Bourbon.pdf" download>
                                        <i class="fas fa-download"></i>
                                        <p>Mon super CV</p>
                                    </a>
                                </button>
                            </div>
                        </transition>
                    </div>

                <transition name="fade">
                    <div v-if="show" id="profile-div">
                        <div id="profile-sub-div">
                            <img src="/assets/images/testphoto.png" alt="" class="floating"/>
                        </div>
                    </div>
                </transition>
                
            </section>
        </section>

        <section id="choose">
            <h2 @click="handleClick(0)" :class="tab == 0 ? 'selected' : ''">
                <i class="fa-solid fa-code" />
                <p>Technologies</p>
            </h2>

            <h2 @click="handleClick(1)" :class="tab == 1 ? 'selected' : ''">
                <i class="fa-solid fa-briefcase"/>
                <p>Parcours professionnel</p>
            </h2>

            <h2 @click="handleClick(2)" :class="tab == 2 ? 'selected' : ''">
                <i class="fa-solid fa-face-smile"/>
                <p>Passe-temps</p>
            </h2>
        </section>

        <section id="choice-container">
            <TechComponent v-if="tab == 0"/>
            <JourneyComponent v-if="tab == 1" />
            <HobbiesComponent v-if="tab == 2" />
        </section>
    </section>
</template>

<style scoped>
    .big-title {
        margin-bottom: 10em;
        font-family: "Consolas", "Quicksand", Arial, Helvetica, sans-serif;
    }

    .big-title h2 {
        color: #fff;
        font-size: 140px !important;
        position: absolute;
        transform: translateY(-100%);
    }

    .big-title h2:nth-child(1) {
        color: transparent;
        -webkit-text-stroke: 2px #fff;
    }

    .big-title h2:nth-child(2) {
        color: #fff;
        animation: animate 4s ease-in-out infinite;
    }

    @keyframes animate {
        0%,
        100% {
            clip-path: polygon(
                0% 45%,
                16% 44%,
                33% 50%,
                54% 60%,
                70% 61%,
                84% 59%,
                100% 52%,
                100% 100%,
                0% 100%
            );
    }

        50% {
            clip-path: polygon(
                0% 60%,
                15% 65%,
                34% 66%,
                51% 62%,
                67% 50%,
                84% 45%,
                100% 46%,
                100% 100%,
                0% 100%
            );
        }
    }

    h2 p { /* for the choice */
        font-size: 40px;
    }

    .floating {
        position: relative;
        animation: float2d 25s ease-in-out infinite;
        will-change: transform;
    }

    @keyframes float2d {
        0%   { transform: translate(0px, 0px) rotate(0deg); }
        10%  { transform: translate(12px, -8px) rotate(5deg); }
        20%  { transform: translate(20px, -20px) rotate(7deg); }
        30%  { transform: translate(12px, -35px) rotate(6deg); }
        40%  { transform: translate(0px, -45px) rotate(2deg); }
        50%  { transform: translate(-12px, -35px) rotate(-5deg); }
        60%  { transform: translate(-20px, -20px) rotate(-6deg); }
        70%  { transform: translate(-12px, -8px) rotate(-4deg); }
        80%  { transform: translate(0px, 0px) rotate(0deg); }
        90%  { transform: translate(8px, 6px) rotate(3deg); }
        100% { transform: translate(0px, 0px) rotate(0deg); }
    }

    #profile-div {
        animation: up-n-down 20s ease-in-out infinite;
        will-change: transform;
    }

    @keyframes up-n-down {
        0% { transform: translateY(-20px); }
        50% { transform: translateY(70px); }
        100% { transform: translateY(-20px); }
    }

    #profile-sub-div {
        animation: left-n-right 25s ease-in-out infinite;
        will-change: transform;
    }

    @keyframes left-n-right {
        0% { transform: translateX(-50px); }
        50% { transform: translateX(70px); }
        100% { transform: translateX(-50px); }
    }

    @keyframes animate {
        0%,
        100% {
            clip-path: polygon(
                0% 45%,
                16% 44%,
                33% 50%,
                54% 60%,
                70% 61%,
                84% 59%,
                100% 52%,
                100% 100%,
                0% 100%
            );
        }

        50% {
            clip-path: polygon(
                0% 60%,
                15% 65%,
                34% 66%,
                51% 62%,
                67% 50%,
                84% 45%,
                100% 46%,
                100% 100%,
                0% 100%
            );
        }
    }

    #main-front-presentation {
        height: calc(100vh - 4em);
        color: white;
    }

    #inner-presentation {
        display: flex;
        justify-content: space-around;
        padding: 5em 0;
        max-width: 110em;
        margin: auto;
    }

    #main-front-presentation h1 {
        font-weight: normal;
        justify-content: start;
        margin-bottom: 0;
        font-size: 140px;
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

    @media (max-width: 900px) {
        #inner-presentation {
            display: flex;
            flex-direction: column-reverse;
            padding-top: 0.4em;
        }

        .floating {
            height: 20px;
        }

        #title > h1 {
            display: flex;
            justify-content: center;
        }

        #title div *, #cv-link {
            margin-left: 15vw;
        }

        #title div h2 {
            font-size: 10px;
        }

        #cv-link {
            font-size: 12px;
        }

        #cv-link * {
            font-size: 8px;
        }

        #choose h2 i {
            font-size: 18px;
        }

        #choose h2 p {
            font-size: 10px;
        }
    }

    /* CONTACT */

    #main-contact {
        margin-top: 1em;
    }

    #main-contact nav {
        display: flex;
        flex-direction: column;
    }

    #main-contact a {
        color: white;
        opacity: 1;
    }

    #main-contact i {
        font-size: 28px;
    }

    #main-contact p {
        font-size: 24px;
        opacity: 1;
        margin-left: 12px;
    }

    #title h2 {
        font-size: 26px;
    }

    /* BUTTONS */
    #main-buttons {
        margin-bottom: 3em;
    }

    #main-buttons button {
        margin-right: 1em;
    }

    #main-buttons nav a {
        margin-right: 0;
        opacity: 1;
        font-size: 24px;
    }

    #job-title {
        margin-bottom: 2em;
    }
</style>