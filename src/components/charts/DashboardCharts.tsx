"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { revenueData, regionData } from "../../data/revenue";

export default function DashboardCharts() {
  return (
    <div className="grid gap-6 grid-cols-1 xl:grid-cols-7 w-full">
      <Card className="xl:col-span-4 bg-white border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Revenue Trend</CardTitle>
          <CardDescription>Monthly revenue growth vs target overview</CardDescription>
        </CardHeader>
        <CardContent className="h-80 w-full pr-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs text-muted-foreground" stroke="#888888" />
              <YAxis className="text-xs text-muted-foreground" stroke="#888888" tickFormatter={(v) => `$${v}`} />
              <Tooltip 
                contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", borderRadius: "var(--radius)" }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} name="Revenue" />
              <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" name="Target" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="xl:col-span-3 bg-white border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Sales By Region</CardTitle>
          <CardDescription>Top performing global distribution hubs</CardDescription>
        </CardHeader>
        <CardContent className="h-80 w-full pr-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={regionData} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="region" className="text-[10px] text-muted-foreground" stroke="#888888" tickFormatter={(v) => v.split(" ")[0]} />
              <YAxis className="text-xs text-muted-foreground" stroke="#888888" tickFormatter={(v) => `$${v}`} />
              <Tooltip 
                contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", borderRadius: "var(--radius)" }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Bar dataKey="sales" fill="#10b981" radius={[4, 4, 0, 0]} name="Sales ($)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}