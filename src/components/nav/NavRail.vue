<script setup>
import ContactIcon from '@/components/icons/IconContact.vue'
import NavIcons from './NavIcons.vue'
</script>

<template>
  <nav class="rounded-rect surface nav-container">
    <div style="display: flex; flex-direction: column; gap: 12px">
      <NavIcons />
    </div>
    <button><ContactIcon style="width: 20px; height: 20px" /></button>
  </nav>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 12px;
}
</style>
