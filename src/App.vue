<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/nav/NavBar.vue'
import NavRail from '@/components/nav/NavRail.vue'

import { useBreakpoints } from '@vueuse/core'
import { provide } from 'vue'

const wideBreakpoint = '768px'
const breakpoints = useBreakpoints({ wideBreakpoint: wideBreakpoint })
const isWideDisplay = breakpoints.greater('wideBreakpoint')
provide('isWideDisplay', isWideDisplay)
</script>

<template>
  <div :class="{ 'wide-layout': isWideDisplay }">
    <header v-if="!isWideDisplay"><NavBar style="margin: 8px" /></header>
    <NavRail v-if="isWideDisplay" style="margin: 12px" />
    <main style="flex: 1; overflow-y: auto"><RouterView /></main>
  </div>
</template>

<style scoped>
.wide-layout {
  display: flex;
  height: 100vh;
}
</style>
