"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FilterIcon, SlidersHorizontalIcon, ArrowDownIcon } from "lucide-react";
import { ProductCard } from "@/features/product/components/ProductCard";
import { allProducts } from '@/features/product/data/product.mock';
import { categoryMetadata } from '@/features/category/category.mock';


export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showSaleOnly, setShowSaleOnly] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const categoryInfo = slug ? categoryMetadata[slug] : undefined;

  if (!categoryInfo) {
    return (
      <main className="w-full bg-white py-20 text-center min-h-screen flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Category Not Found
        </h1>
        
        <Link href="/categories" className="text-amber-600 hover:underline">
          Back to Categories
        </Link>
      </main>
    );
  }


  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = product.category === categoryInfo.name;
    const matchesSale = showSaleOnly ? product.isSale : true;
    const matchesPriceRange =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSale && matchesPriceRange;
  });

  // Sort products
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
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 w-full bg-gray-900">
        <img
          src={categoryInfo.image}
          alt={categoryInfo.name}
          className="w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {categoryInfo.name}
          </h1>
          <p className="text-gray-200 max-w-xl text-lg mb-6">
            {categoryInfo.description}
          </p>

          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-300">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/categories" className="hover:text-white">Categories</Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">{categoryInfo.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center font-medium text-gray-700 hover:bg-gray-50"
          >
            <FilterIcon size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 lg:pr-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-800 text-lg flex items-center">
                  <SlidersHorizontalIcon size={20} className="mr-2" />
                  Filters
                </h3>
              </div>

              {/* Price Range */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h4 className="font-medium text-gray-800 mb-4">Price Range</h4>
                <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}+</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
              </div>

              {/* Sale Filter */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-center">
                  <input
                    id="sale-only"
                    type="checkbox"
                    checked={showSaleOnly}
                    onChange={() => setShowSaleOnly(!showSaleOnly)}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                  />
                  <label htmlFor="sale-only" className="ml-3 text-gray-700 font-medium cursor-pointer">
                    On Sale Only
                  </label>
                </div>
              </div>

              <Link
                href="/categories"
                className="text-amber-600 font-medium hover:text-amber-700 hover:underline text-sm"
              >
                ← Back to All Categories
              </Link>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4 mt-8 lg:mt-0">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-gray-100">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing{' '}
                <span className="font-bold text-gray-900">
                  {sortedProducts.length}
                </span>{' '}
                products in {categoryInfo.name}
              </p>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none border border-gray-300 rounded-md py-2 pl-4 pr-10 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 cursor-pointer text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest Arrivals</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <ArrowDownIcon size={14} />
                </div>
              </div>
            </div>

            {/* Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <p className="text-lg text-gray-600 mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setPriceRange([0, 2000]);
                    setShowSaleOnly(false);
                  }}
                  className="text-amber-600 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}