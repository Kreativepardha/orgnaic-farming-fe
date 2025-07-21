import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { products } from "@/data/products";
import { ProductExpandableGallery } from "@/components/product/ProductCard";

export default function ProductListing() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("");

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filtered = products
    .filter(
      (p) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(p.category)
    )
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 p-6 bg-[#f5f5f0] min-h-screen">
      {/* Sidebar Filters */}
      <aside className="bg-white p-4 rounded-xl shadow space-y-6 h-fit">
        <div>
          <h4 className="font-semibold text-lg mb-2 text-green-900">
            Filter by Category
          </h4>
          <div className="space-y-2">
            {["foods", "textiles", "cosmetics"].map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                />
                <span className="capitalize text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2 text-green-900">
            Sort Products
          </h4>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-full bg-[#f4f4f4]">
              <SelectValue placeholder="Choose sorting..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </aside>

      {/* Product Grid with Expandable Cards */}
      <section>
        <ProductExpandableGallery products={filtered} />
      </section>
    </div>
  );
}
