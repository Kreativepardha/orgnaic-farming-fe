import { createContext, useContext, useState } from "react";
import type { Product } from "@/types/Product";

interface CartItem extends Product {
  quantity: number;
}

const CartContext = createContext<{
  items: CartItem[];
  addToCart: (product: Product) => void;
}>({ items: [], addToCart: () => {} });

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return <CartContext.Provider value={{ items, addToCart }}>{children}</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
