import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Lens } from "./lens";
import { Tabs } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <div className="p-6 text-center">Product not found.</div>;

  return (
    <div className="bg-[#f7f5ef] py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image with Zoom Lens */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <Lens zoomFactor={2} lensSize={180}>
            <img
              src={product.image}
              alt={product.name}
              className="rounded-md shadow w-full h-[400px] object-cover"
            />
          </Lens>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-green-900">{product.name}</h1>
          <p className="text-2xl font-semibold text-green-700">${product.price}</p>
          <p className="text-muted-foreground">{product.description}</p>

          <Button
            onClick={() => addToCart(product)}
            className="bg-green-700 hover:bg-green-600"
            size="lg"
          >
            Add to Cart
          </Button>

          {/* Tabs for Details */}
          <div className="mt-8">
            <Tabs
              tabs={[
                {
                  title: "Description",
                  value: "desc",
                  content: (
                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  ),
                },
                {
                  title: "Nutrition",
                  value: "nutri",
                  content: (
                    <ul className="list-disc ml-6 text-sm text-green-900 space-y-1">
                      <li>100% Organic Certified</li>
                      <li>Rich in Fiber & Minerals</li>
                      <li>Zero Chemicals</li>
                    </ul>
                  ),
                },
                {
                  title: "Reviews",
                  value: "reviews",
                  content: <p className="text-yellow-600 text-sm">⭐️⭐️⭐️⭐️⭐️ 250 reviews</p>,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
