"use client";

import Link from "next/link";
import { Layers } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-border sticky top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-blue-600" />
          <span className="font-bold text-lg tracking-tight text-slate-900">SaaSMetrics</span>
        </Link>

        {/* Public Navigation Links */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-slate-900 transition-colors">Documentation</a>
        </nav>

        {/* Call to Actions */}
        <div className="flex items-center gap-3">
          <Link 
            href="/login" 
            className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/signup" 
            className="text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}