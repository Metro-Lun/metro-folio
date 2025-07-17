<script setup>
    import JobElement from './JobElement.vue';
    import j from '@/assets/dataPro.json';
    const jobs = j.experiences;
</script>

<template>
    <section id="jobs-section">
        <JobElement v-for="job in jobs" :key="job.id" :job="job" :serious="true"/>
    </section>
</template>

<style scoped>
    #jobs-section {
        border-left: 2px solid white;
    }
</style>