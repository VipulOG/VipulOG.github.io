<script setup>
import ContactIcon from '@/components/icons/IconContact.vue'
import NavIcons from './NavIcons.vue'
</script>

<template>
  <nav class="rounded-rect surface nav-container">
    <div style="display: flex; gap: 10px">
      <NavIcons />
    </div>
    <button>
      <span><ContactIcon style="width: 16px; height: 16px; margin-right: 6px" /></span>
      <span>Contact Me</span>
    </button>
  </nav>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
}
</style>
