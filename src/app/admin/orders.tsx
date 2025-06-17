"use client";
import { useOrders } from "../../lib/order-context";

export default function AdminOrdersPage() {
  const { orders } = useOrders();
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Admin: All Orders</h1>
      {orders.length === 0 ? (
        <div className="text-gray-500">No orders yet.</div>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Order #</th><th>User</th><th>Date</th><th>Items</th><th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.userEmail}</td>
                <td>{new Date(order.date).toLocaleString()}</td>
                <td>
                  <ul className="list-disc ml-4 text-sm">
                    {order.items.map(item => (
                      <li key={item.id}>{item.name} x {item.quantity}</li>
                    ))}
                  </ul>
                </td>
                <td>${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
