import Image from "next/image";
import Link from "next/link";
import AnimatedProductList from "@/components/AnimatedProductList";
import { products } from "../lib/products"; // products-г импортлоно
import HeroSection from "../components/HeroSection";

// Жишээ: products array-аас эхний 3 барааг харуулах
const featured = products.slice(0, 3);

// 商品リスト
const allProducts = [
  { id: 1, name: "JETSTREAM", image: "/JETSTREAM PRIMEシリーズ.jpg" },
  { id: 2, name: "JETSTREAM 2", image: "/JETSTREAM 2.jpg" },
  { id: 3, name: "JETSTREAM 3", image: "/JETSTREAM 3.jpg" },
  { id: 4, name: "JETSTREAM 4", image: "/JETSTREAM 4.jpg" },
  // ... 他の商品
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center font-sans">
      <HeroSection />
      {/* Promo Banner: Special Edition */}
      <section className="w-full max-w-5xl px-4 mb-12">
        <div className="bg-secondary/20 rounded-xl flex flex-col md:flex-row items-center justify-between p-8 gap-8 shadow-lg">
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">
              75周年記念 ピーナッツ × モレスキン
            </h2>
            <p className="text-#f3f3f3 mb-4">
              チャールズ・シュルツの名作コミックとコラボした限定ノート。
            </p>
            <Link
              href="/products"
              className="text-primary font-bold underline"
            >
              詳しく見る
            </Link>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
            alt="Peanuts Moleskine"
            width={180}
            height={120}
            className="rounded"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full max-w-5xl px-4 mb-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">おすすめ商品</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-card rounded-xl shadow-lg p-6 flex flex-col items-center border border-blue-600 text-#f3f3f3 hover:shadow-xl transition cursor-pointer"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-#f3f3f3 mb-2">
                メモ、スケッチ、アイデアに最適なノートです。
              </p>
              <span className="text-primary font-bold text-lg">¥{product.price}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Personalization Section */}
      <section className="w-full max-w-5xl px-4 mb-12">
        <div className="bg-info/20 rounded-xl flex flex-col md:flex-row items-center justify-between p-8 gap-8 shadow-lg text-#f3f3f3">
          <div>
            <h2 className="text-2xl font-bold text-info mb-2">名入れ・パーソナライズ</h2>
            <p className="text-blue-600 mb-4">
              ギフトや自分用に、文房具を特別な一点に仕上げましょう。
            </p>
            <Link
              href="/products"
              className="text-info font-bold underline"
            >
              パーソナライズ商品を見る
            </Link>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
            alt="Personalize"
            width={180}
            height={120}
            className="rounded"
          />
        </div>
      </section>

      {/* Loyalty Program Section */}
      <section className="w-full max-w-5xl px-4 mb-12">
        <div className="bg-accent/20 rounded-xl flex flex-col md:flex-row items-center justify-between p-8 gap-8 shadow-lg text-gray-900">
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">
              会員プログラム「フレンズ・フォー・ライフ」
            </h2>
            <ul className="list-disc ml-6 text-gray-800 mb-4">
              <li>会員限定特典</li>
              <li>誕生日サプライズ</li>
              <li>限定クーポン</li>
            </ul>
            <Link
              href="/signup"
              className="text-blue-600 font-bold underline"
            >
              今すぐ登録
            </Link>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
            alt="Loyalty"
            width={180}
            height={120}
            className="rounded"
          />
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="w-full max-w-5xl px-4 mb-16">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">ミリグラムノート</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl shadow p-6 flex flex-col text-#f3f3f3">
            <span className="text-sm text-#f3f3f3 mb-2">2025年6月13日</span>
            <h3 className="font-semibold text-lg mb-2">
              モレスキンとピーナッツの75周年記念
            </h3>
            <p className="text-#f3f3f3 mb-4">
              限定コラボノートの魅力を紹介します。
            </p>
            <Link
              href="/blog"
              className="text-primary font-bold underline"
            >
              続きを読む
            </Link>
          </div>
          <div className="bg-card rounded-xl shadow p-6 flex flex-col text-#f3f3f3">
            <span className="text-sm text-#f3f3f3 mb-2">2025年6月6日</span>
            <h3 className="font-semibold text-lg mb-2">
              スタッフおすすめ：カヴェコスポーツ
            </h3>
            <p className="text-#f3f3f3 mb-4">
              人気万年筆の使い心地をレビュー。
            </p>
            <Link
              href="/blog"
              className="text-primary font-bold underline"
            >
              続きを読む
            </Link>
          </div>
        </div>
      </section>

      {/* New Products Section */}
      <section className="w-full max-w-5xl px-4 mb-16">
        <h2 className="text-2xl font-bold text-green-600 mb-6">新着商品</h2>
        <AnimatedProductList products={allProducts} />
      </section>

      {/* Footer is handled globally */}
    </div>
  );
}
