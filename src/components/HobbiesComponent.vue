<script setup>
    import perso from "@/assets/dataPerso.json";
    const hobbies = perso.interests;
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <section class="big-section">
        <section id="hobbies-section">
            <div>
                <h1>Centres d'intérêt</h1>

                <div id="hobbies-display">
                    <section class="card" v-for="hobby in hobbies" :key="hobby.id">
                        <div class="card-title">
                            <i :class="hobby.icon" />
                            <p>{{ hobby.name }}</p>
                        </div>
                        <p class="line" v-for="line in hobby.explanation" :key="line.id">
                            {{ line }}
                        </p>
                    </section>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
    #hobbies-display {
        display: grid;
        grid-template: auto / 1fr 1fr 1fr;
        gap: 3em;
    }

    .card {
        background: rgba(255, 255, 255, 0.6);
        display: flex;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        border-radius: 16px;
        transition: all 0.3s ease;
        padding: 2em;
    }

    .card:hover {
        background: rgba(255, 255, 255, 1);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transform: translateY(-1em);
        opacity: 1;
    }

    .card-title {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 30px;
        gap: 0.5em;
        margin-bottom: 0.6em;
    }

    .card-title p {
        font-size: 30px;
    }

    .line {
        margin-bottom: 0.5em;
    }
</style>