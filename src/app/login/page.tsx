"use client";

import { useState } from "react";
import Link from "next/link";
import { Layers, AlertCircle } from "lucide-react";
import { useAuth } from "../../lib/auth-context";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import Navbar from "../../components/navbar/Navbar";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("admin@saasmetrics.io");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const success = login(email, password);
    if (!success) {
      setError("Invalid credential tracking signatures. Verify user profile inputs.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full">
      {/* 1. Added the marketing Navbar right at the top */}
      <Navbar />

      {/* 2. Form container adjusted to center perfectly below the Navbar */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 w-full max-w-md mx-auto my-auto py-12">
        <div className="flex items-center gap-2 mb-6 justify-center">
          <Layers className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-2xl tracking-tight text-slate-900">SaaSMetrics</span>
        </div>

        <Card className="bg-white border border-border shadow-lg w-full">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-900">Workspace Authentication</CardTitle>
            <CardDescription>Enter platform credentials to unlock dashboard system states.</CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
              
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-slate-600">Secure Identity Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-50 border-border focus-visible:ring-1"
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-slate-600">Account Access Token Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-50 border-border focus-visible:ring-1"
                  required
                />
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col gap-3">
              <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800 font-medium">
                Initialize Portal Access
              </Button>
              
              {/* Link to the new Sign Up page */}
              <p className="text-xs text-center text-slate-600 mt-2">
                New to the platform?{" "}
                <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                  Create an account
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}