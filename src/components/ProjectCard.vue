<script setup>
    defineProps(["sae", "index", "clickHandler", "hoverHandler"])
</script>

<template>
    <div @click="clickHandler(index)" class="card" >
        <h3>{{ sae.code }}</h3>
        <img :src="`/assets/images/${sae.image}`" class="sae-img" />
        <div class="technos">
            <img v-for="te in sae.technos" :key="te.id" :src="`/assets/images/tech/${te}.png`" class="project-techno" @mouseover="evt => hoverHandler(evt, t)" @mouseout="hoverHandler(evt, null)"/> 
        </div>
    </div>
</template>

<style scoped>
    .card {
        background: rgba(255, 255, 255, 0.6);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        border-radius: 20px;
        transition: all 0.3s ease;
    }

    .card:hover {
        background: rgba(255, 255, 255, 1);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transform: translateY(-1em);
        opacity: 1;
    }

    .project-techno {
        height: 30px;
        margin: auto 0.5em;
    }

    .sae-img {
        width: 80%;
        height: auto;
    }

    h3 {
        margin: 0.5em 0;
        font-size: 30px;
    }

    .technos {
        margin: 1.5em;
    }
</style>