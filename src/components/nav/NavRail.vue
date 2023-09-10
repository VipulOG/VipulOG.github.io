<script setup>
import ContactIcon from '@/components/icons/IconContact.vue'
import NavIcons from './NavIcons.vue'
import StyledCard from '../StyledCard.vue'
</script>

<template>
  <StyledCard padding="l">
    <nav class="nav-container">
      <div class="nav-icon-container"><NavIcons /></div>
      <button><ContactIcon id="contact-icon" /></button>
    </nav>
  </StyledCard>
</template>

<style scoped>
.nav-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

.nav-icon-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

#contact-icon {
  width: 20px;
  height: 20px;
}
</style>
