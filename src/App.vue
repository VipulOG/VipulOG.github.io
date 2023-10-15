<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/nav/NavBar.vue'
import NavRail from './components/nav/NavRail.vue'
import BgParticles from './components/BgParticles.vue'

import { computed, ref, watch } from 'vue'

const route = useRoute()
const isFirstRoute = ref(true)
const isCurrentRouteHome = computed(() => route.name === 'home')

watch(
  () => route.path,
  () => {
    if (isFirstRoute.value) isFirstRoute.value = false
  }
)

const navHide = computed(() => {
  return [
    { hide: isFirstRoute.value },
    { 'hide-anim': isCurrentRouteHome.value && !isFirstRoute.value }
  ]
})
</script>

<template>
  <div class="wrapper">
    <NavBar class="nav-bar" :class="navHide" />
    <NavRail class="nav-rail" :class="navHide" />
    <main>
      <router-view v-slot="{ Component }">
        <transition :name="route.meta.transition || 'fade'" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <BgParticles></BgParticles>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  height: 100vh;
  flex-direction: row;
}

main {
  flex: 1;
  overflow-y: auto;
  height: 100%;
}

.nav-bar {
  display: none;
  animation: 0.3s ease slideInFromTop;
  margin: 8px;
  width: calc(100% - 16px);
}

.nav-bar.hide {
  display: none;
}

.nav-bar.hide-anim {
  animation: 0.3s ease slideOutToTop;
  animation-fill-mode: forwards;
}

.nav-rail {
  display: block;
  animation: 0.3s ease slideInFromLeft;
  margin: 12px;
  height: calc(100% - 24px);
}

.nav-rail.hide {
  display: none;
}

.nav-rail.hide-anim {
  animation: 0.3s ease slideOutToLeft;
  animation-fill-mode: forwards;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s;
}

.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 767px) {
  .wrapper {
    flex-direction: column;
  }
  .nav-bar {
    display: block;
  }
  .nav-rail {
    display: none;
  }
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideOutToLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
    display: none;
  }
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slideOutToTop {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
    display: none;
  }
}
</style>
