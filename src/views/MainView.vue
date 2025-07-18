<script setup>
    import { ref, onMounted } from 'vue';
    import TechComponent from '@/components/TechComponent.vue';
    import JourneyComponent from '@/components/JourneyComponent.vue';
    import HobbiesComponent from '@/components/HobbiesComponent.vue';

    const tab = ref(0);
    const show = ref(false);

    function handleClick(tabNum) {
        tab.value = tabNum;
    }

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
                            <h1 v-if="show">Mehdi BOURBON</h1>
                        </transition>

                        <transition name="slide-fade">
                            <div v-if="show" class="delay-1">
                                <h2 id="job-title">Développeur junior.</h2>
                                <h2>Toujours en quête de nouvelles connaissances, je tourne principalement au web, mais je touche à tout !</h2>
                            </div>
                        </transition>

                        <section id="main-contact">
                            <h2>Contact</h2>
                            <nav>
                                <div>
                                    <a href="https://github.com/Metro-Lun">
                                        <i class="fa-brands fa-github" />
                                        <p>Mon profil GitHub</p>
                                    </a>

                                    <a href="https://www.linkedin.com/in/mehdi-bourbon-7266a2224/">
                                        <i class="fa-brands fa-linkedin-in" />
                                        <p>Mon profil LinkedIn</p>
                                    </a>

                                    <a href="mailto:mehdi.bourbon@outlook.fr">
                                        <i class="fa-solid fa-envelope" />
                                        <p>Me contacter par mail</p>
                                    </a>
                                </div>
                            </nav>
                        </section>

                        <button id="cv-link">
                            <a href="/assets/files/CV_Mehdi_Bourbon.pdf" download>
                                <i class="fas fa-download"></i>
                                <p>Mon super CV</p>
                            </a>
                        </button>
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
    h2 p {
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

    #main-front-presentation {
        height: calc(100vh - 4em);
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
        display: flex;
        align-items: center;
        gap: 10px;
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

    #main-contact nav {
        display: flex;
        flex-direction: column;
    }
</style>