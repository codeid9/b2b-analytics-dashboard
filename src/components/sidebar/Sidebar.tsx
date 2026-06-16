"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart3, Bot, Users, FileText, Settings, Layers, LogOut } from "lucide-react";
import { useAuth } from "../../lib/auth-context";

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
  const { isAuthenticated, logout, user } = useAuth();

  // Completely hide navigation elements if unauthenticated or on public pages
  if (!isAuthenticated || pathname === "/" || pathname === "/login") return null;

  return (
    <>
      {/* Desktop Sidebar Container */}
      <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 border-r border-slate-800 flex-col justify-between hidden md:flex z-50">
        <div className="p-6">
          {/* Main Logo Branding Layout */}
          <div className="flex items-center gap-2 mb-8">
            <Layers className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-xl tracking-tight">SaaSMetrics</span>
          </div>

          {/* Navigation Matrix mapping links */}
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

        {/* 🔑 Safe logout element zone inside the flex container */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/40 space-y-3">
          <div className="flex flex-col pl-2">
            <span className="text-xs font-semibold text-slate-200">{user?.name}</span>
            <span className="text-[10px] text-slate-500 truncate">{user?.email}</span>
          </div>
          <button 
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-950/20 transition-colors cursor-pointer border-none bg-transparent text-left"
          >
            <LogOut className="h-4 w-4" />
            Sign Out Session
          </button>
        </div>
      </aside>

      {/* Mobile Navigation Footer Bar */}
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