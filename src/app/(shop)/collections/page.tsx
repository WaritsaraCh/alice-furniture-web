"use client";

import React, { memo } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { collections, shopByRoom } from '@/features/product/data/product.mock';

export default function Collection() {
  return (
    <main className="w-full bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Collections
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Curated selections of our finest furniture, designed to inspire your
            home transformation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Collection (First Item) */}
        <div className="mb-12">
          <Link
            href={collections[0].link}
            className="group block relative h-[500px] w-full overflow-hidden rounded-xl">

            <img
              src={collections[0].image}
              alt={collections[0].name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-xl">
                {collections[0].badge &&
                <span className="inline-block bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {collections[0].badge}
                  </span>
                }
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {collections[0].name}
                </h2>
                <p className="text-gray-200 text-lg mb-6">
                  {collections[0].description}
                </p>
                <span className="inline-flex items-center text-white font-medium border-b-2 border-amber-600 pb-1 group-hover:text-amber-400 transition-colors">
                  Shop Collection <ArrowRightIcon size={18} className="ml-2" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Secondary Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {collections.slice(1).map((collection) =>
          <Link
            key={collection.id}
            href={collection.link}
            className="group relative h-80 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">

              <img
              src={collection.image}
              alt={collection.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col justify-center items-center text-center p-6">
                {collection.badge &&
              <span className="absolute top-4 right-4 bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded">
                    {collection.badge}
                  </span>
              }
                <h3 className="text-2xl font-bold text-white mb-2">
                  {collection.name}
                </h3>
                <p className="text-gray-200 text-sm mb-4 max-w-xs">
                  {collection.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-block px-6 py-2 border border-white text-white text-sm font-medium rounded hover:bg-white hover:text-gray-900 transition-colors">
                    View {collection.count}
                  </span>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Shop by Room Section */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Shop by Room
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {shopByRoom.map((room) =>
            <Link
              key={room.id}
              href={`/categories/${room.slug}`}
              className="group text-center">

                <div className="relative aspect-square overflow-hidden rounded-full mb-3 border-2 border-transparent group-hover:border-amber-600 transition-colors">
                  <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                </div>
                <h3 className="font-medium text-gray-800 group-hover:text-amber-600 transition-colors">
                  {room.name}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>);

}