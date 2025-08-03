<script setup>
    import JobElement from './JobElement.vue';
    import j from '@/assets/dataPro.json';
    const jobs = j.experiences;

    import j2 from "@/assets/dataPerso.json";
    const hobbies = j2.interests;
</script>

<template>
    <section class="big-section">
        <section id="journey-section">
            <div>
                <h1>Parcours professionnel</h1>
                <section id="jobs-section">
                    <JobElement v-for="job in jobs" :key="job.id" :job="job" :serious="true"/>
                </section>
            </div>

            <div>
                <h1>Centres d'intérêt</h1>
                <section id="jobs-section">
                    <JobElement v-for="hobby in hobbies" :key="hobby.id" :job="hobby" :serious="false"/>
                </section>
            </div>
        </section>
    </section>
</template>

<style scoped>
    #journey-section {
        display: grid;
        grid-template: auto / 1fr 1fr;
    }
</style>