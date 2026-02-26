export type ProductProps = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
};

export type ProductDataProps = {
  description: string;
  features: string[];
  specifications: Record<string, string>;
  images: string[];
  stock: number;
  reviews: {
    rating: number;
    count: number;
  };
};

export type Category = {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
  count: string;
  featured: string[];
};
