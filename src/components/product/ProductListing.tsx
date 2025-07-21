import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export default function ProductListing() {
  return (
    <div className="container py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
