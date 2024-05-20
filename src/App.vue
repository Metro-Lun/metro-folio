<script setup>
import { RouterView } from 'vue-router'
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
