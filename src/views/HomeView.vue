<script setup>
import ProfileSmall from '@/components/ProfileSmall.vue'
import ProjectsSmall from '@/components/project/ProjectsSmall.vue'
import BlogsSmall from '@/components/blog/BlogsSmall.vue'
import { inject } from 'vue'

const isWideDisplay = inject('isWideDisplay')
</script>

<template>
  <div class="home-view" :class="{ 'wide-view': isWideDisplay }">
    <ProfileSmall class="item" :class="{ 'wide-item': isWideDisplay }" />
    <ProjectsSmall class="item" :class="{ 'wide-item': isWideDisplay }" />
    <BlogsSmall class="item" :class="{ 'wide-item': isWideDisplay }" />
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
