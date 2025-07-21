import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function Checkout() {
  const { items } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    deliveryDate: "",
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order Submitted", form);
    alert("Order placed successfully!");
  };

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input name="address" value={form.address} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="deliveryDate">Delivery Date</Label>
          <Input type="date" name="deliveryDate" value={form.deliveryDate} onChange={handleChange} required />
        </div>

        <div className="border-t pt-4">
          <h4 className="text-lg font-semibold">Order Summary</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                {item.name} × {item.quantity} — ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="font-bold mt-2">Total: ${total.toFixed(2)}</p>
        </div>

        <Button type="submit" className="w-full">Place Order</Button>
      </form>
    </div>
  );
}
