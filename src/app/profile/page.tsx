"use client";
import { useAuth } from "../../lib/auth/auth-context";
import { useOrders } from "../../lib/order-context";

export default function ProfilePage() {
  const { user } = useAuth();
  const { orders } = useOrders();
  if (!user) return <div className="max-w-2xl mx-auto px-4 py-12 text-center">プロフィールを見るにはログインしてください。</div>;
  const userOrders = orders.filter(o => o.userEmail === user.email);
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">プロフィール</h1>
      <div className="mb-8">メールアドレス: <span className="font-semibold">{user.email}</span></div>
      <h2 className="text-2xl font-bold mb-2">注文履歴</h2>
      {userOrders.length === 0 ? (
        <div className="text-gray-500">注文履歴はありません。</div>
      ) : (
        <ul className="divide-y">
          {userOrders.map(order => (
            <li key={order.id} className="py-4">
              <div className="font-semibold">注文番号: {order.id}</div>
              <div className="text-sm text-gray-500 mb-1">{new Date(order.date).toLocaleString()}</div>
              <ul className="ml-4 list-disc text-sm">
                {order.items.map(item => (
                  <li key={item.id}>{item.name} × {item.quantity} (¥{(item.price * item.quantity).toLocaleString()})</li>
                ))}
              </ul>
              <div className="font-bold mt-1">合計: ¥{order.total.toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
