import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Checkout() {
  const { items } = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "", deliveryDate: "" });
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-[#e6f4ea] via-[#f3f8e4] to-[#d8eed1]">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <DotBackgroundDemo />
      </div>

      {/* Centered Checkout Card */}
      <Card className="w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-300 bg-white z-10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-green-800">Secure Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.form
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {["name", "email", "address", "deliveryDate"].map((field) => (
              <motion.div key={field} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Label className="capitalize text-gray-700">{field}</Label>
                <Input
                  name={field}
                  type={field === "email" ? "email" : field === "deliveryDate" ? "date" : "text"}
                  value={form[field as keyof typeof form]}
                  onChange={handleChange}
                  required
                />
              </motion.div>
            ))}

            <div className="md:col-span-2 border-t pt-6 text-right font-bold text-lg text-gray-800">
              Total: ₹{total.toFixed(2)}
            </div>

            <motion.div className="md:col-span-2">
              <Button type="submit" className="w-full bg-green-700 hover:bg-green-600 text-white">
                Place Order
              </Button>
            </motion.div>
          </motion.form>
        </CardContent>
      </Card>
    </div>
  );
}
