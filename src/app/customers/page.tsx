"use client";

import { useState } from "react";
import { Search, UserCheck, UserX, Clock } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { customersData, Customer } from "../../data/customers"; 

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customersData.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusStyles = (status: Customer["status"]) => {
    switch (status) {
      case "Active":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Pending":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Inactive":
        return "bg-rose-50 text-rose-700 border-rose-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const getStatusIcon = (status: Customer["status"]) => {
    switch (status) {
      case "Active":
        return <UserCheck className="h-3 w-3 mr-1 inline" />;
      case "Pending":
        return <Clock className="h-3 w-3 mr-1 inline" />;
      case "Inactive":
        return <UserX className="h-3 w-3 mr-1 inline" />;
    }
  };

  return (
    <div className="space-y-6 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Customers</h1>
        <p className="text-muted-foreground">Manage accounts, client revenue stream, and subscription flags.</p>
      </div>

      <Card className="bg-white border border-border shadow-sm">
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">Client Registry</CardTitle>
            <CardDescription>A real-time comprehensive list of registered enterprises.</CardDescription>
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or company..."
              className="pl-9 bg-slate-50 border-border focus-visible:ring-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="rounded-md border border-border w-full overflow-x-auto no-scrollbar">
            <div className="min-w-150 inline-block vertical-align-middle w-full">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="font-semibold text-slate-700">Name</TableHead>
                  <TableHead className="font-semibold text-slate-700">Company</TableHead>
                  <TableHead className="font-semibold text-slate-700">Revenue</TableHead>
                  <TableHead className="font-semibold text-slate-700">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((customer) => (
                    <TableRow key={customer.id} className="hover:bg-slate-50/50 transition-colors">
                      <TableCell className="font-medium text-foreground">{customer.name}</TableCell>
                      <TableCell className="text-slate-600">{customer.company}</TableCell>
                      <TableCell className="font-semibold text-slate-900">{customer.revenue}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles(customer.status)}`}>
                          {getStatusIcon(customer.status)}
                          {customer.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                      No customer entities matching your query found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}