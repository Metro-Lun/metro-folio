<script setup>
    defineProps(["job", "serious"])
</script>

<template>
    <section class="job-card">
            <div>
                <h1>{{ job.name }}</h1>
                <h2 v-if="serious">{{ job.entreprise }} - {{ job.date }}</h2>
            </div>
            
            <div class="job-img">
                <img v-show="serious" :src="`/assets/images/logos/${job.entreprise}.png`" />
            </div>

            <div class="job-expl">
                <ul>
                    <li v-for="par in job.explanation" :key="par.id">{{ par }}</li>
                </ul>
            </div>
    </section>
</template>

<style scoped>
    .job-card {
        background-color: rgb(255,255,255);
        opacity: 0.6;
        padding: 3em;
        border-radius: 16px;
        width: 80em;
        display: grid;
        grid-template: 1fr 4fr / 4fr 2fr;
        transform: all 0.3s ease;
    }

    .job-card:hover {
        transform: translateY(-1em);
        opacity: 1;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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