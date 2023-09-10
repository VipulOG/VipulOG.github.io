<script setup>
import ContactIcon from '@/components/icons/IconContact.vue'
import NavIcons from './NavIcons.vue'
import StyledCard from '../StyledCard.vue'
</script>

<template>
  <StyledCard padding="s">
    <nav class="nav-container">
      <div class="nav-icon-container"><NavIcons /></div>
      <button>
        <span><ContactIcon id="contact-icon" /></span>
        <span>Contact Me</span>
      </button>
    </nav>
  </StyledCard>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-icon-container {
  display: flex;
  gap: 10px;
}

#contact-icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
</style>
