<script setup>
    import j from '@/assets/dataPro.json';
    const jobs = j.experiences;
</script>

<template>
    <section id="jobs-section">
        <section v-for="job in jobs" :key="job.id" class="job-card">
            <div>
                <h1>{{ job.name }}</h1>
                <h2>{{ job.entreprise }} - {{ job.date }}</h2>
            </div>
            
            <div class="job-img">
                <img :src="`/assets/images/logos/${job.entreprise}.png`" />
            </div>

            <div class="job-expl">
                <ul>
                    <li v-for="par in job.explanation" :key="par.id">{{ par }}</li>
                </ul>
            </div>

        </section>
    </section>
</template>

<style scoped>
    #jobs-section {
        display: flex;
        flex-direction: column;
        gap: 6em;
        align-items: center;
    }

    .job-card {
        background-color: white;
        padding: 3em;
        border-radius: 16px;
        width: 80em;
        display: grid;
        grid-template: 1fr 4fr / 4fr 2fr;
    }

    .job-card:hover {
        transform: translateY(-1em);
    }

    .job-card h1 {
        font-size: 36px;
        padding-bottom: 10px;
        margin-bottom: 0;
    }

    .job-img {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .job-img img {
        height: 50px;
        align-self: flex-end;
        margin-right: 1em;
    }

    .job-expl {
        margin-top: 2em;
        margin-left: 1em;
    }

    .job-expl li {
        font-size: 18px;
        margin-bottom: 1.5em;
    }
</style>