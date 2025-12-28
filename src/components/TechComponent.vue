<script setup>
    import t from '@/assets/dataTechnos.json';
    const techs = t.technos;
</script>

<template>
    <section class="big-section">
        <h1>Technologies</h1>

        <section id="technos">
            <div v-for="tech in techs" :key="tech.id" class="tech-section">
                <h2>{{ tech.title }}</h2>

                <div class="div-techs">
                    <div v-for="name in tech.names" :key="name.id" class="div-tech">
                        <img draggable="false" :src="`/assets/images/tech/${name}.png`" />
                        <p class="tech-name">{{ name === "C2" ? "C#" : name }}</p>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
    h2 {
        font-size: 22px;
        font-weight: normal;
        padding-right: 1em;
        border-right: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: end;
    }

    #technos {
        display: flex;
        flex-direction: column;
    }

    .div-techs {
        display: flex;
    }

    .div-tech {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 64px;
        color: white;
        margin: 0.4em 1em;
    }

    .tech-section {
        margin-bottom: 1em;
        display: grid;
        grid-template: auto / 1fr 4fr;
    }

    #technos :last-child {
        margin-bottom: 0;
    }

    img {
        max-height: 50px;
        margin-bottom: 5px;
        transition: all 0.1s ease;
    }

    .tech-name {
        font-size: 16px;
    }

    @media (max-width: 600px) {
        h2 {
            font-size: 18px;
            padding-right: 0;
            border-right: none;
            margin-bottom: 0.4em;
        }

        .tech-section {
            display: flex;
            flex-direction: column;
        }

        .tech-name {
            font-size: 12px;
        }

        img {
            max-height: 30px;
        }

        .div-techs {
            flex-wrap: wrap;
            justify-content: left;
            margin-bottom: 0.6em !important;
        }

        .div-tech {
            margin: 0.4em 0.2em;
        }
    }
</style>