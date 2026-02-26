import { Category } from "./category.types";

export const categories: Category[] = [
  {
    id: 1,
    slug: "living-room",
    name: "Living Room",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80",
    productCount: 124,
  },
  {
    id: 2,
    slug: "bedroom",
    name: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    productCount: 97,
  },
  {
    id: 3,
    slug: "dining",
    name: "Dining",
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80",
    productCount: 86,
  },
  {
    id: 4,
    slug: "office",
    name: "Office",
    image:
      "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    productCount: 78,
  },
  {
    id: 5,
    slug: "outdoor",
    name: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    productCount: 65,
  },
  {
    id: 6,
    slug: "decor",
    name: "Decor",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    productCount: 112,
  },
];


export const categoryMetadata: Record<string, { name: string; description: string; image: string }> = {
  "living-room": {
    name: "Living Room",
    description: "Create a space for relaxation and entertainment with our comfortable and stylish living room furniture.",
    image: "https://images.unsplash.com/photo-1583847268964-b28ce8f30097?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  "bedroom": {
    name: "Bedroom",
    description: "Transform your bedroom into a peaceful sanctuary with our cozy beds and storage solutions.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  "dining": {
    name: "Dining",
    description: "Gather around our elegant dining tables and chairs for memorable meals with family and friends.",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  "office": {
    name: "Office",
    description: "Boost your productivity with our ergonomic desks and comfortable office chairs.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  "outdoor":{
    name: "Outdoor",
    description: "",
    image: ""
  },
  "decor":{
    name: "Decor",
    description: "",
    image: ""
  }
};