<script setup>
    import JobElement from './JobElement.vue';
    import j from '@/assets/dataPro.json';
    const jobs = j.experiences;

    import j2 from "@/assets/dataPerso.json";
    const hobbies = j2.interests;
</script>

<template>
    <section class="big-section">
        <h1>Parcours professionnel et personnel</h1>

        <section id="journey-section">
            <section id="jobs-section">
                <JobElement v-for="job in jobs" :key="job.id" :job="job" :serious="true"/>
            </section>

            <section id="jobs-section">
                <JobElement v-for="hobby in hobbies" :key="hobby.id" :job="hobby" :serious="false"/>
            </section>
        </section>
    </section>
</template>

<style scoped>
    #journey-section {
        display: grid;
        grid-template: auto / 1fr 1fr;
    }
</style>