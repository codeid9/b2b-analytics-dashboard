"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  trend: string;
  trendType: "up" | "down";
}

export default function KpiCard({ title, value, description, icon: Icon, trend, trendType }: KpiCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="bg-white border border-slate-200 shadow-sm h-full cursor-pointer transition-shadow hover:shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-500">{title}</CardTitle>
          <Icon className="h-4 w-4 text-slate-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-900">{value}</div>
          <p className="text-xs text-slate-500 mt-1">
            <span className={`font-semibold ${trendType === "up" ? "text-emerald-600" : "text-rose-600"}`}>
              {trend}
            </span>{" "}
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}