<template>
  <div class="fixed inset-0 z-50 h-full w-screen overflow-y-auto bg-amber-50 text-cyan-900">
    <header class="flex items-center justify-between px-6 py-4 bg-white">
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
    <div class="grid grid-cols-4 w-full h-full bg-amber-50 p-6 gap-6">
      <!-- Cart items will be displayed here -->
      <div
        class="flex flex-col col-span-3 h-fit bg-white border border-cyan-500 rounded-md p-3 gap-3"
      >
        <div class="flex items-center border border-b-cyan-500 border-x-0 border-t-0 py-2">
          <h2 class="text-lg font-semibold text-cyan-700">Shopping Cart</h2>
          <span class="ml-auto font-medium text-cyan-600 text-md pt-1">Price</span>
        </div>
        <!-- Cart items will be displayed here -->
        <div
          v-if="cart.items.length === 0"
          class="flex justify-center items-center h-40 text-cyan-700 text-lg font-semibold"
        >
          Your cart is empty.
        </div>
        <div v-else>
          <div
            v-for="item in cart.items"
            :key="item.product.id"
            class="grid grid-cols-4 w-full h-fit border-3 border-amber-50 border-x-0 border-t-0"
          >
            <div class="flex col-span-1 items-center justify-center h-50">
              <img :src="item.product.image" alt="Product Image" class="w-36 h-36 object-contain" />
            </div>
            <div class="flex flex-col col-span-2 h-40 gap-2 pt-1">
              <div class="flex text-cyan-900 text-md gap-2 font-semibold">
                <span class="font-bold">{{ item.product.title }}</span>
                <span>-</span>
                <span>{{ item.product.category }}</span>
              </div>
              <p class="text-cyan-700 text-sm">{{ item.product.description }}</p>
              <div
                class="flex items-center border-2 w-fit px-4 py-0.5 gap-4 font-bold border-amber-400 rounded-md"
              >
                <button v-if="item.quantity == 1" class="cursor-pointer">
                  <img
                    src="../../assets/icons/trash.svg"
                    alt="trash"
                    @click="cart.updateQuantity(item.product.id, 0)"
                  />
                </button>
                <button
                  v-else
                  @click="cart.updateQuantity(item.product.id, item.quantity - 1)"
                  class="cursor-pointer"
                >
                  <img src="../../assets/icons/minus.svg" alt="minus" />
                </button>
                <span class="font-semibold">{{ item.quantity }}</span>
                <button
                  @click="cart.updateQuantity(item.product.id, item.quantity + 1)"
                  class="cursor-pointer"
                >
                  <img src="../../assets/icons/plus.svg" alt="plus" />
                </button>
              </div>
            </div>
            <div class="flex col-span-1 h-40 justify-end items-start pt-1 text-cyan-800 text-md">
              ${{ item.product.price * item.quantity }}
            </div>
          </div>
        </div>
      </div>
      <!-- Cart summary will be displayed here -->
      <div
        class="flex flex-col h-fit col-span-1 border border-cyan-500 rounded-md p-3 gap-3 bg-white"
      >
        <h2 class="text-lg font-semibold text-cyan-700">Summary</h2>
        <div class="flex justify-between text-cyan-900 text-md font-medium py-2">
          <span>Total Items:</span>
          <span>{{ cart.itemCount }}</span>
        </div>
        <div class="flex justify-between text-cyan-900 text-md font-medium py-2">
          <span>Total Price:</span>
          <span>${{ cart.totalPrice.toFixed(2) }}</span>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="flex w-fit py-2 px-4 rounded-md bg-amber-500 hover:bg-amber-600 text-white text-bold cursor-pointer"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../../stores/cartStore'

const cart = useCartStore()

const emit = defineEmits<{ close: [] }>()

const returnToProduct = () => {
  emit('close')
}
</script>
