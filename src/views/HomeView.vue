<script setup>
import NavBar from '../components/nav/NavBar.vue'
import MiniProfile from '../components/MiniProfile.vue'
</script>

<template>
  <div class="wrapper">
    <MiniProfile class="outline mini-profile" />
    <NavBar class="navbar" />
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mini-profile {
  margin: 12px;
  max-width: 600px;
}

.navbar {
  max-width: 460px;
  width: calc(100% - 24px);
}
</style>