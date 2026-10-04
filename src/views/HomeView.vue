<template>
  <div class="flex min-h-screen w-full items-center justify-center py-4">
    <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4">
      <li v-for="product in products" :key="product.id">
        <ProductComponent :productData="product" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ProductComponent from '../components/product/ProductCompent.vue'
import { onMounted, ref } from 'vue'
import type { Product } from '../interfaces/product'
import productData from '../components/product/ProductData.json'

const products = ref<Product[]>([])

const getData = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) {
      throw new Error(`Product API returned HTTP ${response.status}`)
    }

    products.value = await response.json()
  } catch (error) {
    console.error('Could not load products from the API; using local sample data.', error)
    products.value = productData
  }
}

onMounted(() => {
  getData()
})
</script>
