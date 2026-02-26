'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { ProductProps } from '@/features/product/product.types';

type CartItem = {
  product: ProductProps
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (product: ProductProps, quantity?: number) => void
  removeFromCart: (productId: number) => void
  getCartCount: () => number 
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: ProductProps, quantity = 1) => {
    setCart((prev) => [...prev, { product, quantity }])
  }

  const removeFromCart = (productId: number) => {
    setCart((prev) =>
      prev.filter((item) => item.product.id !== productId)
    )
  }

 
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}