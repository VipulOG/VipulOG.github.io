<script setup>
import ProfileSmall from '@/components/ProfileSmall.vue'
import ProjectsSmall from '@/components/project/ProjectsSmall.vue'
import BlogsSmall from '@/components/blog/BlogsSmall.vue'
import { inject } from 'vue'

const isWideDisplay = inject('isWideDisplay')
</script>

<template>
  <div style="display: flex; justify-content: center">
    <div class="home-view" :class="{ 'wide-view': isWideDisplay }">
      <ProfileSmall
        class="item"
        :class="{ 'wide-view-item': isWideDisplay }"
        style="grid-column: span 2"
      />
      <ProjectsSmall class="item" :class="{ 'wide-view-item': isWideDisplay }" />
      <BlogsSmall class="item" :class="{ 'wide-view-item': isWideDisplay }" />
    </div>
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

.wide-view-item {
  margin: auto;
}

.wide-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 12px 12px 12px 0px;
  max-width: 800px;
}
</style>
