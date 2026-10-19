<template>
  <button
    type="button"
    class="flex items-center gap-2 rounded-md bg-cyan-500 py-2 text-white transition-colors duration-300 hover:bg-cyan-600 active:bg-cyan-700"
    @click="handleAddToCart"
  >
    <svg
      v-if="!added"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
    <span aria-live="polite">{{ added ? 'Added ✓' : 'Add to Cart' }}</span>
  </button>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import type { Product } from '../../interfaces/product'
import { useCartStore } from '../../stores/cartStore'

const props = defineProps<{ product: Product }>()
const cart = useCartStore()
const added = ref(false)

let feedbackTimeout: ReturnType<typeof setTimeout> | undefined

function handleAddToCart() {
  cart.addToCart(props.product)
  added.value = true

  if (feedbackTimeout) {
    clearTimeout(feedbackTimeout)
  }

  feedbackTimeout = setTimeout(() => {
    added.value = false
    feedbackTimeout = undefined
  }, 2000)
}

onBeforeUnmount(() => {
  if (feedbackTimeout) {
    clearTimeout(feedbackTimeout)
  }
})
</script>
