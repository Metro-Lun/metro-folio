<script setup>
    import t from '@/assets/dataTechnos.json';
    const techs = t.technos;
</script>

<template>
    <section id="technos">
        <div v-for="tech in techs" :key="tech.id" class="tech-section">
            <h2>{{ tech.title }}</h2>

            <div class="div-techs">
                <div v-for="name in tech.names" :key="name.id" class="div-tech">
                    <img :src="`/assets/images/tech/${name}.png`" />
                    <p>{{ name === "C2" ? "C#" : name }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    h2 {
        margin-bottom: 20px;
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
        width: 110px;
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
        max-height: 80px;
        margin-bottom: 5px;
        transition: all 0.1s ease;
    }
</style>