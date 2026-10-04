<template>
  <div
    class="fixed inset-0 z-50 min-h-dvh w-screen overflow-y-auto bg-white text-cyan-900"
    role="dialog"
    aria-modal="true"
    :aria-label="props.productDetails.title"
  >
    <header class="flex items-center justify-between px-6 py-4">
      <button
        type="button"
        class="flex items-center gap-2 cursor-pointer rounded-md py-1 text-cyan-800 transition-colors group"
        @click="emit('close')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 mt-0.75 group-hover:text-cyan-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <span class="group-hover:text-cyan-500" @click="returnToProduct">Return to store</span>
      </button>
    </header>
    <main class="grid md:grid-cols-2 w-full gap-8">
      <div class="flex h-80 md:p-0 md:h-130">
        <img
          :src="props.productDetails.image"
          :alt="props.productDetails.title"
          class="h-full w-full object-contain"
        />
      </div>
      <section class="flex flex-col gap-5 px-3.5 md:pl-0 md:pr-10">
        <div class="flex flex-col gap-1">
          <h2 class="text-2xl font-bold">{{ props.productDetails.title }}</h2>
          <div class="text-sm text-cyan-700">
            <RatingMarkComponent
              :rating="props.productDetails.rating.rate"
              :account="props.productDetails.rating.count"
            />
          </div>
        </div>
        <p class="text-3xl font-semibold">${{ props.productDetails.price }}</p>
        <div class="flex flex-col border border-cyan-500 rounded-md p-3 gap-3">
          <h2 class="text-lg font-bold">Product description</h2>
          <p class="leading-7 text-cyan-700">{{ props.productDetails.description }}</p>
        </div>
        <div class="flex flex-col border border-cyan-500 rounded-md p-3 gap-3">
          <h2 class="text-lg font-bold">Delivery details</h2>
          <div class="w-fit p-1 px-1.5 text-xs font-bold bg-cyan-50 text-cyan-900 rounded-lg">
            Instant delivery
          </div>
          <div class="flex flex-col gap-1">
            <p class="leading-7 text-cyan-700">
              After payment, you will receive an email with the download link.
            </p>
            <p class="leading-7 text-cyan-700">Format: ZIP with digital files.</p>
          </div>
        </div>
        <button
          class="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white px-20 py-2 rounded-md transition-colors duration-300 cursor-pointer"
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
        <div>
          <p class="flex items-center gap-2 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="oklch(71.5% 0.143 215.221)"
              class="size-4"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Inmediate download after payment.
          </p>
          <p class="flex items-center gap-2 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="oklch(71.5% 0.143 215.221)"
              class="size-4"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Technical support included.
          </p>
          <p class="flex items-center gap-2 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="oklch(71.5% 0.143 215.221)"
              class="size-4"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clip-rule="evenodd"
              />
            </svg>
            Certification guarantee.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../../interfaces/product'
import RatingMarkComponent from './RatingMarkComponent.vue'

const emit = defineEmits<{ close: [] }>()

const props = defineProps({
  productDetails: {
    type: Object as () => Product,
    required: true,
  },
})

const returnToProduct = () => {
  emit('close')
}
</script>
