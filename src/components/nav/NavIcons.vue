<script setup>
import HomeIcon from '@/components/icons/IconHome.vue'
import ProfileIcon from '@/components/icons/IconProfile.vue'
import ProjectIcon from '@/components/icons/IconProject.vue'
import ArticleIcon from '@/components/icons/IconArticle.vue'
</script>

<template>
  <RouterLink to="/" class="no-lh">
    <HomeIcon
      class="nav-icon on-surface-text rounded-rect"
      :class="{ selected: $route.name == 'home' }"
    />
  </RouterLink>
  <RouterLink to="/profile" class="no-lh">
    <ProfileIcon
      class="nav-icon on-surface-text rounded-rect"
      :class="{ selected: $route.name == 'profile' }"
    />
  </RouterLink>
  <RouterLink to="/works" class="no-lh">
    <ProjectIcon
      class="nav-icon on-surface-text rounded-rect"
      :class="{ selected: $route.name == 'works' }"
    />
  </RouterLink>
  <RouterLink to="/articles" class="no-lh">
    <ArticleIcon
      class="nav-icon on-surface-text rounded-rect"
      :class="{ selected: $route.name == 'articles' }"
    />
  </RouterLink>
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

.no-lh {
  line-height: 0;
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
