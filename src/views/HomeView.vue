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
        <h1 id="main-title">Mehdi BOURBON</h1>

        <img src="../assets/images/main-logo.png" />
    </section>
    
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
                    <img :src="`/src/assets/images/technos/${n}.png`" />
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
</template>

<style scoped>
    #main-home {
        margin-left: 0;
        margin-top: 5em;
        height: 100vh;
        width: 100%;
        background-color: green;
    }

    #main-title {
        margin: 0;
        font-size: 100px;
    }

    #main-home img {
        position: absolute;
        left: 0px;
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
        gap: 4em;
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
</style>
