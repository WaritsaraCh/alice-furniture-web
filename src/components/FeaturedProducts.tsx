"use client";
import React from 'react';
import { ProductCard, ProductProps } from './ProductCard';
import Link from 'next/link';
const products: ProductProps[] = [
{
  id: 1,
  name: 'Modern Leather Sofa',
  price: 1299,
  image:
  'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  category: 'Living Room',
  isNew: true
},
{
  id: 2,
  name: 'Scandinavian Dining Table',
  price: 849,
  image:
  'https://exclusivia.co/cdn/shop/products/avery-scandinavian-solid-wood-dining-table-510373.jpg?v=1710923697&width=1000',
  category: 'Dining'
},
{
  id: 3,
  name: 'Minimalist Coffee Table',
  price: 349,
  salePrice: 299,
  image:
  'https://www.decorpot.com/images/306393876mark-your-wishlist-done-with-this-trendy-and-small-coffee-table-design.jpeg',
  category: 'Living Room',
  isSale: true
},
{
  id: 4,
  name: 'Queen Size Platform Bed',
  price: 899,
  image:
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  category: 'Bedroom'
},
{
  id: 5,
  name: 'Ergonomic Office Chair',
  price: 299,
  salePrice: 249,
  image:
  'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  category: 'Office',
  isSale: true
},
{
  id: 6,
  name: 'Modern Bookshelf',
  price: 599,
  image:
  'https://urbanmood.sg/cdn/shop/files/MALMA2.jpg?v=1698700156',
  category: 'Living Room',
  isNew: true
},
{
  id: 7,
  name: 'Velvet Accent Chair',
  price: 399,
  image:
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80',
  category: 'Living Room'
},
{
  id: 8,
  name: 'Industrial Bar Stools (Set of 2)',
  price: 249,
  image:
  'https://images.unsplash.com/photo-1551516594-56cb78394645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1216&q=80',
  category: 'Dining'
}];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Featured Products
            </h2>
            <p className="text-gray-600">
              Discover our most popular furniture pieces
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden sm:inline-block px-6 py-2 border border-amber-600 text-amber-600 font-medium rounded-md hover:bg-amber-600 hover:text-white transition duration-300">

            View All Products
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) =>
          <ProductCard key={product.id} product={product} />
          )}
        </div>
        <div className="mt-12 text-center sm:hidden">
          <Link
            href="/shop"
            className="inline-block px-8 py-3 border border-amber-600 text-amber-600 font-medium rounded-md hover:bg-amber-600 hover:text-white transition duration-300">

            View All Products
          </Link>
        </div>
      </div>
    </section>);

}