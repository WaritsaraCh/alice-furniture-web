import { ProductProps } from '@/features/product/product.types'


export type CartItem = {
  product: ProductProps
  quantity: number
}

export type CartContextType = {
  cart: CartItem[]
  totalPrice: number
  totalItems: number
  addToCart: (product: ProductProps, quantity?: number) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
}