<script setup>
    defineProps(["job", "serious"])
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <section class="job-element">
        <section class="job-dot">
            <p><i class="fa-regular fa-circle" /></p>
        </section>
        <section class="job-card">
                <div>
                    <div v-if="!serious" class="job-title">
                        <i :class="job.icon" />
                        <h1>{{ job.name }}</h1>
                    </div>
                    <h1 v-else>{{ job.name }}</h1>
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
    </section>
</template>

<style scoped>
    .job-element {
        display: grid;
        grid-template: auto / 1fr 4fr;
    }

    .job-dot {
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .job-dot::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 6px;
        height: 44%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: translateX(-50%);
    }

    .job-dot p::after {
        content: "";
        position: absolute;
        top: 56%;
        left: 50%;
        width: 6px;
        height: 44%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: translateX(-50%);
    }

    .job-dot > p {
        font-size: 60px;
    }

    .job-card {
        background-color: rgb(255,255,255);
        opacity: 0.6;
        padding: 3em;
        border-radius: 16px;
        width: 80em;
        display: grid;
        grid-template: 1fr 2fr / 3fr 1fr;
        transform: all 0.3s ease;
        margin: 3em 0;
        height: 22em;
    }

    .job-card:hover {
        transform: translateY(-1em);
        opacity: 1;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    .job-card h1 {
        font-size: 36px;
        margin-bottom: 0;
    }

    .job-img {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .job-img img {
        height: 80px;
        align-self: flex-end;
        margin-right: 1em;
    }

    .job-expl {
        margin-top: 2em;
        margin-left: 1em;
    }

    .job-expl li {
        font-size: 18px;
        margin-bottom: 1em;
    }

    /* ICONS */
    .job-title {
        display: flex;
        align-items: center;
        gap: 2em;
    }

    .job-title i {
        font-size: 36px;
    }
</style>