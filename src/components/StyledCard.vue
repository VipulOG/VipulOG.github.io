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

const style = computed(() => {
  const background = props.scheme
  const foreground = 'on-' + props.scheme + '-text'
  return `${background} ${foreground}`
})
</script>

<template>
  <div class="rounded-rect" :class="style" :style="{ padding: padding }">
    <slot />
  </div>
</template>
