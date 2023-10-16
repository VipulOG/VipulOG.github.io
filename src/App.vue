<script setup>
import { computed, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import NavBar from './components/nav/NavBar.vue'
import NavRail from './components/nav/NavRail.vue'
import BgParticles from './components/BgParticles.vue'

const route = useRoute()
const isFirstRoute = ref(true)
const isHomeRoute = computed(() => route.name === 'home')

watch(
  () => route.path,
  () => {
    if (isFirstRoute.value) isFirstRoute.value = false
  }
)

const showNav = computed(() => !isHomeRoute.value && !isFirstRoute.value)
</script>

<template>
  <div class="wrapper">
    <Transition name="navrail">
      <NavRail v-show="showNav" class="nav-rail" />
    </Transition>
    <Transition name="navbar">
      <NavBar v-show="showNav" class="nav-bar" />
    </Transition>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
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
  height: 100svh;
  flex-direction: row;
}

main {
  flex: 1;
  overflow-y: auto;
  height: 100%;
}

.nav-rail {
  margin: 12px;
  height: calc(100% - 24px);
}

.nav-bar {
  display: none;
  margin: 8px;
  width: calc(100% - 16px);
}

.navrail-enter-active,
.navrail-leave-active {
  transition: all 500ms ease;
}

.navrail-enter-from,
.navrail-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.navrail-enter-to,
.navrail-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.navbar-enter-active,
.navbar-leave-active {
  transition: all 500ms ease;
}

.navbar-enter-from,
.navbar-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.navbar-enter-to,
.navbar-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 500ms ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }

  .nav-rail {
    display: none;
  }

  .nav-bar {
    display: block;
  }
}
</style>
