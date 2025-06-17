"use client";
import { useCart } from "../../lib/cart-context";
import { useOrders } from "../../lib/order-context";
import { useAuth } from "../../lib/auth/auth-context";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const { user } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (submitted)
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">ご注文ありがとうございます！</h1>
        <p className="text-lg text-gray-700">ご注文の商品は発送準備中です。</p>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">購入手続き</h1>
      <form
        className="bg-white rounded-lg shadow p-8 flex flex-col gap-4"
        onSubmit={e => {
          e.preventDefault();
          if (user) placeOrder(user.email, cart, total);
          clearCart();
          setSubmitted(true);
        }}
      >
        <input type="text" placeholder="お名前" className="border rounded px-4 py-2" required />
        <input type="email" placeholder="メールアドレス" className="border rounded px-4 py-2" required defaultValue={user?.email || ""} />
        <input type="text" placeholder="配送先住所" className="border rounded px-4 py-2" required />
        <div className="font-bold text-lg">合計金額: ¥{total.toLocaleString()}</div>
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition">注文する</button>
      </form>
    </div>
  );
}
