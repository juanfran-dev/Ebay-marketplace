<template>
  <div class="flex items-center justify-center w-full h-20 bg-cyan-500">
    <div class="flex items-center justify-between w-80 sm:w-164 md:w-248 2xl:w-332">
      <h1 class="text-3xl text-amber-100 font-bold">SWIFTMARK</h1>
      <button
        class="flex items-center justify-center p-4 hover:bg-amber-50/15 rounded-full cursor-pointer"
        @click="showCart = true"
      >
        <img src="@/assets/icons/shopping-cart.svg" alt="Shopping Cart" />
        <span
          v-if="cart.itemCount > 0"
          class="flex items-center justify-center size-4 shrink-0 bg-amber-100 text-xs rounded-full text-cyan-900"
          >{{ cart.itemCount }}</span
        >
      </button>
    </div>

    <CartComponent v-if="showCart" @close="showCart = false" />
  </div>
</template>

<script setup lang="ts">
import CartComponent from '../cart/CartComponent.vue'
import { useCartStore } from '../../stores/cartStore'
import { ref } from 'vue'

const showCart = ref(false)
const cart = useCartStore()
</script>
