<script setup>
    import { ref } from 'vue';
    import t from '@/assets/dataTechnos.json';
    import p from '@/assets/dataPro.json';
    import i from '@/assets/dataPerso.json';

    const techs = t.technos;
    const exps = p.experiences;
    const interests = i.interests;
    
    const tab = ref(0);

    function handleClick(tabNum) {
        tab.value = tabNum;
    }
</script>

<template>
    <section id="main-home">
        <section id="overlay"></section>
        <div>
            <h1 class="main-title waviy">
                <span v-for="(l, index) in 'Mehdi'.split('')" :style="{ '--i': index + 1 }" :key="l.id">{{l}}</span>
            </h1>
            <h1 class="main-title waviy">
                <span v-for="(l, index) in 'BOURBON'.split('')" :style="{ '--i': index + 6 }" :key="l.id">{{l}}</span>
            </h1>
        </div>

        <img src="../assets/images/main-logo.png" />
    </section>
    
    <section class="big-section">
        <div id="titles"><h1>Qui suis-je ?</h1></div>

        <section id="intro">
            <img id="face-img" src="../assets/images/face.jpg" alt="Photo de moi-même" />

            <div>
                <p>Je m'appelle Mehdi Bourbon (c'est bien évidemment moi sur la photo). Je suis un étudiant en BUT informatique à Lyon, toujours en quête de connaissances, notamment sur le développement : la quantité de technologies et de moyens différents d'arriver à un même résultat est fascinant !</p>
                <p>Ce portfolio a pour but de vous présenter mon cheminement dans le monde du développement, en vous présentant mes projets ainsi que leurs liens avec mes études.</p>
                <p>Cependant, je ne fais pas que coder, même si je suis un gros bosseur :) En-dehors de mes heures de cours, je fais quand même des choses, comme vous pourrez le voir au-dessous.</p>
                
                <div>
                    <RouterLink :to="{name: 'projs'}"><button>Mes projets</button></RouterLink>
                    <RouterLink :to="{name: 'skills'}"><button>Compétences développées à l'IUT</button></RouterLink>
                </div>
                
            </div>
        </section>

        <section id="choose">
            <h2 @click="handleClick(0)" :class="tab == 0 ? 'selected' : ''">Compétences techniques</h2>
            <h2 @click="handleClick(1)" :class="tab == 1 ? 'selected' : ''">Parcours professionnel</h2>
            <h2 @click="handleClick(2)" :class="tab == 2 ? 'selected' : ''">Passe-temps</h2>
        </section>

        <section id="technos" v-if="tab == 0">
            <div v-for="t in techs" :key="t.id">
                <h2>{{ t.title }}</h2>
                <div class="tech-list">
                    <div v-for="n in t.names" :key="n.id" class="tech-div">
                        <img :src="`../assets/images/${n}.png`" />
                        <p>{{n}}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="explain-section path" v-if="tab == 1">
            <div v-for="(exp, index) in exps" :key="exp.id" :class="index % 2 == 0 ? 'explain-div' : 'explain-div explain-div-right'">
                <div class="explain-title">
                    <h2>{{exp.name}} - {{exp.entreprise}}</h2>
                    <h3>{{exp.date}}</h3>
                </div>
                <div>
                    <ul>
                        <li v-for="par in exp.explanation" :key="par.id"><p>{{par}}</p></li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="explain-section path" v-if="tab == 2">
            <div v-for="(i, index) in interests" :key="i.id" :class="index % 2 == 0 ? 'explain-div' : 'explain-div explain-div-right'">
                <h2>{{i.name}}</h2>
                <div>
                    <p v-for="e in i.explanation" :key="e.id">{{e}}</p>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
    #main-home {
        margin: 0;
        margin-top: 5em;
        height: 100vh;
        width: 100%;
        background-color: rgb(206, 89, 89);
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-title {
        font-size: 150px;
        margin: 0.3em;
    }

    .main-title:nth-child(2) {
        font-size: 200px;
        margin: 0;
    }

    #main-home img {
        position: absolute;
        left: 0px;
        top: 30em;
    }

    #titles h1 {
        margin: 0 auto;
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
        height: 1px;
        background: black;
        transition: transform 0.2s ease-in-out;
        transform: scale(0);
    }

    #choose h2:hover::after, #choose h2.selected::after {
        transform: scale(1);
    }

    /* TECHNOS */

    #technos > div {
        margin-top: 2em;
    }

    #technos img {
        height: 80px;
        width: auto;
    }

    #technos h2 {
        text-align: center;
        font-size: 30px;
    }

    .tech-list {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .tech-div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }



    /* QUI SUIS-JE */

    #intro {
        display: flex;
        gap: 3em;
    }

    #intro p {
        margin: 0.8em 0;
    }

    #face-img {
        border-radius: 50%;
        width: 280px;
    }

    .path {
        background-image: url('../assets/images/curved-dotted-line-png-19.png');
        background-repeat: no-repeat;
        background-position: center center;
    }

    button {
        background-color: #4d0000;
        color: white;
        border-radius: 24px;

        margin: 10px;
        padding: 16px 35px;

        font-size: 20px;
        font-weight: bold;

        border: none;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
    }

    button:hover {
        transform: translateY(-5px);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
</style>
