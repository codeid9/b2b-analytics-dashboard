"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { revenueData, regionData } from "../../data/revenue";

// Color palette definitions matching the design system
const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

// Map colors directly into the dataset to eliminate the deprecated Cell component
const coloredRegionData = regionData.map((item, index) => ({
  ...item,
  fill: COLORS[index % COLORS.length]
}));

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Deep Analytics</h1>
        <p className="text-muted-foreground">Advanced data visualization models and regional traffic matrix.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* User Activity Area Chart */}
        <Card className="bg-white border border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">User Activity Trend</CardTitle>
            <CardDescription>Live session loads and active customer platform telemetry.</CardDescription>
          </CardHeader>
          <CardContent className="h-75 pr-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs text-muted-foreground" stroke="#888888" />
                <YAxis className="text-xs text-muted-foreground" stroke="#888888" />
                <Tooltip contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", borderRadius: "var(--radius)" }} />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="#dbeafe" strokeWidth={2} name="Active Sessions" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Customer Demographics Pie/Donut Chart */}
        <Card className="bg-white border border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Customer Demographics</CardTitle>
            <CardDescription>Market share distribution across major target regions.</CardDescription>
          </CardHeader>
          <CardContent className="h-75 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={coloredRegionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="sales"
                  nameKey="region"
                />
                <Tooltip contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", borderRadius: "var(--radius)" }} />
              </PieChart>
            </ResponsiveContainer>

            {/* Custom structural legend for UI consistency */}
            <div className="flex flex-col gap-2 pr-6 text-xs font-medium">
              {coloredRegionData.map((item) => (
                <div key={item.region} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                  <span className="text-slate-600">{item.region.split(" ")[0]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}