<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/nav/NavBar.vue'
import NavRail from '@/components/nav/NavRail.vue'

import { useBreakpoints } from '@vueuse/core'

const wideBreakpoint = '768px'
const breakpoints = useBreakpoints({ wideBreakpoint: wideBreakpoint })
const isWide = breakpoints.greater('wideBreakpoint')
</script>

<template>
  <div :class="{ 'wide-layout': isWide }">
    <header v-if="!isWide"><NavBar style="margin: 8px" /></header>
    <NavRail v-if="isWide" style="margin: 12px" />
    <main style="flex: 1"><RouterView /></main>
  </div>
</template>

<style scoped>
.wide-layout {
  display: flex;
  height: 100vh;
}
</style>
