"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="py-20 text-center w-full bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
    >
      <h1 className="text-5xl sm:text-7xl font-extrabold text-blue-700 dark:text-blue-600 mb-4 tracking-tight drop-shadow">
        Stationery Linkへようこそ
      </h1>
      <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-8">
        文房具の新しい世界へ！
      </p>
      <Link
        href="/products"
        className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-secondary hover:text-primary transition-all duration-300"
      >
        商品一覧を見る
      </Link>
    </motion.section>
  );
}