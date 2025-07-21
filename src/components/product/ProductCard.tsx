"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/Product";

export function ProductExpandableGallery({ products }: { products: Product[] }) {
  const [active, setActive] = useState<(typeof products)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null!);
  const { addToCart } = useCart();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded Modal View */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-4 right-4 lg:hidden bg-white rounded-full h-8 w-8 z-50"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white rounded-xl overflow-hidden shadow-xl"
            >
              <motion.img
                layoutId={`image-${active.name}-${id}`}
                src={active.image}
                alt={active.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-4 space-y-3">
                <motion.h3 className="text-xl font-semibold text-green-900">
                  {active.name}
                </motion.h3>
                <motion.p className="text-muted-foreground text-sm">
                  {active.description}
                </motion.p>
                <motion.p className="text-green-700 font-bold text-lg">
                  ${active.price.toFixed(2)}
                </motion.p>
                <motion.button
                  onClick={() => {
                    addToCart(active);
                    setActive(null);
                  }}
                  className="px-4 py-2 text-sm rounded-md bg-green-700 hover:bg-green-600 text-white font-medium"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grid Cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            layoutId={`card-${product.name}-${id}`}
            key={product.id}
            onClick={() => setActive(product)}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
          >
            <motion.img
              layoutId={`image-${product.name}-${id}`}
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-2 text-center">
              <motion.h3 className="font-semibold text-green-900">
                {product.name}
              </motion.h3>
              <motion.p className="text-sm text-muted-foreground">
                ${product.price.toFixed(2)}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </motion.svg>
);
