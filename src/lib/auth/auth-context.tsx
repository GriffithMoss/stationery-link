"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type User = { email: string; isAdmin?: boolean } | null;

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);

  const login = (email: string, password: string) => {
    // Demo: admin@stationery.com is admin
    setUser({ email, isAdmin: email === "admin@stationery.com" });
  };
  const logout = () => setUser(null);
  const signup = (email: string, password: string) => {
    setUser({ email });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
