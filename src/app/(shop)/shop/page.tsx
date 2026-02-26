"use client";


import React, { useState, useEffect } from 'react';
import { SlidersHorizontalIcon, ArrowDownIcon, FilterIcon } from 'lucide-react';
import { ProductCard } from '@/features/product/components/ProductCard';
import { allProducts } from '@/features/product/data/product.mock';


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
  

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; 

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortBy, priceRange, showSaleOnly]);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
    selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSale = showSaleOnly ? product.isSale : true;
    const matchesPriceRange =
    product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSale && matchesPriceRange;
  });

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


  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 cursor-pointer" />

                    <label
                    htmlFor={`category-${category}`}
                    className="ml-3 text-gray-700 cursor-pointer">

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
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600" />

            </div>
            <div>
              <div className="flex items-center">
                <input
                  id="sale-only"
                  type="checkbox"
                  checked={showSaleOnly}
                  onChange={() => setShowSaleOnly(!showSaleOnly)}
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 rounded border-gray-300 cursor-pointer" />

                <label htmlFor="sale-only" className="ml-3 text-gray-700 cursor-pointer">
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
                {/* 🌟 แสดงจำนวนตามการตัด Slice */}
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedProducts.length)} of {sortedProducts.length} products
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none border border-gray-300 rounded-md py-2 pl-3 pr-10 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 cursor-pointer">

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
              {displayProducts.map((product) =>
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
            
            {/* 🌟 4. Pagination (คำนวณปุ่มอัตโนมัติ) */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="inline-flex rounded-md shadow">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-md"
                  >
                    Previous
                  </button>
                  
                  {/* สร้างปุ่มตัวเลขหน้าอัตโนมัติตามจำนวนหน้าทั้งหมด */}
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`py-2 px-4 border border-gray-300 text-sm font-medium ${
                          currentPage === pageNumber
                            ? 'bg-amber-600 text-white border-amber-600 z-10'
                            : 'bg-white text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-r-md"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </main>);
}