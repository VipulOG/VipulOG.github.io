<script setup>
import MiniProfile from '../components/MiniProfile.vue'
import StyledCard from '../components/StyledCard.vue'
import BulletHeader from '../components/BulletHeader.vue'
import { inject } from 'vue'

const isWideDisplay = inject('isWideDisplay')
</script>

<template>
  <div class="center">
    <div class="home-view" :class="{ 'wide-view': isWideDisplay }">
      <MiniProfile class="item wide-item" :class="{ 'wide-view-item': isWideDisplay }" />
      <StyledCard class="item" :class="{ 'wide-view-item': isWideDisplay }">
        <BulletHeader title="Projects">
          <button style="text-transform: uppercase">
            <span>View All</span><span style="margin-left: 4px">➜</span>
          </button>
        </BulletHeader>
      </StyledCard>
      <StyledCard class="item" :class="{ 'wide-view-item': isWideDisplay }">
        <BulletHeader title="Blogs">
          <button style="text-transform: uppercase">
            <span>View All</span><span style="margin-left: 4px">➜</span>
          </button>
        </BulletHeader>
      </StyledCard>
    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}

.home-view {
  display: flex;
  flex-direction: column;
}

.item {
  margin: 0px 8px 8px 8px;
}

.wide-item {
  grid-column: span 2;
}

.wide-view-item {
  margin: 0px;
}

.wide-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 12px 12px 12px 0px;
  max-width: 720px;
}
</style>
