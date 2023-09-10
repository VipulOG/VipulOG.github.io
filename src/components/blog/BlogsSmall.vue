<script setup>
import BlogtItem from './BlogtItem.vue'
</script>

<template>
  <section class="surface rounded-rect" style="padding: 8px">
    <div class="row" style="justify-content: space-between; margin-bottom: 12px">
      <div class="label-large" style="display: flex; align-items: center; gap: 4px">
        <span>•</span>
        <p>Blogs</p>
      </div>
      <button style="text-transform: uppercase">
        <p>View All</p>
        <span style="margin-left: 4px">➜</span>
      </button>
    </div>
    <BlogtItem style="margin-bottom: 8px" />
    <BlogtItem style="margin-bottom: 8px" />
    <BlogtItem style="margin-bottom: 8px" />
    <BlogtItem style="margin-bottom: 8px" />
    <BlogtItem style="margin-bottom: 8px" />
  </section>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
}
</style>
