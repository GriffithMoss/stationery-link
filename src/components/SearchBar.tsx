"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  return (
    <form
      className="flex gap-2"
      onSubmit={e => {
        e.preventDefault();
        if (query.trim()) router.push(`/products?search=${encodeURIComponent(query)}`);
      }}
    >
      <input
        type="text"
        placeholder="商品を検索..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border rounded px-3 py-1"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">検索</button>
    </form>
  );
}
