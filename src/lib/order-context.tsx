"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "./products";

type Order = {
  id: string;
  userEmail: string;
  items: (Product & { quantity: number })[];
  total: number;
  date: string;
};

type OrderContextType = {
  orders: Order[];
  placeOrder: (userEmail: string, items: (Product & { quantity: number })[], total: number) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  const placeOrder = (userEmail: string, items: (Product & { quantity: number })[], total: number) => {
    setOrders(prev => [
      {
        id: Date.now().toString(),
        userEmail,
        items,
        total,
        date: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrders must be used within OrderProvider");
  return ctx;
}
