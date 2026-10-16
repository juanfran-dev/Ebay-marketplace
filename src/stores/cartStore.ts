import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Cart } from '../interfaces/cartInterface'
import type { Product } from '../interfaces/product'

export const useCartStore = defineStore('cart', () => {
  const items = ref<Cart[]>([])

  function addToCart(product: Product) {
    const existingItem = items.value.find((item) => item.product.id === product.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ product, quantity: 1 })
    }
  }

  function updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      items.value = items.value.filter((item) => item.product.id !== productId)
      return
    }

    const item = items.value.find((item) => item.product.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }

  function clearCart() {
    items.value = []
  }

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.product.price * item.quantity, 0)
  })

  const itemCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  return {
    items,
    addToCart,
    updateQuantity,
    clearCart,
    totalPrice,
    itemCount,
  }
})
