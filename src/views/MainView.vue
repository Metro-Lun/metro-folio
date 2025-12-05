<script setup>
    import { ref, onMounted } from 'vue';
    import TechComponent from '@/components/TechComponent.vue';
    import JourneyComponent from '@/components/journey/JourneyComponent.vue';
    import ProjectsComponent from '@/components/projects/ProjectsComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';
import HobbiesComponent from '@/components/HobbiesComponent.vue';

    const show = ref(false);

    onMounted(() => {
        show.value = true;
    });
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <section id="home">
        <section id="inner-presentation">
            <div id="title">
                <transition name="slide-fade">
                    <section v-if="show" class="title-section">
                        <div class="big-title">
                            <h2 class="name-title">Mehdi BOURBON</h2>
                            <h2 class="name-title">Mehdi BOURBON</h2>
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
                    <div class="delay-2 header-buttons" v-if="show">
                        <nav>
                            <a href="/assets/files/CV_Mehdi_Bourbon.pdf" download>
                                <button class="main-button-style">
                                    <i class="fas fa-download" />
                                    <p>Mon super CV</p>
                                </button>
                            </a>

                            <RouterLink :to="{ name: 'home', hash: '#projects' }">
                                <button class="main-button-style">
                                    <p>Mes projets</p>
                                </button>
                            </RouterLink>
                            
                            <RouterLink :to="{ name: 'home', hash: '#contact' }">
                                <button class="main-button-style">
                                    <p>Me contacter</p>
                                </button>
                            </RouterLink>
                        </nav>
                    </div>
                </transition>
            </div>

            <transition name="fade">
                <div v-if="show" id="profile-div">
                    <div id="profile-sub-div">
                        <img draggable="false" src="/assets/images/testphoto.png" alt="A photo of me." class="floating"/>
                    </div>
                </div>
            </transition>
        </section>

        <transition name="slide-fade">
            <div v-if="show" class="delay-4">
                <p id="arrow-p">(c'est par ici que ça se passe)</p>
                <section class="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </section>
            </div>
        </transition>
    </section>

    <section id="technologies">
        <TechComponent />
    </section>

    <section id="projects">
        <ProjectsComponent />
    </section>

    <section id="journey">
        <JourneyComponent />
    </section>

    <section id="hobbies">
        <HobbiesComponent />
    </section>

    <section id="contact">
        <ContactComponent />
    </section>
</template>

<style scoped>
    .big-title {
        margin-bottom: 10em;
        font-family: "Poppins", "Consolas", Arial, Helvetica, sans-serif;
    }

    .name-title {
        color: #fff;
        font-size: 120px !important;
        position: absolute;
        transform: translate(-70%);
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
        display: flex;
        align-items: center;
        justify-content: center;
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

    #home {
        padding-top: 4em;
        height: calc(100vh);
        color: white;
        background-color: rgba(0,0,0,0.6);
    }

    #inner-presentation {
        display: flex;
        justify-content: space-around;
        max-width: 110em;
        margin: 10em auto auto auto;
    }

    #home h1 {
        font-weight: normal;
        justify-content: start;
        margin-bottom: 0;
        font-size: 140px;
    }

    #home h2 {
        max-width: 40em;
    }

    #home img {
        max-height: 35em;
        border-radius: 50%;
    }

    .header-buttons {
        display: flex;
        gap: 3em;
    }

    .header-buttons button p {
        font-size: 24px;
    }

    nav {
        display: flex;
        gap: 3em;
    }

    nav a {
        margin-right: 0;
    }

    @media (min-width: 601px) {
        .name-title {
            transform: translateY(-100%);
        }
    }

    @media (max-width: 600px) {
        .big-title {
            margin-bottom: 10em;
        }

        .big-title h2:nth-child(1) {
            -webkit-text-stroke: 1px #fff;
        }

        #title h2 {
            font-size: 12px;
        }

        #inner-presentation {
            margin-top: 2em;
            flex-direction: column-reverse;
        }

        /* #inner-presentation {
        display: flex;
        justify-content: space-around;
        max-width: 110em;
        margin: 10em auto auto auto;
        } */

        #home img {
            max-height: 10em;
        }

        .name-title {
            font-size: 30px !important;
            /* transform: translate(-100%); */
        }

        .title-section {
            display: flex;
            /* justify-content: center; */
        }

        .delay-1 h2 {
            font-size: 14px !important;
        }
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

    /* ARROW */

    #arrow-p {
        margin-top: 6em;
        width: 100%;
        text-align: center;
    }

    .arrow {
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .arrow span {
        display: block;
        width: 1.5vw;
        height: 1.5vw;
        border-bottom: 5px solid white;
        border-right: 5px solid white;
        transform: rotate(45deg);
        margin: -10px;
        animation: animate-arrow 2s infinite;
    }

    .arrow span:nth-child(2) {
        animation-delay: -0.2s;
    }

    .arrow span:nth-child(3) {
        animation-delay: -0.4s;
    }

    @keyframes animate-arrow {
        0% {
            opacity: 0;
            transform: rotate(45deg) translate(-20px, -20px);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: rotate(45deg) translate(20px, 20px);
        }
    }
</style>