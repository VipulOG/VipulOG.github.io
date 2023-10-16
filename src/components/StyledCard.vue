<script setup>
import { computed } from 'vue'

const props = defineProps({
  padding: {
    type: String,
    defaul: 'm',
    validator(value) {
      return ['s', 'm', 'l'].includes(value)
    }
  },
  glassEffect: {
    type: Boolean,
    default: false
  },
  scheme: {
    type: String,
    default: 'surface'
  }
})

const padding = computed(() => {
  switch (props.padding) {
    case 's':
      return '8px'
    case 'l':
      return '16px'
    default:
      return '12px'
  }
})

const classes = computed(() => {
  const background = props.scheme
  const foreground = 'on-' + props.scheme + '-text'
  return ["rounded-rect", background, foreground, props.glassEffect ? 'glass' : '']
})
</script>

<template>
  <div :class="classes" :style="{ padding: padding }">
    <slot />
  </div>
</template>

<style scoped>
.glass {
  backdrop-filter: blur(6px);
}
</style>
