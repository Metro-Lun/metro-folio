<script setup>
    defineProps(["sae", "index", "clickHandler", "hoverHandler"])
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <section @click="clickHandler(index)" class="card" >
        <div class="sae-title">
            <i v-if="sae.type === 'academic'" class="fas fa-book" />
            <i v-if="sae.type === 'personal'" class="fas fa-user" />
            <i v-if="sae.type === 'professional'" class="fas fa-briefcase" />
            <h3>{{ sae.code }}</h3>
        </div>
        
        <div class="technos">
            <img draggable="false" v-for="te in sae.technos" :key="te.id" :src="`/assets/images/tech/${te}.png`" class="project-techno" @mouseover="evt => hoverHandler(evt, t)" @mouseout="hoverHandler(evt, null)"/> 
        </div>
        <img draggable="false" :src="`/assets/images/projects/${sae.image}`" class="sae-img" />
    </section>
</template>

<style scoped>
    .card {
        background: rgba(255, 255, 255, 0.6);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        border-radius: 16px;
        transition: all 0.3s ease;
    }

    .card:hover {
        background: rgba(255, 255, 255, 1);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transform: translateY(-1em);
        opacity: 1;
    }

    .project-techno {
        height: 22px;
        margin: auto 0.2em;
    }

    .sae-img {
        width: 80%;
        height: auto;
        border-radius: 6px;
        margin-bottom: 0.6em;
    }

    h3 {
        font-size: 18px;
    }

    .technos {
        margin: 0.6em 0.2em;
        display: flex;
        gap: 0.1em;
    }

    .sae-title {
        margin-top: 0.5em;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 10px;
    }

    @media (max-width: 800px) {
        h3, .sae-title i {
            font-size: 12px;
        }

        h3 {
            margin-top: 0;
        }

        .sae-title {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 0.5em 0 0.3em 0;
        }

        .project-techno {
            height: 15px;
            margin: 0 0.2em 0 0.2em;
        }

        .technos {
            margin: 0.2em 0.4em;
            display: flex;
            gap: 4px;
            max-width: 80%;
            flex-wrap: wrap;
            justify-content: center;
        }

        .sae-img {
            width: 60%;
            border-radius: 3px;
            margin-top: 0.4em;
        }

        #saes {
            gap: 0.5em;
        }
    }
</style>