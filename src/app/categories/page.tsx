import { products } from "../../lib/products";

const categories = Array.from(new Set(products.map((p) => p.category)));

export default function CategoriesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">Categories</h1>
      <div className="flex flex-wrap gap-6">
        {categories.map((cat) => (
          <div key={cat} className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium text-lg shadow">
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}
