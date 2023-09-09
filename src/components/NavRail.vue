<script setup>
import HomeIcon from './icons/IconHome.vue'
import ProfileIcon from './icons/IconProfile.vue'
import ProjectIcon from './icons/IconProject.vue'
import ArticleIcon from './icons/IconArticle.vue'
import ContactIcon from './icons/IconContact.vue'
</script>

<template>
  <nav
    class="rounded-rect surface"
    style="
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      padding: 12px;
      margin: 12px;
    "
  >
    <div style="display: flex; flex-direction: column; gap: 8px">
      <RouterLink to="/">
        <HomeIcon
          class="nav-icon on-surface-text rounded-rect"
          :class="{ selected: $route.name == 'home' }"
        />
      </RouterLink>
      <RouterLink to="/profile">
        <ProfileIcon
          class="nav-icon on-surface-text rounded-rect"
          :class="{ selected: $route.name == 'profile' }"
        />
      </RouterLink>
      <RouterLink to="/works">
        <ProjectIcon
          class="nav-icon on-surface-text rounded-rect"
          :class="{ selected: $route.name == 'works' }"
        />
      </RouterLink>
      <RouterLink to="/articles">
        <ArticleIcon
          class="nav-icon on-surface-text rounded-rect"
          :class="{ selected: $route.name == 'articles' }"
        />
      </RouterLink>
    </div>
    <button><ContactIcon style="width: 20px; height: 20px" /></button>
  </nav>
</template>

<style scoped>
.nav-icon {
  width: 38px;
  height: 38px;
  padding: 6px;
  transition:
    color 0.5s ease,
    background-color 0.5s ease,
    transform 0.5s ease;
}

.nav-icon:hover {
  color: var(--md-sys-color-on-secondary);
  background-color: var(--md-sys-color-secondary);
  transform: scale(1.08);
}

.nav-icon.selected {
  color: var(--md-sys-color-on-primary);
  background-color: var(--md-sys-color-primary);
}
</style>
