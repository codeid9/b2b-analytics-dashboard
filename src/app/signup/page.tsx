"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Layers, CheckCircle2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import Navbar from "../../components/navbar/Navbar";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate an API register action
    if (name && email && password) {
      setIsSuccess(true);
      
      // Auto-redirect to login portal after a brief moment
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full">
      {/* Marketing header context */}
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 w-full max-w-md mx-auto my-auto py-12">
        <div className="flex items-center gap-2 mb-6 justify-center">
          <Layers className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-2xl tracking-tight text-slate-900">SaaSMetrics</span>
        </div>

        <Card className="bg-white border border-border shadow-lg w-full">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-900">Create Workspace Account</CardTitle>
            <CardDescription>Get started with a free sandbox environment testing profile.</CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSignup}>
            <CardContent className="space-y-4">
              {isSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-xs flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Registration successful! Redirecting to auth portal...</span>
                </div>
              )}
              
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-slate-600">Full Corporate Name</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-slate-50 border-border focus-visible:ring-1"
                  required
                  disabled={isSuccess}
                />
              </div>

              <div className="grid gap-2">
                <label className="text-xs font-semibold text-slate-600">Organization Email</label>
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-50 border-border focus-visible:ring-1"
                  required
                  disabled={isSuccess}
                />
              </div>
              
              <div className="grid gap-2">
                <label className="text-xs font-semibold text-slate-600">Access Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-50 border-border focus-visible:ring-1"
                  required
                  disabled={isSuccess}
                />
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col gap-3">
              <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800 font-medium" disabled={isSuccess}>
                Register Enterprise Node
              </Button>
              
              <p className="text-xs text-center text-slate-600 mt-2">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}