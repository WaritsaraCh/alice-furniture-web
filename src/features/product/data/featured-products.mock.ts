import { ProductProps } from "../product.types";

export const featuredProducts: ProductProps[] = [
  {
    id: 1,
    slug: 'modern-leather-sofa',
    name: 'Modern Leather Sofa',
    price: 1299,
    image:
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25',
    category: 'Living Room',
    isNew: true,
  },
  {
    id: 2,
    slug: 'scandinavian-dining-table',
    name: 'Scandinavian Dining Table',
    price: 849,
    image:
      'https://exclusivia.co/cdn/shop/products/avery-scandinavian-solid-wood-dining-table-510373.jpg',
    category: 'Dining',
  },
  {
    id: 3,
    slug: 'minimalist-coffee-table',
    name: 'Minimalist Coffee Table',
    price: 349,
    salePrice: 299,
    image:
      'https://www.decorpot.com/images/306393876mark-your-wishlist-done-with-this-trendy-and-small-coffee-table-design.jpeg',
    category: 'Living Room',
    isSale: true,
  },
]