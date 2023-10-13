<script setup>
import GithubIcon from '@/components/icons/IconGithub.vue'
import InstaIcon from '@/components/icons/IconInsta.vue'
import LinkedInIcon from '@/components/icons/IconLinkedIn.vue'
import StyledCard from './StyledCard.vue'
import BulletHeader from './BulletHeader.vue'

const launchGithub = () => window.open('https://github.com/VipulOG')
const launchInsta = () => window.open('https://instagram.com/vipul.tyagii')
const launchLinkedIn = () => window.open('https://www.linkedin.com/in/')
</script>

<template>
  <StyledCard padding="l">
    <BulletHeader title="Undergraduate Student" style="gap: 0px" class="mb-12">
      <StyledCard scheme="primary-container" padding="s" class="row label-small">
        <p style="text-transform: uppercase">Available for Work</p>
      </StyledCard>
    </BulletHeader>

    <div class="row mb-12" style="justify-content: space-between; gap: 32px">
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

    <div class="row" style="flex-wrap: wrap">
      <button class="social-icon" @click="launchGithub">
        <GithubIcon />
      </button>
      <button class="social-icon" @click="launchInsta">
        <InstaIcon />
      </button>
      <button class="social-icon" @click="launchLinkedIn">
        <LinkedInIcon />
      </button>
    </div>
  </StyledCard>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 8px;
}

.mb-12 {
  margin-bottom: 12px;
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

.social-icon {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  border-radius: var(--md-sys-shape-rounded-rect);
}

.social-icon:hover {
  background-color: var(--md-sys-color-secondary);
  color: var(--md-sys-color-on-secondary);
}
</style>
