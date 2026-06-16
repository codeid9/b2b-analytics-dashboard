"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Sidebar from "../components/sidebar/Sidebar";
import { AuthProvider } from "../lib/auth-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
// Identify if the user is on an unauthenticated path (Added /signup)
  const isPublicPage = pathname === "/" || pathname === "/login" || pathname === "/signup";

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased max-w-full overflow-x-hidden`}>
        <AuthProvider>
          <div className="flex min-h-screen w-full max-w-full overflow-x-hidden">
            
            {/* Sidebar will automatically hide itself if it's a public page */}
            <Sidebar />
            
            {/* We completely strip layout spacing rules when viewing unauthenticated routes */}
            <main className={`flex-1 min-h-screen flex flex-col w-full max-w-full overflow-x-hidden ${isPublicPage ? "" : "md:pl-64"}`}>
              <div className={`${isPublicPage ? "" : "p-4 md:p-8"} flex-1 pb-20 md:pb-8 w-full max-w-full overflow-x-hidden flex flex-col`}>
                {children}
              </div>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}