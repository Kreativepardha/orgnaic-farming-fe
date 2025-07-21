import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Lens } from "./lens";
import { Tabs } from "@/components/ui/tabs";
// import { Lens } from "@aceternity/ui/lens";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Lens zoomFactor={2} lensSize={180}>
        <img src={product.image} alt={product.name} className="rounded shadow w-full max-h-96 object-cover" />
      </Lens>

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl text-green-700 font-semibold mt-2">${product.price}</p>
        <p className="mt-4 text-sm text-muted-foreground">{product.description}</p>
        <button onClick={() => addToCart(product)} className="mt-6 px-6 py-2 bg-green-700 text-white rounded">
          Add to Cart
        </button>

        <Tabs
          tabs={[
            { title: "Description", value: "desc", content: <p>{product.description}</p> },
            { title: "Nutrition", value: "nutri", content: <p>Organic certified, high in fiber.</p> },
            { title: "Reviews", value: "reviews", content: <p>⭐️⭐️⭐️⭐️⭐️ 250 reviews</p> },
          ]}
        />
      </div>
    </div>
  );
}
