"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  isAuthenticated: boolean;
  user: { name: string; email: string; role: string } | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user session exists in localStorage on mount
    const storedAuth = localStorage.getItem("demo_auth");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
      setUser({ name: "Alex Mercer", email: "admin@saasmetrics.io", role: "Administrator" });
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    // Hardcoded credentials for recruiter testing
    if (email === "admin@saasmetrics.io" && password === "password123") {
      localStorage.setItem("demo_auth", "true");
      setIsAuthenticated(true);
      setUser({ name: "Alex Mercer", email: "admin@saasmetrics.io", role: "Administrator" });
      router.push("/dashboard");
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("demo_auth");
    setIsAuthenticated(false);
    setUser(null);
    router.push("/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-sm font-medium text-slate-500 animate-pulse">Initializing workspace secure nodes...</div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}