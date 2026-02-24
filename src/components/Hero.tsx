"use client";
import React from 'react';
import Link from 'next/link';
export function Hero() {
  return (
    <section className="relative bg-gray-50">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Modern Furniture for Modern Living
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Transform your space with our curated collection of contemporary and
            classic furniture pieces.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/shop"
              className="px-8 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition duration-300">

              Shop Now
            </Link>
            <Link
              href="/collections"
              className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition duration-300">

              View Collections
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Modern living room with stylish furniture"
            className="rounded-lg shadow-xl object-cover" />

          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-amber-600 font-bold">New Collection</p>
            <p className="text-gray-800 font-medium">Up to 30% Off</p>
          </div>
        </div>
      </div>
    </section>);

}