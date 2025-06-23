"use client";
import { products } from "../../lib/products";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";


const allCategories = Array.from(new Set(products.map((p) => p.category)));
const allBrands = Array.from(new Set(products.map((p) => p.brand).filter(Boolean)));
const allTags = Array.from(new Set(products.flatMap((p) => p.tags || [])));
const sortOptions = [
  { value: "", label: "おすすめ順" },
  { value: "price-asc", label: "価格が安い順" },
  { value: "price-desc", label: "価格が高い順" },
  { value: "name", label: "名前順" },
  { value: "stock", label: "在庫が多い順" },
];

export default function ProductsPage() {
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">商品一覧</h1>
      <div className="flex flex-col md:flex-row gap-6 mb-8 bg-background/90 p-4 rounded shadow">
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
          <button type="button" className={`px-3 py-1 rounded ${view === "grid" ? "bg-primary text-white" : "bg-gray-200"}`} onClick={() => setView("grid")}>グリッド</button>
          <button type="button" className={`px-3 py-1 rounded ${view === "list" ? "bg-primary text-white" : "bg-gray-200"}`} onClick={() => setView("list")}>リスト</button>
        </div>
      </div>
      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 py-20 text-lg">該当する商品がありません。</div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-card rounded-lg shadow p-6 flex flex-col items-center hover:scale-105 transition-transform border border-gray-100 text-gray-900 relative"
            >
              <Image src={product.image} alt={product.name} width={120} height={120} className="mb-4" />
              <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2 text-center">{product.description}</p>
              <span className="text-blue-700 font-bold">¥{product.price.toLocaleString()}</span>
              {product.isNew && <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">新商品</span>}
              {product.isSale && <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">セール</span>}
              {product.brand && <span className="mt-2 text-xs text-gray-500">ブランド: {product.brand}</span>}
              {product.tags && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
              )}
              {typeof product.stock === "number" && (
                <span className="mt-2 text-xs text-gray-500">在庫: {product.stock}</span>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-card rounded-lg shadow p-4 flex flex-row items-center hover:scale-[1.01] transition-transform border border-gray-100 text-gray-900 relative gap-6"
            >
              <Image src={product.image} alt={product.name} width={80} height={80} className="rounded mr-4" />
              <div className="flex-1">
                <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
                <p className="text-gray-600 mb-1">{product.description}</p>
                <span className="text-blue-700 font-bold">¥{product.price.toLocaleString()}</span>
                {product.brand && <span className="ml-4 text-xs text-gray-500">ブランド: {product.brand}</span>}
                {typeof product.stock === "number" && <span className="ml-4 text-xs text-gray-500">在庫: {product.stock}</span>}
                {product.tags && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {product.tags.map((tag) => (
                      <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1 items-end">
                {product.isNew && <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">新商品</span>}
                {product.isSale && <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded">セール</span>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
