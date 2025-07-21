import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductListing from './pages/ProductListing'
import ProductDetail from './pages/Productdetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { useCart } from './context/CartContext'
import Home from './pages/Home'

export default function App() {
  const { items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-green-700">
            OrganicMart
          </Link>
          <div className="space-x-6 flex items-center">
            <Link to="/products" className="hover:underline">
              Products
            </Link>
            <Link to="/cart" className="relative hover:underline">
              Cart
              {itemCount > 0 && (
                <span className="ml-1 text-xs font-semibold text-white bg-green-600 px-2 py-0.5 rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <footer className="bg-gray-100 mt-10 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} OrganicMart. All rights reserved.
      </footer>
    </>
  );
}
