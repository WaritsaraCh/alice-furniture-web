"use client";

import React, { useState } from 'react';
import { SlidersHorizontalIcon, ArrowDownIcon, FilterIcon } from 'lucide-react';
import { ProductCard, ProductProps } from '@/src/components/ProductCard';

// Sample product data
const allProducts: ProductProps[] = [
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
},
{
  id: 9,
  name: 'Mid-Century Dresser',
  price: 799,
  image:
  'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  category: 'Bedroom'
},
{
  id: 10,
  name: 'Adjustable Standing Desk',
  price: 649,
  salePrice: 549,
  image:
  'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
  category: 'Office',
  isSale: true
},
{
  id: 11,
  name: 'Marble Dining Table',
  price: 1499,
  image:
  'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  category: 'Dining',
  isNew: true
},
{
  id: 12,
  name: 'Reclining Leather Armchair',
  price: 899,
  image:
  'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
  category: 'Living Room'
}];

// Filter and sort options
const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office'];
const sortOptions = [
{
  value: 'featured',
  label: 'Featured'
},
{
  value: 'newest',
  label: 'Newest'
},
{
  value: 'price-low-high',
  label: 'Price: Low to High'
},
{
  value: 'price-high-low',
  label: 'Price: High to Low'
}];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  // Filter products based on selected filters
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
    selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSale = showSaleOnly ? product.isSale : true;
    const matchesPriceRange =
    product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSale && matchesPriceRange;
  });
  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      case 'price-low-high':
        return (a.salePrice || a.price) - (b.salePrice || b.price);
      case 'price-high-low':
        return (b.salePrice || b.price) - (a.salePrice || a.price);
      default:
        return 0;
    }
  });
  return (
    <main className="w-full bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Shop</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our collection of high-quality furniture pieces for every
            room in your home
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center font-medium text-gray-700 hover:bg-gray-50">

            <FilterIcon size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row">
          {/* Filters - Sidebar */}
          <div
            className={`lg:w-1/4 lg:pr-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>

            <div className="border-b border-gray-200 pb-6 mb-6">
              <h3 className="font-medium text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) =>
                <div key={category} className="flex items-center">
                    <input
                    id={`category-${category}`}
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500" />

                    <label
                    htmlFor={`category-${category}`}
                    className="ml-3 text-gray-700">

                      {category}
                    </label>
                  </div>
                )}
              </div>
            </div>
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h3 className="font-medium text-lg mb-4">Price Range</h3>
              <div className="flex items-center justify-between mb-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />

            </div>
            <div>
              <div className="flex items-center">
                <input
                  id="sale-only"
                  type="checkbox"
                  checked={showSaleOnly}
                  onChange={() => setShowSaleOnly(!showSaleOnly)}
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500" />

                <label htmlFor="sale-only" className="ml-3 text-gray-700">
                  Sale Items Only
                </label>
              </div>
            </div>
          </div>
          {/* Products Grid */}
          <div className="lg:w-3/4 mt-8 lg:mt-0">
            {/* Sort and Result Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing {sortedProducts.length} products
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none border border-gray-300 rounded-md py-2 pl-3 pr-10 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500">

                  {sortOptions.map((option) =>
                  <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  )}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ArrowDownIcon size={16} />
                </div>
              </div>
            </div>
            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) =>
              <ProductCard key={product.id} product={product} />
              )}
            </div>
            {/* Empty State */}
            {sortedProducts.length === 0 &&
            <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  No products match your filters.
                </p>
                <button
                onClick={() => {
                  setSelectedCategory('All');
                  setPriceRange([0, 2000]);
                  setShowSaleOnly(false);
                }}
                className="mt-4 text-amber-600 font-medium hover:text-amber-700">

                  Reset Filters
                </button>
              </div>
            }
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">

                  Previous
                </a>
                <a
                  href="#"
                  className="py-2 px-4 border border-gray-300 bg-amber-600 text-sm font-medium text-white">

                  1
                </a>
                <a
                  href="#"
                  className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">

                  2
                </a>
                <a
                  href="#"
                  className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">

                  3
                </a>
                <a
                  href="#"
                  className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">

                  Next
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </main>);

}