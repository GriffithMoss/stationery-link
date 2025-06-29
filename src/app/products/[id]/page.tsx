"use client"; // This MUST be the very first line

import { use, useState, useEffect } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useCart } from "../../../lib/cart-context";
import { Product } from "../../../lib/products";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(`/api/products/${id}`);

        if (!res.ok) {
          notFound();
          return;
        }
        
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-12">Loading Product...</div>;
  }

  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <Image src={product.image} alt={product.name} width={200} height={200} className="rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold text-blue-700 mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <span className="text-2xl text-blue-700 font-bold mb-4 block">¥{product.price.toLocaleString()}</span>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
            onClick={() => addToCart(product)}
          >
            カートに追加
          </button>
        </div>
      </div>
    </div>
  );
}