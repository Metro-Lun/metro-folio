<script setup>
    import { ref } from 'vue';
    const interests = [
        {
            "interestName": "Monde associatif",
            "interestExplanation": "J'ai découvert le monde associatif en arrivant à l'IUT. J'ai découvert le monde associatif en arrivant à l'IUT.J'ai découvert le monde associatif en arrivant à l'IUT.J'ai découvert le monde associatif en arrivant à l'IUT.J'ai découvert le monde associatif en arrivant à l'IUT. J'ai découvert le monde associatif en arrivant à l'IUT. J'ai découvert le monde associatif en arrivant à l'IUT.Le principe des BDE m'a directement sédurhuqhgkt-jmjaeiougyyr ygrgureygureyg ureyugyery geuyguyeuyhds jgkljreml kjmhk grzjhgr ngt gnr fr  grf rg r rgrgr  gr rg rgit. J'ai découvert le monde associatif en arrivant à l'IUT. J'ai découvert le monde associatif en arrivant à l'IUT.J'ai découvert le monde associatif en arrivant à l'IUT.J'ai découvert le monde associatif en arrivant à l'IUT.J'ai découvert le monde associatif en arrivant à l'IUT. J'ai découvert le monde associatif en arrivant à l'IUT. J'ai découvert le monde associatif en arrivant à l'IUT.Le principe des BDE m'a directement sédurhuqhgkt-jmjaeiougyyr ygrgureygureyg ureyugyery geuyguyeuyhds jgkljreml kjmhk grzjhgr ngt gnr fr  grf rg r rgrgr  gr rg rgit. J'ai découvert le monde associatif en arrivant à l'IUT. J'ai découvert le monde associatif en arrivant à l'IUT.J'ai découvert le monde associatif en arrivant à l'IUT.J'ai découvert le monde associatif en arrivant à l'IUT.J'ai découvert le monde associatif en arrivant à l'IUT. J'ai découvert le monde associatif en arrivant à l'IUT. J'ai découvert le monde associatif en arrivant à l'IUT.Le principe des BDE m'a directement sédurhuqhgkt-jmjaeiougyyr ygrgureygureyg ureyugyery geuyguyeuyhds jgkljreml kjmhk grzjhgr ngt gnr fr  grf rg r rgrgr  gr rg rgit. J'ai découvert le monde associatif en arrivant à l'IUT. J'ai découvert le monde associatif en arrivant à l'IUT.J'ai découvert le monde associatif en arrivant à l'IUT.J'ai découvert le monde associatif en arrivant à l'IUT.J'ai découvert le monde associatif en arrivant à l'IUT. J'ai découvert le monde associatif en arrivant à l'IUT. J'ai découvert le monde associatif en arrivant à l'IUT.Le principe des BDE m'a directement sédurhuqhgkt-jmjaeiougyyr ygrgureygureyg ureyugyery geuyguyeuyhds jgkljreml kjmhk grzjhgr ngt gnr fr  grf rg r rgrgr  gr rg rgit."
        },
        {
            "interestName": "Photographie",
            "interestExplanation": "J'ai découvert le monde associatif en arrivant à l'IUT. Le principe des BDE m'a directement séduit."
        },
        {
            "interestName": "Etude des transports",
            "interestExplanation": "J'ai découvert le monde associatif en arrivant à l'IUT. Le principe des BDE m'a directement séduit."
        }
    ];

    function initClickTab() {
        const tab = [];
        for(let i = 0; i < interests.length; i++) {
            tab.push(false);
        }

        return tab;
    }

    const clickTab = ref(initClickTab());

    function updateClickTabOnId(id) {
        clickTab.value[id] = clickTab.value[id] ? false : true;
    }

</script>

<template>
    <h1 class="title">À propos de moi</h1>

    <img src="" alt="Photo de moi-même" />

    <div>
        <p>Je travaille beaucoup, mais j'ai quand même des centres d'intérêt, et pas des moindres.</p>
        <p>Certes, je ne suis pas sportif, mais soit</p>
    </div>

    <p>beaucoup de texte sur moi, logos du BDE Info, de la Student Club, des photos, les comptes insta</p>

    <section class="interest-section">
        <div v-for="(i, index) in interests" :key="i.id" class="interest-div">
            <h2 :class="index % 2 == 0 ? '' : 'interest-title-right'" @click="(evt) => updateClickTabOnId(index)">{{i.interestName}}</h2>
            <Transition>
                <p v-if="clickTab[index]">{{i.interestExplanation}}</p>
            </Transition>
        </div>
    </section>
    

</template>

<style scoped>
    .interest-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 95em;
        margin: auto;
        gap: 20px;
    }

    .interest-div h2 {
        background-color: grey;
        border-radius: 24px 24px 0px 0px;
        margin: 0px;
        padding: 10px 20px;
    }

    .interest-div p {
        margin: 0;
        border-radius: 0px 0px 24px 24px;
        padding: 10px;
        background-color: blue;
    }

    .interest-title-right {
        text-align: right;
    }

</style>