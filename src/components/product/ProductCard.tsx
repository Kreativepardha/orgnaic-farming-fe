import type { Product } from "@/types/Product";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden rounded-xl shadow hover:shadow-md transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
        <Button onClick={() => addToCart(product)} className="mt-2 w-full">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
