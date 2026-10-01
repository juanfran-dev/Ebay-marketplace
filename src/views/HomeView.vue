<template>
  <div class="flex min-h-screen w-full items-center justify-center bg-blue-600">
    <span class="bg-red-400 p-20">esta es la página de inicio</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const getData = async () => {
  try {
    const response = await fetch('https://api.ebay.com/buy/browse/v1/item_summary/search?')
    const data = await response.json()
    console.log('Fetched data:', data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  getData()
})
</script>
