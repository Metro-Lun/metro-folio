<script setup>
    import JobElement from './JobElement.vue';
    import j from "@/assets/dataPerso.json";
    const jobs = j.interests;
</script>

<template>
    <section id="jobs-section">
        <JobElement v-for="job in jobs" :key="job.id" :job="job" :serious="false"/>
    </section>
</template>

<style scoped>
</style>