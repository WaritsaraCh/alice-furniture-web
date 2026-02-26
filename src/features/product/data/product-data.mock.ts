import { ProductDataProps, ProductProps } from "../product.types";

export const productsData: (ProductProps & ProductDataProps)[] = [
  {
    id: 1,
    slug: "modern-leather-sofa",
    name: "Modern Leather Sofa",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Living Room",
    isNew: true,
    description:
      "Elevate your living room with this luxurious modern leather sofa. Crafted with premium leather and a solid wood frame, this sofa combines comfort with contemporary design. The clean lines and minimalist aesthetic make it a versatile piece that complements various interior styles.",
    features: [
      "Premium genuine leather upholstery",
      "High-density foam cushions for maximum comfort",
      "Solid wood frame and legs",
      "Stain-resistant and easy to clean",
      "Available in multiple colors",
    ],

    specifications: {
      Dimensions: '86"W x 38"D x 34"H',
      Weight: "120 lbs",
      Material: "Genuine Leather, Solid Wood",
      Assembly: "Minimal assembly required",
      Warranty: "5 years limited warranty",
    },
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80",
    ],

    stock: 12,
    reviews: {
      rating: 4.7,
      count: 124,
    },
  },
  {
    id: 2,
    slug: "scandinavian-dining-table",
    name: "Scandinavian Dining Table",
    price: 849,
    image:
      "https://images.unsplash.com/photo-1604578762246-42d31491fc0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Dining",
    description:
      "This Scandinavian-inspired dining table brings minimalist elegance to your dining space. Made from solid oak with a natural finish, the table showcases the beauty of wood grain while providing a durable surface for everyday meals and special occasions.",
    features: [
      "Solid oak construction",
      "Natural wood finish",
      "Seats 6-8 people comfortably",
      "Water-resistant surface treatment",
      "Tapered legs for stability and style",
    ],

    specifications: {
      Dimensions: '72"L x 36"W x 30"H',
      Weight: "85 lbs",
      Material: "Solid Oak",
      Assembly: "Assembly required",
      Warranty: "3 years limited warranty",
    },
    images: [
      "https://images.unsplash.com/photo-1604578762246-42d31491fc0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ],

    stock: 8,
    reviews: {
      rating: 4.5,
      count: 86,
    },
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
    description:
      "A sleek and minimalist coffee table that serves as the perfect centerpiece for your living room. The tempered glass top and geometric metal base create a modern aesthetic while providing a functional surface for books, decor, and beverages.",
    features: [
      "Tempered glass top",
      "Powder-coated metal base",
      "Geometric design",
      "Easy to clean surface",
      "Non-scratch floor protectors",
    ],

    specifications: {
      Dimensions: '48"L x 24"W x 18"H',
      Weight: "42 lbs",
      Material: "Tempered Glass, Steel",
      Assembly: "Simple assembly required",
      Warranty: "2 years limited warranty",
    },
    images: [
      "https://www.decorpot.com/images/306393876mark-your-wishlist-done-with-this-trendy-and-small-coffee-table-design.jpeg",
      "https://www.ontrendideas.com.au/cdn/shop/files/CTB-DREW-7533-WD-02.jpg?v=1756898587&width=900",
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ],

    stock: 15,
    reviews: {
      rating: 4.3,
      count: 52,
    },
  },
  {
    id: 4,
    slug: "queen-size-platform-bed",
    name: "Queen Size Platform Bed",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Bedroom",
    description:
      "Transform your bedroom with this elegant queen-size platform bed. The upholstered headboard provides comfort for reading or watching TV, while the solid wood frame ensures durability and support. The platform design eliminates the need for a box spring.",
    features: [
      "Upholstered headboard with tufted details",
      "Solid wood frame",
      "No box spring required",
      "Under-bed storage space",
      "Noise-free design",
    ],

    specifications: {
      Dimensions: '63"W x 84"L x 48"H (headboard)',
      Weight: "95 lbs",
      Material: "Solid Wood, Polyester Fabric",
      Assembly: "Assembly required",
      Warranty: "3 years limited warranty",
    },
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1227&q=80",
    ],

    stock: 7,
    reviews: {
      rating: 4.8,
      count: 73,
    },
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
    description:
      "Experience ultimate comfort during long work hours with this ergonomic office chair. Designed with adjustable features and breathable mesh material, it provides proper support for your back and promotes good posture throughout the day.",
    features: [
      "Adjustable height and armrests",
      "Breathable mesh backrest",
      "Lumbar support",
      "360-degree swivel",
      "Smooth-rolling casters",
    ],

    specifications: {
      Dimensions: '26"W x 26"D x 38-42"H',
      Weight: "35 lbs",
      Material: "Mesh, Metal, Plastic",
      "Weight Capacity": "300 lbs",
      Warranty: "2 years limited warranty",
    },
    images: [
      "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1589884629108-3193400c7cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    ],

    stock: 20,
    reviews: {
      rating: 4.4,
      count: 118,
    },
  },
  {
    id: 6,
    slug: "modern-bookshelf",
    name: "Modern Bookshelf",
    price: 599,
    image:
      "https://urbanmood.sg/cdn/shop/files/MALMA2.jpg?v=1698700156",
    category: "Living Room",
    isNew: true,
    description:
      "This modern bookshelf combines style and functionality with its unique geometric design. Perfect for displaying books, plants, and decorative items, it serves as both storage and a statement piece in your living room, office, or study.",
    features: [
      "Geometric open shelf design",
      "Engineered wood construction",
      "Multiple storage compartments",
      "Wall-anchoring hardware included",
      "Easy to clean and maintain",
    ],

    specifications: {
      Dimensions: '71"H x 47"W x 16"D',
      Weight: "75 lbs",
      Material: "Engineered Wood, Metal Accents",
      Assembly: "Assembly required",
      Warranty: "2 years limited warranty",
    },
    images: [
      "https://urbanmood.sg/cdn/shop/files/MALMA2.jpg?v=1698700156",
      "https://i5.walmartimages.com/seo/Tribesigns-Modern-Bookcase-5-Shelf-Storage-Organizer-Bookshelf-with-14-Cube-Display-Book-Shelf-for-Home-Office-Living-Room-and-Bedroom_88bc3653-4def-4d68-9121-193d3468ae33_1.b052138112c2aed6d9c6c5ab00e344e6.jpeg",
      "https://img.zcdn.com.au/lf/50/hash/38080/20437637/4/Georgie+5+Tier+Bookshelf+Set.jpg",
    ],

    stock: 9,
    reviews: {
      rating: 4.6,
      count: 42,
    },
  },
  {
    id: 7,
    slug: "velvet-accent-chair",
    name: "Velvet Accent Chair",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80",
    category: "Living Room",
    description:
      "Add a touch of luxury to your living space with this velvet accent chair. The plush upholstery and curved silhouette create an inviting seating option that",
    // The following tokens were present in the original broken source and are retained as a comment to avoid data loss.
    // s, perfect, for: reading, corners, bedrooms, or, as, additional, seating, your, living, room, : ., ',: features,
    features: [
      "Premium velvet upholstery",
      "Curved backrest for comfort",
      "Solid wood legs",
      "Foam cushioning",
      "Available in multiple colors",
    ],

    specifications: {
      Dimensions: '30"W x 32"D x 33"H',
      Weight: "38 lbs",
      Material: "Velvet, Solid Wood",
      Assembly: "Minimal assembly required",
      Warranty: "1 year limited warranty",
    },
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    ],

    stock: 14,
    reviews: {
      rating: 4.5,
      count: 67,
    },
  },
  {
    id: 8,
    slug: "industrial-bar-stools",
    name: "Industrial Bar Stools (Set of 2)",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1551516594-56cb78394645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1216&q=80",
    category: "Dining",
    description:
      "These industrial-style bar stools add character and functionality to your kitchen island or home bar. The combination of metal and wood creates a rustic yet modern aesthetic, while the adjustable height feature ensures comfortable seating for everyone.",
    features: [
      "Adjustable height",
      "Swivel seat",
      "Footrest for comfort",
      "Solid wood seat",
      "Metal frame with powder coating",
    ],

    specifications: {
      Dimensions: '15"W x 15"D x 24-30"H',
      Weight: "15 lbs each",
      Material: "Metal, Solid Wood",
      Assembly: "Simple assembly required",
      Warranty: "1 year limited warranty",
    },
    images: [
      "https://images.unsplash.com/photo-1551516594-56cb78394645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1216&q=80",
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1615800001964-5afd0ae8e49a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    ],

    stock: 11,
    reviews: {
      rating: 4.2,
      count: 38,
    },
  },
];
