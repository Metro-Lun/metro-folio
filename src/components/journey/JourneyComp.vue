<script setup>
    import JobElement from './JobElement.vue';
    import j from '@/assets/dataPro.json';
    const jobs = j.experiences;

    import j2 from "@/assets/dataSchool.json";
    const schools = j2.schools;
</script>

<template>
    <section class="big-section">
        <section id="journey-section">
            <div>
                <h1>Parcours professionnel</h1>
                <section id="jobs-section">
                    <JobElement v-for="job in jobs" :key="job.id" :job="job" />
                </section>
            </div>

            <div>
                <h1>Formation</h1>
                <section id="jobs-section">
                    <JobElement v-for="school in schools" :key="school.id" :job="school" />
                </section>
            </div>
        </section>
    </section>
</template>

<style scoped>
    #journey-section {
        display: grid;
        grid-template: auto / 1fr 1fr;
        gap: 2em;
    }
</style>