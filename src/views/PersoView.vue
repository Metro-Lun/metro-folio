<script setup>
    import { ref } from 'vue';
    import i from '@/assets/dataPerso.json'
    const interests = i.interests;
</script>

<template>
    <h1 class="title">Qui suis-je ?</h1>

    <section id="intro">
        <img id="face-img" src="../assets/images/face.jpg" alt="Photo de moi-même" />

        <div>
            <p>Je m'appelle Mehdi Bourbon (c'est bien évidemment moi sur la photo). Je suis un étudiant en BUT informatique à Lyon, toujours en quête de connaissances, notamment sur le développement : la quantité de technologies et de moyens différents d'arriver à un même résultat est fascinant !</p>
            <p>Ce portfolio a pour but de vous présenter mon cheminement dans le monde du développement, en vous présentant mes projets ainsi que leurs liens avec mes études.</p>
            <p>Cependant, je ne fais pas que coder, même si je suis un gros bosseur :) En-dehors de mes heures de cours, je fais quand même des choses, comme vous pourrez le voir au-dessous.</p>
            <p id="indication">Cette page présente mes activités personnelles. Mon parcours professionnel se trouve <RouterLink :to="{name: 'pro'}">par ici</RouterLink> !</p>
        </div>
    </section>

    

    <section id="perso-path" class="explain-section">
        <div v-for="(i, index) in interests" :key="i.id" class="explain-div">
            <h2 :class="index % 2 == 0 ? '' : 'explain-title-right'">{{i.name}}</h2>
            <div>
                <p v-for="e in i.explanation" :key="e.id">{{e}}</p>
            </div>
            
        </div>
    </section>
    

</template>

<style scoped>
    #intro {
        display: flex;
        gap: 4em;
    }

    #face-img {
        border-radius: 50%;
        width: 280px;
    }

    #perso-path {
        background-image: url('../assets/images/anon1d10.jpg');
        background-repeat: no-repeat;
        background-position: center center;
    }


</style>