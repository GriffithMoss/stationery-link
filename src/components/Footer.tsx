export default function Footer() {
  return (
    <footer className="w-full py-10 bg-card text-center text-gray-600 text-sm border-t mt-12">
      <div className="mb-4 flex flex-wrap justify-center gap-6">
        <a href="/about" className="hover:underline">会社概要</a>
        <a href="/contact" className="hover:underline">お問い合わせ</a>
        <a href="/privacy" className="hover:underline">プライバシーポリシー</a>
        <a href="/faq" className="hover:underline">よくある質問</a>
        <a href="/brands" className="hover:underline">ブランド一覧</a>
        <a href="/blog" className="hover:underline">ブログ</a>
        <a href="/stores" className="hover:underline">店舗情報</a>
      </div>
      <div className="mb-4 flex flex-wrap justify-center gap-4">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener" className="hover:underline">Facebook</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener" className="hover:underline">Instagram</a>
      </div>
      <div className="mb-2">© {new Date().getFullYear()} ステーショナリーリンク. 全著作権所有。</div>
      <div>
        <a href="/terms" className="hover:underline">利用規約</a>
      </div>
    </footer>
  );
}
