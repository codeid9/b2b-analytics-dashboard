import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirect the root path directly to the dashboard page
  redirect("/dashboard");
}