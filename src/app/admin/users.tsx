"use client";
import { useState } from "react";

// Demo: In-memory user list
const demoUsers = [
  { email: "admin@stationery.com", isAdmin: true },
  { email: "user@stationery.com", isAdmin: false },
];

export default function AdminUsersPage() {
  const [users] = useState(demoUsers);
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Admin: Users</h1>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.email}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
