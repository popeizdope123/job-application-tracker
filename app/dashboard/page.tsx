import DashboardContent from "@/components/dashboard-content";
import { Suspense } from "react";

export default async function Dashboard() {
  
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <DashboardContent />
    </Suspense>
  );
}