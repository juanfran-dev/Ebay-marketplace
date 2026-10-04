<template>
  <div class="flex items-center gap-1.5 text-cyan-900">
    <span
      v-for="star in starCount"
      :key="star"
      class="inline-flex"
      role="img"
      :aria-label="`${starCount} 5 stars`"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="oklch(85.2% 0.199 91.936)"
        class="size-5"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
    <span>{{ props.rating }} / 5 ({{ props.account }} reviews)</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
  account: {
    type: Number,
    required: true,
  },
})

const starCount = computed(() => Math.max(0, Math.min(5, Math.round(props.rating))))
</script>
