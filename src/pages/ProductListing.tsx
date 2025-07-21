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
import { Button } from "@/components/ui/button";
import { ProductExpandableGallery } from "@/components/product/ProductCard";

const ITEMS_PER_PAGE = 5;

export default function ProductListing() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1); // Reset to page 1 on filter change
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

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

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
          <Select value={sort} onValueChange={(val) => {
            setSort(val);
            setCurrentPage(1); // Reset on sort change
          }}>
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

      {/* Main Section */}
      <section>
        <ProductExpandableGallery products={paginatedProducts} />

        {/* Pagination Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </Button>
          <span className="text-green-900 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      </section>
    </div>
  );
}
