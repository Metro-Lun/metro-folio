<script setup>
    import { useThemeStore } from '@/stores/theme';
    const themeStore = useThemeStore();

    function changeTheme() {
        themeStore.toggleTheme();
    }
</script>

<template>
    <section id="switch-container">
        <div id="light-switch" @click="changeTheme">
            <div>
                <i v-show="themeStore.theme === 'dark'" id="dark-icon" class="fas fa-moon"></i>
            </div>
            <div>
                <i v-show="themeStore.theme === 'light'" id="light-icon" class="fas fa-sun"></i>
            </div>
            <div id="switch-btn"></div>
        </div>
    </section>
</template>

<style scoped>
    #light-switch{
        width: 4rem;
        height: 2rem;
        background-color: #1E2939;
        border-radius: 1rem;  
        position: relative;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    header.light #light-switch {
        background-color: rgb(95, 223, 255);
    }

    #switch-btn {
        width: 2rem;
        height: 2rem;
        border-radius: 50%; /* Avec 50% on obtient un disque */ 
        background-color: white;
        position: absolute; 
    }

    #dark-icon {
        padding-left: 10px;
        color: white;
    }

    #light-icon {
        padding-right: 10px;
        color: yellow;
    }
    
    #switch-btn {
        border: 1px solid black;
    }

    header.dark #switch-btn {
        right: -1px;        /* allows for the button to move */
        background-color: white;
    }

    header.light #switch-btn {
        background-color: yellow;
    }
</style>