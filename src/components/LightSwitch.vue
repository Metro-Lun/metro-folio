<script setup>
    import { useThemeStore } from '@/stores/theme';
    const themeStore = useThemeStore();

    function changeTheme() {
        themeStore.toggleTheme();
    }
</script>

<template>
    <section id="switch-container">
        <div id="light-switch" @click="changeTheme" :class="themeStore.theme">
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
    #light-switch {
        width: 4rem;
        height: 2rem;
        background-color: #1E2939;
        border-radius: 1rem;  
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #light-switch.light {
        border: 1px solid black;
    }

    #light-switch.dark {
        border: 1px solid white;
    }

    header.light #light-switch {
        background-color: rgb(95, 223, 255);
    }

    #switch-btn {
        width: 1.9rem;
        height: 1.9rem;
        border-radius: 50%;
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

    header.dark #switch-btn {
        right: -1px;        /* allows for the button to move */
        background-color: white;
    }

    header.light #switch-btn {
        background-color: yellow;
    }
</style>