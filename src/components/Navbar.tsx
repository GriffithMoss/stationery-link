"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useAuth } from "../lib/auth/auth-context";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-between px-6 py-4 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <Link
        href="/"
        className="text-2xl font-extrabold text-blue-500 tracking-tight"
      >
        ステーショナリーリンク
      </Link>
      <div className="flex gap-6 items-center">
        <SearchBar />
        <Link
          href="/products"
          className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-medium transition-colors"
        >
          商品一覧
        </Link>
        <Link
          href="/categories"
          className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-medium transition-colors"
        >
          カテゴリ
        </Link>
        <Link
          href="/cart"
          className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-medium flex items-center gap-1 transition-colors"
        >
          <span>カート</span>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path d="M6 6h15l-1.5 9h-13z" stroke="#7ec4cf" strokeWidth="2" />
            <circle cx="9" cy="20" r="1" fill="#7ec4cf" />
            <circle cx="18" cy="20" r="1" fill="#7ec4cf" />
          </svg>
        </Link>
        {user ? (
          <>
            <Link
              href="/profile"
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              プロフィール
            </Link>
            <span className="text-primary font-medium">{user.email}</span>
            {user.isAdmin && (
              <Link
                href="/admin"
                className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-medium transition-colors"
              >
                管理
              </Link>
            )}
            <button
              onClick={logout}
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              ログアウト
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              ログイン
            </Link>
            <Link
              href="/signup"
              className="text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              新規登録
            </Link>
          </>
        )}
        <DarkModeToggle />
      </div>
    </nav>
  );
}
