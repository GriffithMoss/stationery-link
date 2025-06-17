"use client";
import { useCart } from "../../lib/cart-context";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">ショッピングカート</h1>
      {cart.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
          カートは空です。商品を追加してください。
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-8">
          <ul className="divide-y">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-4">
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-gray-500 text-sm">数量: {item.quantity}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-blue-700 font-bold">¥{(item.price * item.quantity).toLocaleString()}</span>
                  <button className="text-red-500 hover:underline" onClick={() => removeFromCart(item.id)}>削除</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-8">
            <span className="font-bold text-lg">合計: ¥{total.toLocaleString()}</span>
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition" onClick={clearCart}>カートを空にする</button>
            <a href="/checkout" className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition">購入手続き</a>
          </div>
        </div>
      )}
    </div>
  );
}
