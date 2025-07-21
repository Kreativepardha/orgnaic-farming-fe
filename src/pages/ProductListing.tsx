import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function ProductListing() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("");

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const filtered = products
    .filter(p => selectedCategories.length === 0 || selectedCategories.includes(p.category))
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 p-6">
      {/* Filters */}
      <aside className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Filter by Category</h4>
          {["foods", "textiles", "cosmetics"].map(category => (
            <label key={category} className="flex items-center space-x-2">
              <Checkbox
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <span className="capitalize">{category}</span>
            </label>
          ))}
        </div>
        <div>
          <h4 className="font-semibold mb-2">Sort By</h4>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger><SelectValue placeholder="Choose" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </aside>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(product => <ProductCard key={product.id} product={product} />)}
      </section>
    </div>
  );
}
