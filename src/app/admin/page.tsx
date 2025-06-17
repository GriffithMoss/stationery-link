"use client";
import { useState } from "react";
import { products as initialProducts, Product } from "../../lib/products";
import Link from "next/link";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [form, setForm] = useState<Partial<Product>>({});
  const [editing, setEditing] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.name || !form.price || !form.category) return;
    if (editing) {
      setProducts(products.map(p => p.id === editing ? { ...p, ...form, id: editing } as Product : p));
    } else {
      setProducts([
        ...products,
        { ...form, id: Date.now().toString(), price: Number(form.price) } as Product,
      ]);
    }
    setForm({});
    setEditing(null);
  };

  const handleEdit = (id: string) => {
    const prod = products.find(p => p.id === id);
    if (prod) {
      setForm(prod);
      setEditing(id);
    }
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Admin: Product Management</h1>
      <div className="mb-8 flex gap-6">
        <Link href="/admin/orders" className="text-blue-600 hover:underline">View All Orders</Link>
        <Link href="/admin/users" className="text-blue-600 hover:underline">Manage Users</Link>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="font-semibold mb-4">{editing ? "Edit Product" : "Add Product"}</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <input name="name" value={form.name || ""} onChange={handleChange} placeholder="Name" className="border rounded px-3 py-1" />
          <input name="price" value={form.price || ""} onChange={handleChange} placeholder="Price" type="number" className="border rounded px-3 py-1 w-24" />
          <input name="image" value={form.image || ""} onChange={handleChange} placeholder="Image URL" className="border rounded px-3 py-1" />
          <input name="category" value={form.category || ""} onChange={handleChange} placeholder="Category" className="border rounded px-3 py-1" />
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition" onClick={handleSave}>{editing ? "Update" : "Add"} Product</button>
        {editing && <button className="ml-4 text-gray-500 hover:underline" onClick={() => { setForm({}); setEditing(null); }}>Cancel</button>}
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="font-semibold mb-4">All Products</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Name</th><th>Price</th><th>Category</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>${p.price.toFixed(2)}</td>
                <td>{p.category}</td>
                <td>
                  <button className="text-blue-600 hover:underline mr-2" onClick={() => handleEdit(p.id)}>Edit</button>
                  <button className="text-red-600 hover:underline" onClick={() => handleDelete(p.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
