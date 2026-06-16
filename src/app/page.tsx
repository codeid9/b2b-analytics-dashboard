"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Bot, ShieldCheck } from "lucide-react";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full">
      {/* Public Guest Navigation header */}
      <Navbar />

      {/* Hero Marketing Section */}
      <section className="flex-1 max-w-5xl mx-auto px-4 pt-20 pb-16 text-center flex flex-col items-center justify-center gap-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 animate-fade-in">
          Next-Generation Architecture Verified
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-3xl leading-tight">
          The AI-Driven Dashboard for Modern SaaS Enterprise
        </h1>
        
        <p className="text-base sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
          Monitor revenue streams, audit corporate analytics pipelines, and interact with smart context agents through an optimized design system ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <Link 
            href="/login" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all hover:translate-y-px"
          >
            Access Analytics Workspace <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Quick Feature Grid for Recruiters Review */}
      <section id="features" className="bg-white border-t border-border py-16 w-full">
        <div className="max-w-5xl mx-auto px-4 grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-2 p-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg w-fit border border-blue-100">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">Deep Visual Telemetry</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Multi-axis responsive charting tracking system operations and user demographic retention metrics.</p>
          </div>

          <div className="flex flex-col gap-2 p-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg w-fit border border-purple-100">
              <Bot className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">Context AI Copilot</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Deterministic natural language processing environment built to parse revenue anomalies instantly.</p>
          </div>

          <div className="flex flex-col gap-2 p-4">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg w-fit border border-emerald-100">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">Modular Component Rules</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Strict atom-based engineering guidelines optimized with clean relative linking frameworks.</p>
          </div>
        </div>
      </section>
    </div>
  );
}