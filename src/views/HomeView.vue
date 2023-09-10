<script setup>
import MiniProfile from '../components/MiniProfile.vue'
import StyledCard from '../components/StyledCard.vue'
import BulletHeader from '../components/BulletHeader.vue'
import ListItem from '../components/ListItem.vue'
import { inject } from 'vue'

const isWideDisplay = inject('isWideDisplay')
</script>

<template>
  <div class="center">
    <div class="home-view" :class="{ 'wide-view': isWideDisplay }">
      <MiniProfile class="item wide-item" :class="{ 'wide-view-item': isWideDisplay }" />
      <StyledCard class="item" :class="{ 'wide-view-item': isWideDisplay }">
        <BulletHeader title="Projects" class="mb-12">
          <button style="text-transform: uppercase">
            <span>View All</span><span style="margin-left: 4px">➜</span>
          </button>
        </BulletHeader>
        <div style="display: flex; flex-direction: column; gap: 8px">
          <ListItem
            v-for="n in 5"
            :key="n"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra diam urna, vitae dignissim eros elementum et. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vel pulvinar odio. Proin sed neque at eros finibus convallis. Donec condimentum, tellus eu fermentum eleifend, purus nibh ultricies urna, ut porttitor magna libero et mauris. Maecenas fringilla libero metus, non aliquet quam imperdiet at."
            img="https://picsum.photos/seed/picsum/200"
          />
        </div>
      </StyledCard>
      <StyledCard class="item" :class="{ 'wide-view-item': isWideDisplay }">
        <BulletHeader title="Blogs" class="mb-12">
          <button style="text-transform: uppercase">
            <span>View All</span><span style="margin-left: 4px">➜</span>
          </button>
        </BulletHeader>
        <div style="display: flex; flex-direction: column; gap: 8px">
          <ListItem
            v-for="n in 5"
            :key="n"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra diam urna, vitae dignissim eros elementum et. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vel pulvinar odio. Proin sed neque at eros finibus convallis. Donec condimentum, tellus eu fermentum eleifend, purus nibh ultricies urna, ut porttitor magna libero et mauris. Maecenas fringilla libero metus, non aliquet quam imperdiet at."
            img="https://picsum.photos/seed/picsum/200"
          />
        </div>
      </StyledCard>
    </div>
  </div>
</template>

<style scoped>
.mb-12 {
  margin-bottom: 12px;
}

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
