"use client";

import { FileText, Download, CheckCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";

const mockReports = [
  { id: "R-2026-01", name: "Q1 Financial Audit Summary", date: "June 02, 2026", size: "2.4 MB" },
  { id: "R-2026-02", name: "Customer Acquisition Performance", date: "May 28, 2026", size: "1.8 MB" },
  { id: "R-2026-03", name: "Enterprise Churn & Retention Vectors", date: "May 15, 2026", size: "4.1 MB" },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6 w-full max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Generated Reports</h1>
        <p className="text-muted-foreground">Export or review systemic business telemetry logs and legal audits.</p>
      </div>

      <Card className="bg-white border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Available Documents</CardTitle>
          <CardDescription>Click to instantly request an automated PDF download stream.</CardDescription>
        </CardHeader>
        <CardContent className="divide-y divide-slate-100">
          {mockReports.map((report) => (
            <div key={report.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 text-slate-700 rounded-lg">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{report.name}</h3>
                  <p className="text-xs text-muted-foreground">{report.id} • Generated on {report.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-500 font-mono">{report.size}</span>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex items-center gap-1.5 text-xs hover:bg-slate-50 border-border"
                  onClick={() => alert(`Downloading mock package ${report.id}...`)}
                >
                  <Download className="h-3.5 w-3.5" /> Download
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}