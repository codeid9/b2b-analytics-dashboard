"use client";
import { DollarSign, Users, ArrowUpRight, Percent } from "lucide-react";
import KpiCard from "../../components/cards/KpiCard";
import DashboardCharts from "../../components/charts/DashboardCharts";
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Top Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-slate-500">Welcome back! Here is your business overview today.</p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title="Total Revenue"
          value="$45,231.89"
          description="from last month"
          icon={DollarSign}
          trend="+12.3%"
          trendType="up"
        />
        <KpiCard
          title="Active Customers"
          value="+2,350"
          description="new signups this week"
          icon={Users}
          trend="+18.1%"
          trendType="up"
        />
        <KpiCard
          title="MoM Growth"
          value="24.5%"
          description="compared to target"
          icon={ArrowUpRight}
          trend="+4.2%"
          trendType="up"
        />
        <KpiCard
          title="Conversion Rate"
          value="3.24%"
          description="since yesterday"
          icon={Percent}
          trend="-0.5%"
          trendType="down"
        />
      </div>
      <div className="w-full">
        <DashboardCharts />        
      </div>
    </div>
  );
}