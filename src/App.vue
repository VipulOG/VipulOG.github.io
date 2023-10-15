<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/nav/NavBar.vue'
import NavRail from '@/components/nav/NavRail.vue'
import BgParticles from '@/components/BgParticles.vue'

import { useBreakpoints } from '@vueuse/core'
import { provide } from 'vue'

const wideBreakpoint = '768px'
const breakpoints = useBreakpoints({ wideBreakpoint: wideBreakpoint })
const isWideDisplay = breakpoints.greater('wideBreakpoint')
provide('isWideDisplay', isWideDisplay)
</script>

<template>
  <div :class="['flex', isWideDisplay ? 'row' : 'col']">
    <NavBar v-if="!isWideDisplay" style="margin: 8px" />
    <NavRail v-else style="margin: 12px" />
    <main style="flex: 1; overflow-y: auto">
      <RouterView />
    </main>
    <BgParticles></BgParticles>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  height: 100vh;
}

.row {
  flex-direction: row;
}

.col {
  flex-direction: column;
}
</style>
