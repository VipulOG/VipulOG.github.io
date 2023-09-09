<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import NavRail from './components/NavRail.vue'

import { useBreakpoints } from '@vueuse/core'

const wideBreakpoint = '768px'
const breakpoints = useBreakpoints({ wideBreakpoint: wideBreakpoint })
const isWide = breakpoints.greater('wideBreakpoint')
</script>

<template>
  <div :class="{ 'wide-layout': isWide }">
    <header v-if="!isWide"><NavBar /></header>
    <NavRail v-if="isWide" />
    <main style="flex: 1"><RouterView /></main>
  </div>
</template>

<style scoped>
.wide-layout {
  display: flex;
  height: 100vh;
}
</style>
