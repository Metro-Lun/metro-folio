<script setup>
    defineProps(["skill", "index"])
</script>

<template>
    <section :class="`skill-div skill-div-${index+1}`">
        <h2>C{{index + 1}} - {{ skill.title }}</h2>

        <div class="skill-situations">
            <h3>Situations professionnelles</h3>
            <ul>
                <li v-for="ps in skill.professional_situations" :key="ps.id">
                    <p>{{ ps }}</p>
                </li>
            </ul>
        </div>

        <div class="skill-levels">
            <h3>Niveaux</h3>

            <div v-for="(l, indexL) in skill.levels" :key="l.id" class="skill-level">
                <div class="skill-level-title">
                    <p :class="`level-${indexL + 1}`">{{ indexL + 1 }}</p>
                    <p>{{ l.name }}</p>
                </div>
                <p class="level-info">{{ l.info }}</p>
            </div>
        </div>

        <div class="skill-review">
            <div>
                <h3>Niveau personnel :</h3>
                <p :class="`level-${skill.personal_review.level}`">{{ skill.personal_review.level}}</p>
            </div>

            <p class="skill-review-explained">{{skill.personal_review.explanation}}</p>
        </div>
    </section>
</template>

<style scoped>
    .skill-div {
        padding: 2em;
        border-radius: 24px;
        transition: all 0.3s ease;
        opacity: 0.6;
    }

    .skill-div:hover {
        transition: all 0.3s ease;
        transform: translateY(-1em);
        opacity: 1;
    }

    .skill-div > h2 {
        display: flex;
        justify-content: flex-end;
        margin-bottom : 1em;
        font-size: 40px;
        font-family: 'Cascadia', 'Proxima Nova', Arial, Helvetica, sans-serif;
    }

    .skill-div div h3 {
        font-size: 30px;
        margin-bottom: 20px;
    }

    /* SITUATIONS */

    .skill-situations {
        margin-bottom: 3em;
    }

    .skill-situations ul {
        margin-left: 1em;
    }

    .skill-situations li {
        margin: 5px 0;
    }

    /* LEVELS */

    .skill-levels {
        margin-bottom: 3em;
    }

    .skill-level-title, .skill-review > div {
        display: flex;
        align-items: center;
        gap: 0.4em;
    }

    .skill-level-title p:first-child,
    .skill-review > div > p {
        border-radius: 50%;
        color: white;
        font-size: 20px;
        border: none;
        font-weight: bold;
        margin-right: 10px;
    }

    .skill-level-title p:nth-child(2) {
        font-weight: bold;
    }

    .level-1 {
        background-image: linear-gradient(-20deg, #880000 0%, #fc4444 100%);
        box-shadow: rgba(255, 36, 36, 0.6) 0px 7px 29px 0px;
        padding: 4px 0.7em;
    }

    .level-2 {
        background-image: linear-gradient(-20deg, #5d0077 0%, #e436ff 100%);
        box-shadow: rgba(118, 0, 186, 0.6) 0px 7px 29px 0px;
        padding: 4px 0.6em;
    }

    .level-3 {
        background-image: linear-gradient(-20deg, #0b037c 0%, #3f6cff 100%);
        box-shadow: rgba(10, 14, 255, 0.6) 0px 7px 29px 0px;
        padding: 4px 0.6em;
    }

    .level-info {
        margin : 0.5em 0;
        font-size: 20px;
    }

    /* REVIEW */

    .skill-review > div > h3 {
        margin-bottom: 0;
    }

    .skill-review > div > p {
        font-size: 30px;
    }

    .skill-review-explained {
        margin-top: 1em;
    }


</style>