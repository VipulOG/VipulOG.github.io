<script setup>
import StyledCard from './StyledCard.vue';

const props = defineProps(['img', 'title', 'description'])
const emit = defineEmits(['click'])

function itemClick() {
  emit('click')
}
</script>

<template>
  <StyledCard variant class="item-container" @click="itemClick">
    <div style="display: flex; gap: 12px">
      <img :src="props.img" width="50" height="50" style="object-fit: cover" class="rounded-rect" />
      <div>
        <h1 class="body-large">{{ props.title }}</h1>
        <p class="label-small line-clamp">{{ props.description }}</p>
      </div>
    </div>
    <p>></p>
  </StyledCard>
</template>

<style scoped>
.item-container {
  display: flex;
  min-width: 320px;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.item-container:hover {
  background-color: var(--md-sys-color-secondary);
  color: var(--md-sys-color-on-secondary);
  cursor: pointer;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
