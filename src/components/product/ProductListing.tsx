import { products } from "@/data/products";
import { motion } from "framer-motion";

export default function ProductListing() {
  return (
    <div className="bg-[#f7f5ef] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 text-center mb-12">
          Our Organic Picks
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-green-800">{product.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.description}
              </p>
              <p className="mt-2 font-bold text-green-900">${product.price.toFixed(2)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
