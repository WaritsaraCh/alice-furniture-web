"use client";

import React from 'react';
import Link from 'next/link';
const categories = [
{
  id: 1,
  name: 'Living Room',
  image:
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80',
  count: '124 products'
},
{
  id: 2,
  name: 'Bedroom',
  image:
  'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  count: '97 products'
},
{
  id: 3,
  name: 'Dining',
  image:
  'https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80',
  count: '86 products'
},
{
  id: 4,
  name: 'Office',
  image:
  'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  count: '78 products'
}];

export function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Browse By Category
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Find the perfect furniture for every room in your home with our
            extensive collection
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) =>
          <Link
            href={`/category/${category.id}`}
            key={category.id}
            className="group">

              <div className="relative overflow-hidden rounded-lg h-64">
                <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    {category.name}
                  </h3>
                  <p className="text-gray-200 text-sm">{category.count}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

}