'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCartIcon, HeartIcon } from 'lucide-react'
import { useCart } from '@/features/cart/cart.context'
import { ProductProps } from '../product.types'

type Props = {
  product: ProductProps
}

export function ProductCard({ product }: Props) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
  }

  const displayPrice =
    product.isSale && product.salePrice
      ? product.salePrice
      : product.price

  return (
    <div className="group">
      <div className="relative mb-3 overflow-hidden rounded-lg">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {product.isNew && (
          <span className="absolute left-3 top-3 rounded bg-blue-500 px-2 py-1 text-xs font-bold text-white">
            New
          </span>
        )}

        {product.isSale && (
          <span className="absolute right-3 top-3 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">
            Sale
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-white bg-opacity-95 p-3 transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex justify-between">
            <button
              onClick={handleAddToCart}
              className="flex w-[80%] items-center justify-center rounded-md bg-amber-600 p-2 text-white hover:bg-amber-700"
            >
              <ShoppingCartIcon size={16} className="mr-2" />
              Add to Cart
            </button>

            <button className="ml-2 flex items-center justify-center rounded-md border border-gray-300 p-2 hover:bg-gray-100">
              <HeartIcon size={16} />
            </button>
          </div>
        </div>
      </div>

      <div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-gray-800 transition-colors hover:text-amber-600">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-500">{product.category}</p>

        <div className="mt-2 flex items-center">
          {product.isSale && product.salePrice ? (
            <>
              <span className="font-bold text-amber-600">
                ${product.salePrice}
              </span>
              <span className="ml-2 line-through text-gray-400">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="font-bold text-gray-800">
              ${displayPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}