import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center font-sans">
      {/* Hero Banner */}
      <section className="w-full bg-primary/20 py-16 flex flex-col items-center mb-8">
        <h1 className="text-5xl sm:text-7xl font-extrabold text-primary mb-4 tracking-tight">
          ステーショナリーリンク
        </h1>
        <p className="text-xl sm:text-2xl text-foreground max-w-2xl text-center mb-6">
          文房具のことなら何でも揃うワンストップショップ。最高の文房具で発見・ショッピング・創造を楽しもう！
        </p>
        <Link
          href="/products"
          className="bg-primary text-white px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-secondary transition"
        >
          商品一覧を見る
        </Link>
      </section>

      {/* Promo Banner: Special Edition */}
      <section className="w-full max-w-5xl px-4 mb-12">
        <div className="bg-secondary/20 rounded-xl flex flex-col md:flex-row items-center justify-between p-8 gap-8 shadow-lg">
          <div>
            <h2 className="text-2xl font-bold text-pink-600 mb-2">
              75周年記念 ピーナッツ × モレスキン
            </h2>
            <p className="text-gray-800 mb-4">
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
        <h2 className="text-2xl font-bold text-pink-600 mb-6">おすすめ商品</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Product Card Example */}
          <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-100 text-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80"
              alt="ノート"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">クラシックノート</h3>
            <p className="text-gray-700 mb-2">
              メモ、スケッチ、アイデアに最適なノートです。
            </p>
            <span className="text-primary font-bold text-lg">¥599</span>
          </div>
          <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-100 text-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
              alt="ペン"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">スムースゲルペン</h3>
            <p className="text-gray-700 mb-2">鮮やかなインクでなめらかに書けます。</p>
            <span className="text-primary font-bold text-lg">¥249</span>
          </div>
          <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-100 text-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="蛍光ペン"
              width={100}
              height={100}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">パステル蛍光ペン</h3>
            <p className="text-gray-700 mb-2">スタイリッシュに色分けできます。</p>
            <span className="text-primary font-bold text-lg">¥199</span>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="w-full max-w-5xl px-4 mb-12">
        <div className="bg-info/20 rounded-xl flex flex-col md:flex-row items-center justify-between p-8 gap-8 shadow-lg text-gray-900">
          <div>
            <h2 className="text-2xl font-bold text-info mb-2">名入れ・パーソナライズ</h2>
            <p className="text-gray-800 mb-4">
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
            <h2 className="text-2xl font-bold text-yellow-600 mb-2">
              会員プログラム「フレンズ・フォー・ライフ」
            </h2>
            <ul className="list-disc ml-6 text-gray-800 mb-4">
              <li>会員限定特典</li>
              <li>誕生日サプライズ</li>
              <li>限定クーポン</li>
            </ul>
            <Link
              href="/signup"
              className="text-yellow-700 font-bold underline"
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
          <div className="bg-card rounded-xl shadow p-6 flex flex-col text-gray-900">
            <span className="text-sm text-gray-400 mb-2">2025年6月13日</span>
            <h3 className="font-semibold text-lg mb-2">
              モレスキンとピーナッツの75周年記念
            </h3>
            <p className="text-gray-700 mb-4">
              限定コラボノートの魅力を紹介します。
            </p>
            <Link
              href="/blog"
              className="text-primary font-bold underline"
            >
              続きを読む
            </Link>
          </div>
          <div className="bg-card rounded-xl shadow p-6 flex flex-col text-gray-900">
            <span className="text-sm text-gray-400 mb-2">2025年6月6日</span>
            <h3 className="font-semibold text-lg mb-2">
              スタッフおすすめ：カヴェコスポーツ
            </h3>
            <p className="text-gray-700 mb-4">
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

      {/* Footer is handled globally */}
    </div>
  );
}
