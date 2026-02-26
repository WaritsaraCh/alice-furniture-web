"use client";

import React from "react";
import Link from "next/link";
import { categories } from "@/features/product/data/product.mock";

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
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex flex-col ${category.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />

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
                    {category.featured.map((item) => (
                      <span
                        key={item}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/categories/${category.slug}`}
                  className="inline-block self-start px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition duration-300"
                >
                  Shop {category.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
