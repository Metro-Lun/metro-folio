<script setup>
    defineProps(["skill", "index", "opened"])
</script>

<template>
    <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </head>

    <section :class="`skill-div skill-div-${index+1} ${opened ? 'opened' : ''}`">
        <div class="skill-main-title-wrapper">
            <div class="skill-main-title-title">
                <i :class="`fa-solid ${skill.icon}`" />
                <h2 class="skill-main-title">{{ skill.title }}</h2>
            </div>
            <i :class="`fa-solid fa-chevron-right ${opened ? 'opened' : ''}`" />
        </div>

        <section :class="`all-skill ${opened ? 'opened' : ''}`">
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
    </section>
</template>

<style scoped>
    .skill-div {
        padding: 2em;
        border-radius: 24px;
        transition: all 0.3s ease;
        opacity: 0.6;
        background-color: white;
        transition: all 0.3s ease;
    }

    .skill-div:hover {
        transform: translateY(-1em);
        opacity: 1;
    }

    .skill-div.opened {
        transition: all 0.3s ease;
    }

    .skill-main-title-wrapper {
        margin-bottom : 1em;
        font-size: 30px;
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

    /* CHEVRON */

    .skill-main-title-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    i {
        transition: transform .5s ease-in-out;
    }
    
    i.opened {
        transform: rotate(90deg);
    }

    .all-skill {
        opacity: 0;
        max-height: 0;
        transition: all .5s ease-in-out;
        user-select: none;
        pointer-events: none;
    }

    .all-skill.opened {
        opacity: 1;
        max-height: 1000px;
        pointer-events: auto;
        user-select: auto;
    }

    @media (max-height: 800px) {
        h2 {
            font-size: 26px;
        }

        .level-info {
            font-size: 12px;
        }

        h3 {
            font-size: 20px !important;
        }

        .skill-level-title p:first-child {
            font-size: 16px;
        }

        .skill-review > div > p {
            font-size: 20px;
        }

    }

    .skill-main-title-title {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .skill-main-title-wrapper {
            margin: 0;
    }

    .opened .skill-main-title-wrapper {
        margin-bottom: 1em;
    }
</style>