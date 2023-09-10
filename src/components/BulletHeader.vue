<script setup>
const props = defineProps(['title'])
</script>

<template>
  <div class="header-container">
    <div class="label-large">
      <span>•</span><span style="margin-left: 4px">{{ props.title }}</span>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  gap: 8px;
}
</style>
