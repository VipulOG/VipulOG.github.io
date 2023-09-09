<script setup>
import GithubIcon from '@/components/icons/IconGithub.vue'
import InstaIcon from '@/components/icons/IconInsta.vue'
import LinkedInIcon from '@/components/icons/IconLinkedIn.vue'

const launchGithub = () => window.open('https://github.com/VipulOG')
const launchInsta = () => window.open('https://instagram.com/vipul.tyagii')
const launchLinkedIn = () => window.open('https://www.linkedin.com/in/')
</script>

<template>
  <section class="surface rounded-rect" style="padding: 16px">
    <div class="row" style="margin-bottom: 12px; justify-content: space-between">
      <div class="label-large" style="display: flex; align-items: center; gap: 4px">
        <span>•</span>
        <p>Undergraduate Student</p>
      </div>
      <div class="primary-container on-primary-container-text rounded-rect row label-small">
        <span>•</span>
        <p style="text-transform: uppercase">Available for Work</p>
      </div>
    </div>
    <div class="row" style="margin-bottom: 12px; justify-content: space-between">
      <div>
        <h1 class="headline-small" style="margin-bottom: 4px">I'm Vipul</h1>
        <p class="label-large">
          A Computer Science student on a journey of continuous learning and coding exploration. 🚀
        </p>
      </div>
      <div class="image-container">
        <img src="https://avatars.githubusercontent.com/u/90324465?v=4" alt="Vipul Tyagi" />
      </div>
    </div>
    <div class="row" style="margin-bottom: 12px; flex-wrap: wrap">
      <button
        class="secondary-container on-secondary-container-text rounded-rect"
        @click="launchGithub"
      >
        <GithubIcon />
      </button>
      <button
        class="secondary-container on-secondary-container-text rounded-rect"
        @click="launchInsta"
      >
        <InstaIcon />
      </button>
      <button
        class="secondary-container on-secondary-container-text rounded-rect"
        @click="launchLinkedIn"
      >
        <LinkedInIcon />
      </button>
    </div>
  </section>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
}

.image-container {
  border: 4px dotted var(--md-sys-color-secondary);
  border-radius: 50%;
  height: 100px;
  padding: 4px;
}

.image-container > img {
  border-radius: 50%;
  height: -webkit-fill-available;
  object-fit: cover;
}
</style>
