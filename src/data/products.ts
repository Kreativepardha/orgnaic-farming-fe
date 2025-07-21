import type { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Kale",
    description: "Fresh farm-grown kale, rich in antioxidants.",
    price: 3.99,
    image: "/shirt.png",
    category: "foods",
    rating: 4.5,
    isOrganic: true,
  },
  {
    id: 2,
    name: "Natural Cotton Shirt",
    description: "Sustainable textile with breathable comfort.",
    price: 24.99,
    image: "/shirt.png",
    category: "textiles",
    rating: 4.7,
    isOrganic: true,
  },
  // more...
];
