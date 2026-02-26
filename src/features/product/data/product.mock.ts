import { Category, ProductProps } from "../product.types";

export const allProducts: ProductProps[] = [
  {
    id: 1,
    slug: "modern-leather-sofa",
    name: "Modern Leather Sofa",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Living Room",
    isNew: true,
  },
  {
    id: 2,
    slug: "scandinavian-dining-table",
    name: "Scandinavian Dining Table",
    price: 849,
    image:
      "https://exclusivia.co/cdn/shop/products/avery-scandinavian-solid-wood-dining-table-510373.jpg?v=1710923697&width=1000",
    category: "Dining",
  },

  {
    id: 3,
    slug: "minimalist-coffee-table",
    name: "Minimalist Coffee Table",
    price: 349,
    salePrice: 299,
    image:
      "https://www.decorpot.com/images/306393876mark-your-wishlist-done-with-this-trendy-and-small-coffee-table-design.jpeg",
    category: "Living Room",
    isSale: true,
  },
  {
    id: 4,
    slug: "queen-size-platform-bed",
    name: "Queen Size Platform Bed",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Bedroom",
    isSale: true,
  },
  {
    id: 5,
    slug: "ergonomic-office-chair",
    name: "Ergonomic Office Chair",
    price: 299,
    salePrice: 249,
    image:
      "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "Office",
    isSale: true,
  },
  {
    id: 6,
    slug: "modern-bookshelf",
    name: "Modern Bookshelf",
    price: 599,
    image: "https://urbanmood.sg/cdn/shop/files/MALMA2.jpg?v=1698700156",
    category: "Living Room",
    isNew: true,
  },
  {
    id: 7,
    slug: "velvet-accent-chair",
    name: "Velvet Accent Chair",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80",
    category: "Living Room",
  },

  {
    id: 8,
    slug: "industrial-bar-stools",
    name: "Industrial Bar Stools (Set of 2)",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1551516594-56cb78394645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1216&q=80",
    category: "Dining",
  },
  {
    id: 9,
    slug: "mid-century-dresser",
    name: "Mid-Century Dresser",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Bedroom",
  },
  {
    id: 10,
    slug: "adjustable-standing-desk",
    name: "Adjustable Standing Desk",
    price: 649,
    salePrice: 549,
    image:
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "Office",
    isSale: true,
  },
  {
    id: 11,
    slug: "marble-dining-table",
    name: "Marble Dining Table",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Dining",
    isNew: true,
  },
  {
    id: 12,
    slug: "reclining-leather-armchair",
    name: "Reclining Leather Armchair",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    category: "Living Room",
    isNew: true,
  },
  {
    id: 13,
    slug: "mid-century-tv-stand",
    name: "Mid-Century TV Stand",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&w=1170&q=80",
    category: "Living Room",
  },
  {
    id: 14,
    slug: "modern-dining-chair",
    name: "Modern Dining Chair",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1170&q=80",
    category: "Dining",
    isSale: true,
    salePrice: 149,
  },
  {
    id: 15,
    slug: "oak-nightstand",
    name: "Oak Nightstand",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1170&q=80",
    category: "Bedroom",
  },
  {
    id: 16,
    slug: "luxury-mettress",
    name: "Luxury Mattress",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1170&q=80",
    category: "Bedroom",
    isNew: true,
  },
  {
    id: 17,
    slug: "standing-desk",
    name: "Standing Desk",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=1170&q=80",
    category: "Office",
  },
  {
    id: 18,
    slug: "dask-lamp",
    name: "Desk Lamp",
    price: 89,
    image:
      "https://www.yfactory.co.th/8400-large_default/table-lamp.jpg",
    category: "Office",
  },
  // Outdoor
  {
    id: 19,
    slug: "teak-patio-set",
    name: "Teak Patio Set",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1170&q=80",
    category: "Outdoor",
    isNew: true,
  },
  {
    id: 20,
    slug: "outdoor-lounge-chair",
    name: "Outdoor Lounge Chair",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1170&q=80",
    category: "Outdoor",
  },
  // Decor
  {
    id: 21,
    slug: "abstract-wall-art",
    name: "Abstract Wall Art",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1170&q=80",
    category: "Decor",
  },
  {
    id: 22,
    slug: "ceramic-vase-ste",
    name: "Ceramic Vase Set",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1170&q=80",
    category: "Decor",
  },
  {
    id: 23,
    slug: "wool-ring",
    name: "Wool Rug",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&w=1170&q=80",
    category: "Decor",
    isSale: true,
    salePrice: 249,
  },
];

