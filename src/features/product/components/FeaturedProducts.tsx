'use client'

import { featuredProducts } from '../data/featured-products.mock'
import { ProductCard } from './ProductCard'

export function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Featured Products
          </h2>
          <p className="mx-auto max-w-xl text-gray-600">
            Discover our hand-picked selection of premium furniture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}