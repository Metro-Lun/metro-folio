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

    @media (max-width: 700px) {
        h2 {
            padding-bottom: 0.4em;
            border-bottom: none;
            border-right: 2px solid white;
            font-size: 10px;
            width: 10em;
        }

        #technos {
            display: flex;
            flex-direction: column;
        }

        .div-techs {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }

        .div-tech {
            width: 46px;
            margin: 0.4em 0.2em;
        }

        .tech-name {
            font-size: 10px;
        }


        .tech-section {
            margin-bottom: 2em;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        img {
            max-height: 30px;
        }
    }
</style>