<script setup>
import HomeIcon from './icons/IconHome.vue'
import ProfileIcon from './icons/IconProfile.vue'
import ProjectsIcon from './icons/IconProjects.vue'
import ContactIcon from './icons/IconContact.vue'
</script>

<template>
  <nav>
    <div class="nav-icon-container">
      <RouterLink to="/">
        <HomeIcon class="nav-icon" :class="{ selected: $route.name == 'home' }" />
      </RouterLink>
      <RouterLink to="/profile">
        <ProfileIcon class="nav-icon" :class="{ selected: $route.name == 'profile' }" />
      </RouterLink>
      <RouterLink to="/works">
        <ProjectsIcon class="nav-icon" :class="{ selected: $route.name == 'works' }" />
      </RouterLink>
    </div>
    <button>
      <span><ContactIcon style="width: 16px; height: 16px; margin-right: 6px" /></span>
      <span>Contact Me</span>
    </button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  margin: 8px;
  border-radius: 8px;
  background-color: var(--md-sys-color-surface-variant);
}

.nav-icon-container {
  display: flex;
  gap: 8px;
}

.nav-icon {
  width: 36px;
  height: 36px;
  padding: 6px;
  color: var(--md-sys-color-on-surface);
  border-radius: 100%;
  transition:
    color 0.5s ease,
    background-color 0.5s ease,
    transform 0.5s ease;
}

.nav-icon.selected {
  color: var(--md-sys-color-on-primary);
  background-color: var(--md-sys-color-primary);
}
</style>
