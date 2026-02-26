"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, MenuIcon, SearchIcon, XIcon } from 'lucide-react';
import { useCart } from '@/features/cart/cart.context';


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  return (
    <header className="bg-white w-full sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-gray-800">
          Alice<span className="text-amber-600">Furniture Land</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-amber-600 font-medium">

            Home
          </Link>
          <Link
            href="/shop"
            className="text-gray-700 hover:text-amber-600 font-medium">

            Shop
          </Link>
          <Link
            href="/categories"
            className="text-gray-700 hover:text-amber-600 font-medium">

            Categories
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-amber-600 font-medium">

            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-amber-600 font-medium">

            Contact
          </Link>
        </nav>
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-amber-600">
            <SearchIcon size={20} />
          </button>
          <Link
            href="/cart"
            className="text-gray-700 hover:text-amber-600 relative">

            <ShoppingCartIcon size={20} />
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          </Link>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>

            <MenuIcon size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen &&
      <div className="md:hidden fixed inset-0 bg-white z-50 p-5">
          <div className="flex justify-end">
            <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700">

              <XIcon size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
            href="/"
            className="text-xl text-gray-700 hover:text-amber-600 font-medium">

              Home
            </Link>
            <Link
            href="/shop"
            className="text-xl text-gray-700 hover:text-amber-600 font-medium">

              Shop
            </Link>
            <Link
            href="/categories"
            className="text-xl text-gray-700 hover:text-amber-600 font-medium">

              Categories
            </Link>
            <Link
            href="/about"
            className="text-xl text-gray-700 hover:text-amber-600 font-medium">

              About
            </Link>
            <Link
            href="/contact"
            className="text-xl text-gray-700 hover:text-amber-600 font-medium">

              Contact
            </Link>
          </nav>
        </div>
      }
    </header>);

}