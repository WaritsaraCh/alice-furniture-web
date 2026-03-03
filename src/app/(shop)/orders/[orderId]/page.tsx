"use client";

import React, { useState, Fragment, useEffect } from 'react'
// 🌟 1. เปลี่ยนมาใช้ Link และ useParams ของ Next.js
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { CheckCircleIcon, PackageIcon, TruckIcon, HomeIcon } from 'lucide-react'

function getEstimatedDelivery(days: number = 7): string {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function generateOrderNumber(): string {
  return 'AFL-' + Math.floor(100000 + Math.random() * 900000).toString()
}

export default function OrderConfirmation() {
  const params = useParams()
  const orderId = params.orderId as string

  const [orderData, setOrderData] = useState<any>(null)

  useEffect(() => {
    setOrderData({
      shipping: {
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice@example.com',
        address1: '123 Main Street',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90210',
        country: 'United States'
      },
      delivery: {
        id: 'standard',
        name: 'Standard Shipping',
        price: 0,
        days: '5-7 business days'
      },
      payment: {
        cardNumber: '1234567890123456'
      },
      cart: [
        {
          product: {
            id: 1,
            name: 'Modern Sofa',
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1170&q=80',
            price: 1500,
            category: 'Living Room'
          },
          quantity: 1
        }
      ],
      subtotal: 1500,
      tax: 150,
      total: 1650
    })
  }, [])

  const [orderNumber] = useState(orderId || generateOrderNumber())
  
  const estimatedDelivery = getEstimatedDelivery(
    orderData?.delivery?.id === 'overnight'
      ? 1
      : orderData?.delivery?.id === 'express'
        ? 3
        : 7,
  )

  return (
    <main className="w-full bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircleIcon size={48} className="text-green-500" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Order Confirmed!
            </h1>
            <p className="text-gray-600 text-lg">
              Thank you for your purchase. Your order has been placed
              successfully.
            </p>
          </div>

          {/* Order Info Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Order Number</p>
                <p className="text-2xl font-bold text-amber-600">
                  {orderNumber}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <TruckIcon size={16} className="text-amber-600" />
                  <span>{estimatedDelivery}</span>
                </div>
              </div>
            </div>

            {/* Progress Track */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                {['Order Placed', 'Processing', 'Shipped', 'Delivered'].map(
                  (step, i) => (
                    <Fragment key={step}>
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-400'}`}
                        >
                          {i === 0 ? <CheckCircleIcon size={16} /> : i + 1}
                        </div>
                        <span
                          className={`text-xs mt-1 text-center hidden sm:block ${i === 0 ? 'text-amber-600 font-medium' : 'text-gray-400'}`}
                        >
                          {step}
                        </span>
                      </div>
                      {i < 3 && (
                        <div
                          className={`flex-1 h-0.5 mx-1 ${i === 0 ? 'bg-amber-200' : 'bg-gray-200'}`}
                        />
                      )}
                    </Fragment>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Order Items */}
          {orderData?.cart && orderData.cart.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                <PackageIcon size={20} className="text-amber-600" />
                Items Ordered
              </h2>
              <div className="space-y-4">
                {orderData.cart.map((item: any) => {
                  const price = item.product.salePrice || item.product.price
                  return (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-800">
                          {item.product.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.product.category} · Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold text-gray-800">
                        ${(price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Price Breakdown */}
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>${orderData.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping ({orderData.delivery.name})</span>
                  <span>
                    {orderData.delivery.price === 0
                      ? 'Free'
                      : `$${orderData.delivery.price.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax (10%)</span>
                  <span>${orderData.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-base border-t border-gray-100 pt-2">
                  <span>Total</span>
                  <span>${orderData.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Shipping Address */}
          {orderData?.shipping && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
                <HomeIcon size={20} className="text-amber-600" />
                Shipping Address
              </h2>
              <div className="text-gray-600">
                <p className="font-medium text-gray-800">
                  {orderData.shipping.firstName} {orderData.shipping.lastName}
                </p>
                <p>{orderData.shipping.address1}</p>
                {orderData.shipping.address2 && (
                  <p>{orderData.shipping.address2}</p>
                )}
                <p>
                  {orderData.shipping.city}, {orderData.shipping.state}{' '}
                  {orderData.shipping.zip}
                </p>
                <p>{orderData.shipping.country}</p>
              </div>
            </div>
          )}

          {/* Email notice */}
          {orderData?.shipping?.email && (
            <p className="text-center text-sm text-gray-500 mb-6">
              A confirmation email has been sent to{' '}
              <span className="font-medium text-gray-700">
                {orderData.shipping.email}
              </span>
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
       
            <Link
              href="/shop"
              className="flex-1 text-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="flex-1 text-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}