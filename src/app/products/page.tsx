"use client";
import { useState, useEffect } from "react"; // Import useEffect
import { Product } from "../../lib/products"; // We still need the type
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

// The hardcoded products are no longer needed here.
// const allCategories = ...
// const allBrands = ...
// const allTags = ...

const sortOptions = [
  { value: "", label: "おすすめ順" },
  { value: "price-asc", label: "価格が安い順" },
  { value: "price-desc", label: "価格が高い順" },
  { value: "name", label: "名前順" },
  { value: "stock", label: "在庫が多い順" },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]); // State for products
  const [loading, setLoading] = useState(true); // State for loading status

  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [tag, setTag] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showSale, setShowSale] = useState(false);
  const [sort, setSort] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  // Fetch products from the API
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Derived states should be calculated after products are fetched
  const allCategories = Array.from(new Set(products.map((p) => p.category)));
  const allBrands = Array.from(new Set(products.map((p) => p.brand).filter(Boolean)));
  const allTags = Array.from(new Set(products.flatMap((p) => p.tags || [])));

  let filtered = products.filter(
    (p) =>
      (!search || p.name.toLowerCase().includes(search) || p.description.toLowerCase().includes(search)) &&
      (!category || p.category === category) &&
      (!brand || p.brand === brand) &&
      (!tag || (p.tags && p.tags.includes(tag))) &&
      (!minPrice || p.price >= Number(minPrice)) &&
      (!maxPrice || p.price <= Number(maxPrice)) &&
      (!showNew || p.isNew) &&
      (!showSale || p.isSale)
  );

  if (sort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "name") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name, "ja"));
  if (sort === "stock") filtered = [...filtered].sort((a, b) => (b.stock || 0) - (a.stock || 0));

  // Show a loading message while fetching data
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center text-lg">
        Loading products...
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-700">商品一覧</h1>
        <div className="flex flex-col md:flex-row gap-6 mb-8 bg-white/90 dark:bg-[#23243a]/90 p-4 rounded shadow transition-colors duration-500">
          <form className="flex flex-wrap gap-4 items-end flex-1">
            <div>
              <label className="block text-sm font-medium mb-1">カテゴリ</label>
              <select value={category} onChange={e => setCategory(e.target.value)} className="border rounded px-3 py-1">
                <option value="">すべて</option>
                {allCategories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ブランド</label>
              <select value={brand} onChange={e => setBrand(e.target.value)} className="border rounded px-3 py-1">
                <option value="">すべて</option>
                {allBrands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">タグ</label>
              <select value={tag} onChange={e => setTag(e.target.value)} className="border rounded px-3 py-1">
                <option value="">すべて</option>
                {allTags.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">最低価格</label>
              <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} className="border rounded px-3 py-1 w-24" min="0" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">最高価格</label>
              <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} className="border rounded px-3 py-1 w-24" min="0" />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">
                <input type="checkbox" checked={showNew} onChange={e => setShowNew(e.target.checked)} className="mr-1" />新商品
              </label>
              <label className="text-sm font-medium">
                <input type="checkbox" checked={showSale} onChange={e => setShowSale(e.target.checked)} className="mr-1" />セール
              </label>
            </div>
          </form>
          <div className="flex gap-4 items-center">
            <label className="block text-sm font-medium">並び替え</label>
            <select value={sort} onChange={e => setSort(e.target.value)} className="border rounded px-3 py-1">
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <button type="button" className={`px-3 py-1 rounded ${view === "grid" ? "bg-primary text-blue-700" : "border-gray-200"}`} onClick={() => setView("grid")}>グリッド</button>
            <button type="button" className={`px-3 py-1 rounded ${view === "list" ? "bg-primary text-blue-700" : "border-gray-200"}`} onClick={() => setView("list")}>リスト</button>
          </div>
        </div>
        {filtered.length === 0 ? (
          <div className="text-center text-blue-700 dark:text-blue-200 py-20 text-lg">該当する商品がありません。</div>
        ) : view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filtered.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5, type: "spring" }}
              >
                <Link
                  href={`/products/${product.id}`}
                  className="bg-white dark:bg-[#23243a] rounded-lg shadow p-6 flex flex-col items-center hover:scale-105 transition-transform border border-gray-200 dark:border-[#393a4d] text-gray-900 dark:text-gray-100 relative duration-300"
                >
                  <Image src={product.image} alt={product.name} width={120} height={120} className="mb-4 rounded shadow-sm" />
                  <h2 className="font-semibold text-lg mb-2 text-blue-700 dark:text-blue-200">{product.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">{product.description}</p>
                  <span className="text-blue-700 dark:text-blue-200 font-bold">¥{product.price.toLocaleString()}</span>
                  {product.isNew && <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">新商品</span>}
                  {product.isSale && <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">セール</span>}
                  {product.brand && <span className="mt-2 text-xs text-blue-700 dark:text-blue-200">ブランド: {product.brand}</span>}
                  {product.tags && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-0.5 rounded-full text-xs transition-colors">{tag}</span>
                      ))}
                    </div>
                  )}
                  {typeof product.stock === "number" && (
                    <span className="mt-2 text-xs text-pink-700 dark:text-pink-300">在庫: {product.stock}</span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.4, type: "spring" }}
              >
                <Link
                  href={`/products/${product.id}`}
                  className="bg-white dark:bg-[#23243a] rounded-lg shadow p-4 flex flex-row items-center hover:scale-[1.01] transition-transform border border-gray-200 dark:border-[#393a4d] text-gray-900 dark:text-gray-100 relative gap-6 duration-300"
                >
                  <Image src={product.image} alt={product.name} width={80} height={80} className="rounded mr-4 shadow-sm" />
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg mb-1 text-blue-700 dark:text-blue-200">{product.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">{product.description}</p>
                    <span className="text-blue-700 dark:text-blue-200 font-bold">¥{product.price.toLocaleString()}</span>
                    {product.brand && <span className="ml-4 text-xs text-blue-700 dark:text-blue-200">ブランド: {product.brand}</span>}
                    {typeof product.stock === "number" && <span className="ml-4 text-xs text-pink-700 dark:text-pink-300">在庫: {product.stock}</span>}
                    {product.tags && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.tags.map((tag) => (
                          <span key={tag} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-0.5 rounded-full text-xs transition-colors">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    {product.isNew && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">新商品</span>}
                    {product.isSale && <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded">セール</span>}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}