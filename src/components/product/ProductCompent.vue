<template>
  <div class="flex flex-col w-80 h-96 border border-cyan-500 rounded-xl">
    <div
      class="group relative flex justify-center items-center w-full h-1/2 overflow-hidden bg-amber-50 rounded-t-xl"
    >
      <img
        :src="props.productData.image"
        alt="Product Image"
        class="h-full w-full object-contain group-hover:scale-120 transition-transform duration-300"
      />
      <button
        type="button"
        @click="openDetails"
        class="flex h-10 gap-2 pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer rounded-md bg-amber-100/30 hover:bg-amber-100/50 px-3 py-2 text-cyan-800 hover:text-cyan-900 hover:font-semibold backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
      >
        <img src="@/assets/icons/Eye.svg" alt="View Details" />

        View Details
      </button>
    </div>
    <div class="flex flex-col items-center justify-around w-full h-1/2 bg-cyan-50 rounded-b-xl p-4">
      <h2 class="line-clamp-2 w-full text-center text-xl text-cyan-900 font-semibold">
        {{ props.productData.title }}
      </h2>
      <p class="text-cyan-900 text-2xl font-bold">${{ props.productData.price }}</p>
      <button
        class="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white px-20 py-2 rounded-md transition-colors duration-300"
      >
        <svg
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
        Add to Cart
      </button>
    </div>
    <ProductDetailsComponent
      v-if="showDetails"
      :productDetails="props.productData"
      @close="showDetails = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProductDetailsComponent from './ProductDetailsComponent.vue'
import type { Product } from '../../interfaces/product'

const showDetails = ref(false)

const openDetails = () => {
  showDetails.value = true
}

const props = defineProps({
  productData: {
    type: Object as () => Product,
    required: true,
  },
})
</script>
