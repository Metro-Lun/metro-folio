<script setup>
import TechComponent from '@/components/TechComponent.vue';

</script>

<template>
    <section id="main-home">
        <p>hjkjk</p>
        <section class="main-front-presentation">
            <div>
                <h1>Mehdi BOURBON</h1>
                <h2>Texte pour me présenter</h2>
            </div>

            <div>
                <p>Image de moi</p>
            </div>
        </section>

        <section id="main-small-talk">
            <p>blabla</p>
            <p>blabla2</p>
        </section>

        <section id="main-choose">
            <div>a</div>
            <div>b</div>
            <div>c</div>
        </section>

        <section id="main-tech">
            <TechComponent />
        </section>
    </section>
</template>

<style scoped>
    .main-front-presentation {
        display: flex;
    }
</style>