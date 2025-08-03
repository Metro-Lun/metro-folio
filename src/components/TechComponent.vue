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
        margin-right: 2em;
        text-align: end;
    }

    #technos {
        padding: 0 2em 2em 2em;
        color: white;
    }

    .div-techs {
        display: flex;
        padding-left: 2em;
        border-left: 2px solid white;
    }

    .div-tech {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90px;
        margin-right: 20px;
    }

    .tech-section {
        margin-bottom: 2em;
        display: grid;
        grid-template: auto / 1fr 4fr;
        align-items: center;
    }

    #technos :last-child {
        margin-bottom: 0;
    }

    img {
        max-height: 60px;
        margin-bottom: 5px;
        transition: all 0.1s ease;
    }

    @media (max-width: 900px) {
        .div-techs {
            flex-wrap: wrap;
        }

        h2 {
            font-size: 12px;
            width: 8em;
        }

        img {
            max-height: 30px;
        }

        .tech-name {
            font-size: 10px;
        }

        .div-tech {
            margin-bottom: 1em;
            width: 80px;
        }
    }
</style>