export const categories: Category[] = [
  {
    id: 1,
    slug: 'living-room',
    name: "Living Room",
    description:
      "Create a welcoming space with our stylish sofas, coffee tables, and accent pieces.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80",
    count: "124 products",
    featured: [
      "Sofas",
      "Coffee Tables",
      "TV Stands",
      "Bookshelves",
      "Accent Chairs",
    ],
  },
  {
    id: 2,
    slug: 'bedroom',
    name: "Bedroom",
    description:
      "Transform your bedroom into a peaceful retreat with our comfortable beds and stylish storage solutions.",
    image:
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    count: "97 products",
    featured: ["Beds", "Dressers", "Nightstands", "Wardrobes", "Mattresses"],
  },
  {
    id: 3,
    slug: 'dining',
    name: "Dining",
    description:
      "Gather around beautiful dining tables and chairs designed for comfort and conversation.",
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80",
    count: "86 products",
    featured: [
      "Dining Tables",
      "Dining Chairs",
      "Bar Stools",
      "Buffets",
      "China Cabinets",
    ],
  },
  {
    id: 4,
    slug: 'office',
    name: "Office",
    description:
      "Create a productive workspace with our ergonomic desks, chairs, and storage solutions.",
    image:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    count: "78 products",
    featured: [
      "Desks",
      "Office Chairs",
      "Bookcases",
      "Filing Cabinets",
      "Desk Accessories",
    ],
  },
  {
    id: 5,
    slug: 'outdoor',
    name: "Outdoor",
    description:
      "Extend your living space outdoors with weather-resistant furniture built for comfort and durability.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    count: "65 products",
    featured: [
      "Patio Sets",
      "Outdoor Sofas",
      "Dining Sets",
      "Lounge Chairs",
      "Umbrellas",
    ],
  },
  {
    id: 6,
    slug: 'decor',
    name: "Decor",
    description:
      "Add the finishing touches to your home with our carefully curated decor collection.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    count: "112 products",
    featured: ["Rugs", "Lighting", "Wall Art", "Mirrors", "Throw Pillows"],
  },
];

export const collections = [
  {
    id: 1,
    name: 'New Arrivals',
    description: 'The latest additions to our catalog',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1170&q=80',
    badge: 'NEW',
    link: '/shop?filter=new',
    count: '12 Items'
  },
  {
    id: 2,
    name: 'On Sale',
    description: 'Premium furniture at unbeatable prices',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1170&q=80',
    badge: 'SALE',
    link: '/shop?filter=sale',
    count: '24 Items'
  },
  {
    id: 3,
    name: 'Scandinavian Style',
    description: 'Clean lines, natural materials, timeless design',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1170&q=80',
    link: '/categories/living-room', 
    count: '18 Items'
  },
  {
    id: 4,
    name: 'Home Office Setup',
    description: 'Everything you need for a productive workspace',
    image: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=1170&q=80',
    link: '/categories/office', 
    count: '15 Items'
  },
  {
    id: 5,
    name: 'Bedroom Essentials',
    description: 'Create your perfect sleep sanctuary',
    image: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?auto=format&fit=crop&w=1170&q=80',
    link: '/categories/bedroom', 
    count: '22 Items'
  },
  {
    id: 6,
    name: 'Dining & Entertaining',
    description: 'Set the table for memorable moments',
    image: 'https://expatliving.sg/wp-content/uploads/2026/01/Dining-set-.jpg',
    link: '/categories/dining',
    count: '16 Items'
  }
];

export const shopByRoom = [
  {
    id: 1,
    name: 'Living Room',
    slug: 'living-room', 
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Bedroom',
    slug: 'bedroom',
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Dining',
    slug: 'dining',
    image: 'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Office',
    slug: 'office',
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Outdoor',
    slug: 'outdoor',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'Decor',
    slug: 'decor',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80'
  }
];