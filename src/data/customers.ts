export interface Customer {
  id: string;
  name: string;
  company: string;
  revenue: string;
  status: "Active" | "Pending" | "Inactive";
}

export const customersData: Customer[] = [
  { id: "1", name: "Amit Sharma", company: "Alpha Tech", revenue: "$12,500", status: "Active" },
  { id: "2", name: "Neha Patel", company: "SaaSify Inc", revenue: "$8,200", status: "Active" },
  { id: "3", name: "Rahul Verma", company: "Quantum Labs", revenue: "$19,000", status: "Pending" },
  { id: "4", name: "Priya Nair", company: "Apex Digital", revenue: "$4,100", status: "Inactive" },
  { id: "5", name: "Vikram Malhotra", company: "CloudScale", revenue: "$22,000", status: "Active" },
];