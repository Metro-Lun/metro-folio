<script setup>
    defineProps(["job", "serious"])
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <section class="job-element">
        <section class="job-dot">
            <p><i class="fa-solid fa-circle" /></p>
        </section>
        <section class="job-card">
            <section class="job-title-logo">
                <div>
                    <div v-if="!serious" class="job-title">
                        <i :class="job.icon" />
                        <h1>{{ job.name }}</h1>
                    </div>
                    <h1 v-else>{{ job.name }}</h1>
                    <h2 v-if="serious">{{ job.entreprise }} | {{ job.date }}</h2>
                </div>
                
                <div class="job-img">
                    <img draggable="false" v-show="serious" :src="`/assets/images/logos/${job.entreprise}.png`" />
                </div>
            </section>
                
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
        grid-template: auto / 1fr 3fr;
    }

    .job-dot {
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        position: relative;
    }

    .job-dot::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 2px;
        height: 100%;
        background-color: white;
        transform: translateX(-50%);
    }

    .job-dot > p {
        font-size: 20px;
        margin-top: 1.4em;
    }

    .job-title-logo {
        display: flex;
        align-items: center;
        gap: 2em;
        font-weight: bold;
    }

    .job-card {
        color: white;
        padding: 0.5em;
        width: 45em;
        transform: all 0.3s ease;
        margin: 0.5em 0;
    }

    .job-card h1 {
        font-size: 20px;
        margin-bottom: 0;
    }

    .job-card h2 {
        font-size: 16px;
    }

    .job-img {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .job-img img {
        height: 40px;
        align-self: flex-end;
        margin-right: 1em;
    }

    .job-expl {
        margin-top: 1em;
        margin-left: 2em;
    }

    .job-expl li {
        font-size: 16px;
        margin-bottom: 0.3em;
    }

    /* ICONS */
    .job-title {
        display: flex;
        align-items: center;
        gap: 1em;
        margin-top: 1em;
    }

    .job-title i {
        font-size: 26px;
    }

    .job-title h1 {
        margin-top: 0;
    }

    @media (max-width: 700px) {
        .job-element {
            display: grid;
            grid-template: auto / 1fr 6fr;
            width: 100%;
        }

        .job-card {
            width: 90%;
            padding: 0em;
            grid-template: 1fr 1fr / 5fr 1fr;
            margin: 1em 0;
        }

        .job-card h1 {
            font-size: 10px;
            margin-bottom: 0;
        }

        .job-dot > p {
            font-size: 10px;
            margin-top: 3.8em;
        }

        .job-dot::before {
            width: 1px;
            height: 100%;
        }

        .job-img img {
            height: 20px;
            margin-right: 1em;
        }

        .job-card h2 {
            font-size: 8px;
        }

        .job-expl {
            margin-top: 1em;
            margin-left: 12px;
        }

        .job-expl li {
            font-size: 7px;
            margin-bottom: 1em;
        }

        .job-title {
            gap: 0.5em;
        }

        .job-title i {
            font-size: 14px;
        }

        .job-title-logo {
            display: flex;
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 0em;
            font-weight: bold;
        }
    }
</style>