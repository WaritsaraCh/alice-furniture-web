"use client";

import React from 'react';
import Link from 'next/link';
const categories = [
{
  id: 1,
  name: 'Living Room',
  description:
  'Create a welcoming space with our stylish sofas, coffee tables, and accent pieces.',
  image:
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80',
  count: '124 products',
  featured: [
  'Sofas',
  'Coffee Tables',
  'TV Stands',
  'Bookshelves',
  'Accent Chairs']

},
{
  id: 2,
  name: 'Bedroom',
  description:
  'Transform your bedroom into a peaceful retreat with our comfortable beds and stylish storage solutions.',
  image:
  'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  count: '97 products',
  featured: ['Beds', 'Dressers', 'Nightstands', 'Wardrobes', 'Mattresses']
},
{
  id: 3,
  name: 'Dining',
  description:
  'Gather around beautiful dining tables and chairs designed for comfort and conversation.',
  image:
  'https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80',
  count: '86 products',
  featured: [
  'Dining Tables',
  'Dining Chairs',
  'Bar Stools',
  'Buffets',
  'China Cabinets']

},
{
  id: 4,
  name: 'Office',
  description:
  'Create a productive workspace with our ergonomic desks, chairs, and storage solutions.',
  image:
  'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  count: '78 products',
  featured: [
  'Desks',
  'Office Chairs',
  'Bookcases',
  'Filing Cabinets',
  'Desk Accessories']

},
{
  id: 5,
  name: 'Outdoor',
  description:
  'Extend your living space outdoors with weather-resistant furniture built for comfort and durability.',
  image:
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  count: '65 products',
  featured: [
  'Patio Sets',
  'Outdoor Sofas',
  'Dining Sets',
  'Lounge Chairs',
  'Umbrellas']

},
{
  id: 6,
  name: 'Decor',
  description:
  'Add the finishing touches to your home with our carefully curated decor collection.',
  image:
  'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  count: '112 products',
  featured: ['Rugs', 'Lighting', 'Wall Art', 'Mirrors', 'Throw Pillows']
}];

export default function Categories() {
  return (
    <main className="w-full bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Browse By Category
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover furniture for every room and style, all organized by
            category to make your shopping experience seamless
          </p>
        </div>
      </div>
      {/* Categories List */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-20">
          {categories.map((category) =>
          <div
            key={category.id}
            className={`flex flex-col ${category.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12`}>

              {/* Image */}
              <div className="md:w-1/2">
                <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                  <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover" />

                  <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                    {category.count}
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-6">{category.description}</p>
                {/* Featured subcategories */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-700 mb-3">
                    Popular in {category.name}:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.featured.map((item) =>
                  <span
                    key={item}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">

                        {item}
                      </span>
                  )}
                  </div>
                </div>
                <Link
                href={`/category/${category.id}`}
                className="inline-block self-start px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition duration-300">

                  Shop {category.name}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>);

}