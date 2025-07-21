import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { items } = useCart();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-xl font-semibold">Total: ${total.toFixed(2)}</div>
          <a href="/checkout">
            <button className="mt-4 px-6 py-2 bg-green-700 text-white rounded">Proceed to Checkout</button>
          </a>
        </>
      )}
    </div>
  );
}
