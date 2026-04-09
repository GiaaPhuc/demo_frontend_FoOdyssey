import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "FoOdyssey - Thông minh hóa hành trình ẩm thực",
  description: "AI-powered travel and restaurant recommendation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        {/* Navbar dùng chung cho toàn bộ App */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl text-orange-600 font-bold tracking-tighter">
                FoOdyssey
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <Link
                href="/"
                className="hover:text-orange-600 transition-colors"
              >
                Trang chủ
              </Link>
              <Link
                href="/discover"
                className="hover:text-orange-600 transition-colors"
              >
                Khám phá
              </Link>
              <Link
                href="/scanner"
                className="hover:text-orange-600 transition-colors"
              >
                Quét Menu
              </Link>
              <Link
                href="/itinerary"
                className="hover:text-orange-600 transition-colors"
              >
                Lịch trình
              </Link>
            </div>

            <button className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition-all">
              Tải App
            </button>
          </nav>
        </header>

        {/* Nội dung trang web - padding top để không bị che bởi Navbar */}
        <main className="pt-16 min-h-screen bg-gray-50/50">
          <div className="page-transition">{children}</div>
        </main>

        {/* Footer đơn giản cho Demo */}
        <footer className="bg-white border-t border-gray-100 py-8 mt-20">
          <div className="text-center text-gray-400 text-sm">
            © 2026 FoOdyssey Project - HK4 TDTT Demo
          </div>
        </footer>
      </body>
    </html>
  );
}
