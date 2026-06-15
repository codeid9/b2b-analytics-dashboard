"use client";

import { Save, Shield, Sliders } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-6 w-full max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-muted-foreground">Adjust system parameters, webhook URLs, and organization credentials.</p>
      </div>

      {/* Profile/Platform Variables Card */}
      <Card className="bg-white border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <Sliders className="h-4 w-4 text-slate-500" /> Organization Parameters
          </CardTitle>
          <CardDescription>Set public facing branding anchors for client logs.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">Enterprise Registry Name</label>
            <Input type="text" defaultValue="SaaSMetrics Inc." className="bg-slate-50 border-border" />
          </div>
          <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600">System Technical Webhook Alert Endpoint</label>
            <Input type="url" defaultValue="https://api.saasmetrics.io/v1/alerts" className="bg-slate-50 border-border" />
          </div>
        </CardContent>
        <CardFooter className="bg-slate-50/50 p-3 border-t border-slate-100 flex justify-end">
          <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800 flex items-center gap-1.5" onClick={() => alert("Settings values locked!")}>
            <Save className="h-4 w-4" /> Save Configuration
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}