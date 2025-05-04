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
                    <p>{{ name }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #technos {
        padding: 0 2em 2em 2em;
    }

    .div-techs {
        display: flex;
    }

    .div-tech {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 120px;
    }

    .tech-section {
        margin-bottom: 2em;
    }

    #technos :last-child {
        margin-bottom: 0;
    }

</style>