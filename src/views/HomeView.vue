<script setup>
import ProfileSmall from '@/components/ProfileSmall.vue'
import ProjectsSmall from '@/components/project/ProjectsSmall.vue'
import BlogsSmall from '@/components/blog/BlogsSmall.vue'

import { useBreakpoints } from '@vueuse/core'

const wideBreakpoint = '768px'
const breakpoints = useBreakpoints({ wideBreakpoint: wideBreakpoint })
const isWide = breakpoints.greater('wideBreakpoint')
</script>

<template>
  <div class="home-view" :class="{ 'wide-view': isWide }">
    <ProfileSmall class="item" :class="{ 'wide-item': isWide }" />
    <ProjectsSmall class="item" :class="{ 'wide-item': isWide }" />
    <BlogsSmall class="item" :class="{ 'wide-item': isWide }" />
  </div>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
}

.item {
  margin: 0px 8px 8px 8px;
}

.wide-view {
  flex-direction: row;
}

.wide-item {
  margin: 12px 12px 12px 0px;
}
</style>
