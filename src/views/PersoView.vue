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
            <p>Je m'appelle Mehdi Bourbon (le machin sur la photo au-dessus, là). Je suis un étudiant en BUT informatique à Lyon, et j'adore le développement !</p>
            <p>Cependant, je ne fais pas que coder, même si je suis un gros bosseur :)</p>
            <p>En-dehors de mes heures de cours, je fais quand même des trucs.</p>
        </div>
    </section>

    

    <section class="explain-section">
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
        gap: 5em;
    }

    #face-img {
        border-radius: 50%;
        width: 200px;
        animation: tourne 3s infinite;
    }

    /* ROTATION DE L'IMAGE */

    @keyframes tourne {
        0% {
            transform: rotate( 0deg );
        }
        100% {
            transform: rotate( -360deg );
        }
    };
</style>