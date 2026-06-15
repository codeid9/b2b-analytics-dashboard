import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI B2B Dashboard",
  description: "Modern SaaS Analytics Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased max-w-full overflow-x-hidden`}>
        <div className="flex min-h-screen w-full max-w-full overflow-x-hidden">
          <Sidebar />
          <main className="flex-1 md:pl-64 min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
            <div className="p-4 md:p-8 flex-1 pb-20 md:pb-8 w-full max-w-full overflow-x-hidden">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}