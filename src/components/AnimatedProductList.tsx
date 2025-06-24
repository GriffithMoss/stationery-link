"use client";
import { motion } from "framer-motion";

type Product = {
  id: number;
  name: string;
  image: string;
};

export default function AnimatedProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
          className="bg-white rounded shadow p-4"
        >
          <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />
          <div className="mt-2 font-bold">{product.name}</div>
        </motion.div>
      ))}
    </div>
  );
}