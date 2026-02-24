"use client";

import React from 'react';
import Link from 'next/link';
import { TrashIcon, PlusIcon, MinusIcon, ShoppingBagIcon } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';
export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } =
  useCart();
  if (cart.length === 0) {
    return (
      <main className="w-full bg-white">
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Cart</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Review and manage your selected items
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <ShoppingBagIcon size={64} className="mx-auto text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link
              href="/shop"
              className="inline-block px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition duration-300">

              Continue Shopping
            </Link>
          </div>
        </div>
      </main>);

  }
  return (
    <main className="w-full bg-white">
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Cart</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Review and manage your selected items
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                      Total
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Remove</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cart.map((item) => {
                    const price = item.product.salePrice || item.product.price;
                    return (
                      <tr key={item.product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="h-full w-full object-cover object-center" />

                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {item.product.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {item.product.category}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ${price.toFixed(2)}
                          </div>
                          {item.product.salePrice &&
                          <div className="text-xs text-gray-400 line-through">
                              ${item.product.price.toFixed(2)}
                            </div>
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center border rounded-md">
                            <button
                              onClick={() =>
                              updateQuantity(
                                item.product.id,
                                Math.max(1, item.quantity - 1)
                              )
                              }
                              className="px-2 py-1 text-gray-600 hover:text-amber-600">

                              <MinusIcon size={16} />
                            </button>
                            <span className="px-2 py-1 text-gray-800 min-w-[30px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                              }
                              className="px-2 py-1 text-gray-600 hover:text-amber-600">

                              <PlusIcon size={16} />
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${(price * item.quantity).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 hover:text-red-700">

                            <TrashIcon size={18} />
                          </button>
                        </td>
                      </tr>);

                  })}
                </tbody>
              </table>
              {/* Cart Actions */}
              <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 font-medium">

                  Clear Cart
                </button>
                <Link
                  href="/shop"
                  className="text-amber-600 hover:text-amber-800 font-medium">

                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-4">
                  <div className="text-gray-600">Subtotal</div>
                  <div className="text-gray-800 font-medium">
                    ${getCartTotal().toFixed(2)}
                  </div>
                </div>
                <div className="flex justify-between border-b pb-4">
                  <div className="text-gray-600">Shipping</div>
                  <div className="text-gray-800 font-medium">Free</div>
                </div>
                <div className="flex justify-between border-b pb-4">
                  <div className="text-gray-600">Tax</div>
                  <div className="text-gray-800 font-medium">
                    ${(getCartTotal() * 0.1).toFixed(2)}
                  </div>
                </div>
                <div className="flex justify-between font-bold">
                  <div className="text-gray-800">Total</div>
                  <div className="text-gray-900">
                    ${(getCartTotal() * 1.1).toFixed(2)}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button className="w-full px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition duration-300">
                  Proceed to Checkout
                </button>
              </div>
              {/* Accepted Payment Methods */}
              <div className="mt-6">
                <div className="text-xs text-gray-500 mb-2">
                  We accept the following payment methods:
                </div>
                <div className="flex space-x-2">
                  {/* Payment method icons */}
                  <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-xs">
                    Visa
                  </div>
                  <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-xs">
                    MC
                  </div>
                  <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-xs">
                    Amex
                  </div>
                  <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-xs">
                    PayPal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>);

}