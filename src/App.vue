<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import NavRail from './components/NavRail.vue'

import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const isWide = breakpoints.greater('md')
</script>

<template>
  <div class="wrapper">
    <header v-if="!isWide"><NavBar /></header>
    <NavRail v-if="isWide" />
    <main><RouterView /></main>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    height: 100vh;
  }
}
</style>
