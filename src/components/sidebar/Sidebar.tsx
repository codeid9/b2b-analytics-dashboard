"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart3, Bot, Users, FileText, Settings, Layers } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "AI Copilot", href: "/ai-copilot", icon: Bot },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname(); 

  return (
    <>
      {/* 🖥️ DESKTOP SIDEBAR (For big screens ) */}
      <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 border-r border-slate-800 flex-col hidden justify-between md:flex z-50">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <Layers className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-xl tracking-tight">SaaSMetrics</span>
          </div>

          {/* Nav Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-white bg-slate-800 border-l-2 border-blue-500" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
          v1.0.0 • Portfolio Project
        </div>
      </aside>

      {/* 📱 MOBILE BOTTOM NAVIGATION (For small screens) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 px-2 py-2 flex justify-around items-center z-50 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 p-2 rounded-md text-[10px] font-medium transition-colors ${
                isActive ? "text-blue-500" : "text-slate-400"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="truncate max-w-13.75">{item.name.split(" ")[0]}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}