import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = [
    {
      id: 1,
      name: "Organic Tomatoes",
      price: 3.49,
      quantity: 2,
      image: "/food.png",
    },
    {
      id: 2,
      name: "Aloe Vera Face Gel",
      price: 5.99,
      quantity: 1,
      image: "/food.png",
    },
  ];

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="bg-[#f7f5ef] min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Your Cart</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-xl p-6 space-y-6"
        >
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 items-center border-b pb-4">
              <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
              <div className="flex-1">
                <h4 className="font-semibold text-green-900">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
              </div>
              <span className="text-sm font-semibold text-green-800">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          {/* Coupon Field */}
          <div className="flex gap-2 pt-2">
            <Input placeholder="Coupon Code" className="flex-1" />
            <Button variant="outline">Apply</Button>
          </div>

          {/* Total */}
          <div className="flex justify-between font-semibold text-lg pt-4 border-t">
            <span>Total</span>
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ${total.toFixed(2)}
            </motion.span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/products" className="w-full">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/checkout" className="w-full">
              <Button className="w-full bg-green-700 hover:bg-green-600">Checkout</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
