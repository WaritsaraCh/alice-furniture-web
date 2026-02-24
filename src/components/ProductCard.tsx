"use client";
import React from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, HeartIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
};
export function ProductCard({ product }: {product: ProductProps;}) {
  const { addToCart } = useCart();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-3">
        <Link href={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />

        </Link>
        {/* Product badges */}
        {product.isNew &&
        <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
            New
          </span>
        }
        {product.isSale &&
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Sale
          </span>
        }
        {/* Quick actions */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-white bg-opacity-95 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-md w-[80%]">

              <ShoppingCartIcon size={16} className="mr-2" />
              Add to Cart
            </button>
            <button className="flex items-center justify-center border border-gray-300 hover:bg-gray-100 p-2 rounded-md ml-2">
              <HeartIcon size={16} />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-800 hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500">{product.category}</p>
        <div className="mt-2 flex items-center">
          {product.isSale && product.salePrice ?
          <>
              <span className="font-bold text-amber-600">
                ${product.salePrice}
              </span>
              <span className="ml-2 text-gray-400 line-through">
                ${product.price}
              </span>
            </> :

          <span className="font-bold text-gray-800">${product.price}</span>
          }
        </div>
      </div>
    </div>);

}