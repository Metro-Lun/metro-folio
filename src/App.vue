<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Nav from '@/components/Nav.vue'
</script>

<template>
  <header>
    <Nav></Nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
