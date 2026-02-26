"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation"; 

import { useCart } from "@/features/cart/cart.context";
import { ProductCard } from "@/features/product/components/ProductCard";
import { productsData } from "@/features/product/data/product-data.mock";
import { ProductProps } from "@/features/product/product.types";
import { StarIcon, ShoppingCartIcon, HeartIcon, TruckIcon, ShieldIcon, RefreshCwIcon } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;

 const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);


  const product = productsData.find((p) => p.slug === slug);

 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };


  const handleAddToCart = () => {
    if (product) {
      const productForCart: ProductProps = {
        id: product.id,
        slug: product.slug, 
        name: product.name,
        price: product.price,
        image: product.image, 
        category: product.category,
        isNew: product.isNew,
        isSale: product.isSale,
        salePrice: product.salePrice
      };

      addToCart(productForCart as any, quantity);
    }
  };


  const relatedProducts = product ?
    productsData.
    filter((p) => p.category === product.category && p.id !== product.id).
    slice(0, 4) :
    [];

  if (!product) {
    return (
      <main className="w-full bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>

          <Link
            href="/shop"
            className="inline-block px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition duration-300">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                
                <Link href="/" className="text-gray-500 hover:text-amber-600">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/shop" className="text-gray-500 hover:text-amber-600">
                  Shop
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link
                  href={`/categories/${product.category.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-500 hover:text-amber-600">
                  {product.category}
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-700 font-medium">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <div className="lg:w-1/2">
              <div className="mb-4">
                <img
                  src={product.images ? product.images[activeImage] : product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover rounded-lg" />
              </div>
              
             
              {product.images && product.images.length > 0 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((imgUrl: string, index: number) =>
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`border rounded-md overflow-hidden ${activeImage === index ? 'border-amber-600' : 'border-gray-200'}`}>
                      <img
                      src={imgUrl}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-24 object-cover" />
                    </button>
                  )}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="lg:w-1/2">
              <div className="mb-6">
                {product.isNew &&
                <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    New
                  </span>
                }
                {product.isSale &&
                <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 ml-2">
                    Sale
                  </span>
                }
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h1>
                
                {product.reviews && (
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) =>
                      <StarIcon
                        key={i}
                        size={18}
                        className={
                        i < Math.floor(product.reviews.rating) ?
                        'text-amber-500 fill-amber-500' :
                        'text-gray-300 fill-gray-300'
                        } />
                      )}
                    </div>
                    <span className="text-gray-600 text-sm">
                      {product.reviews.rating} ({product.reviews.count} reviews)
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  {product.isSale && product.salePrice ?
                  <div className="flex items-center">
                      <span className="text-2xl font-bold text-amber-600 mr-3">
                        ${product.salePrice.toFixed(2)}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="ml-3 bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">
                        Save ${(product.price - product.salePrice).toFixed(2)}
                      </span>
                    </div> :

                  <span className="text-2xl font-bold text-gray-800">
                      ${product.price?.toFixed(2) || 0}
                    </span>
                  }
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                {/* Stock status */}
                <div className="mb-6">
                  <span className="text-sm font-medium">
                    Availability:
                    <span
                      className={`ml-2 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {product.stock > 0 ?
                      `In Stock (${product.stock} available)` :
                      'Out of Stock'}
                    </span>
                  </span>
                </div>
                
                {/* Quantity and Add to Cart */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => handleQuantityChange(quantity > 1 ? quantity - 1 : 1)}
                      className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-50 rounded-l-md">
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      max={product.stock || 1}
                      value={quantity}
                      onChange={(e) =>
                      handleQuantityChange(parseInt(e.target.value) || 1)
                      }
                      className="w-16 h-10 border-t border-b border-gray-300 text-center" />

                    <button
                      onClick={() => handleQuantityChange(product.stock > quantity ? quantity + 1 : quantity)}
                      className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-50 rounded-r-md">
                      +
                    </button>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddToCart}
                      disabled={product.stock <= 0}
                      className={`flex items-center justify-center px-8 py-3 rounded-md font-medium text-white ${product.stock > 0 ? 'bg-amber-600 hover:bg-amber-700' : 'bg-gray-400 cursor-not-allowed'} transition duration-300 w-3/4`}>
                      <ShoppingCartIcon size={18} className="mr-2" />
                      Add to Cart
                    </button>
                    <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-md hover:bg-gray-50">
                      <HeartIcon size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>
                
                {/* Shipping and Returns */}
                <div className="border-t border-gray-200 pt-6 space-y-4">
                  <div className="flex items-center">
                    <TruckIcon size={20} className="text-amber-600 mr-3" />
                    <span className="text-gray-700">
                      Free shipping on orders over $50
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ShieldIcon size={20} className="text-amber-600 mr-3" />
                    <span className="text-gray-700">
                      2-year warranty on all products
                    </span>
                  </div>
                  <div className="flex items-center">
                    <RefreshCwIcon size={20} className="text-amber-600 mr-3" />
                    <span className="text-gray-700">30-day return policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Product Details
            </h2>
            
            {/* Features */}
            {product.features && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Features
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {product.features.map((feature: string, index: number) =>
                  <li key={index}>{feature}</li>
                  )}
                </ul>
              </div>
            )}
            
            {/* Specifications */}
            {product.specifications && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Specifications
                </h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {Object.entries(product.specifications).map(
                        ([key, value], index) =>
                        <tr
                          key={index}
                          className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 text-sm font-medium  text-gray-800 w-1/3">
                              {key}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {value as string}
                            </td>
                          </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 &&
      <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) =>
            <ProductCard
              key={relatedProduct.id}
              product={{
                id: relatedProduct.id,
                slug: relatedProduct.slug, 
                name: relatedProduct.name,
                price: relatedProduct.price,
                image: relatedProduct.image,
                category: relatedProduct.category,
                isNew: relatedProduct.isNew,
                isSale: relatedProduct.isSale,
                salePrice: relatedProduct.salePrice
              } as any} />
            )}
            </div>
          </div>
        </section>
      }
    </main>
  );
}