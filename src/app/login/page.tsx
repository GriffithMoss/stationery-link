"use client";
import { useAuth } from "../../lib/auth/auth-context";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Login</h1>
      <form
        className="bg-white rounded-lg shadow p-8 flex flex-col gap-4"
        onSubmit={e => {
          e.preventDefault();
          if (!email || !password) {
            setError("Email and password required");
            return;
          }
          login(email, password);
          router.push("/");
        }}
      >
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border rounded px-4 py-2" required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border rounded px-4 py-2" required />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">Login</button>
      </form>
    </div>
  );
}
