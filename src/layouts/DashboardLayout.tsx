import { Outlet } from "react-router";
// import { AppSidebar } from "./_components/app-sidebar";
import "./dashboard.layout.css"; // Assuming you have a CSS file for styling

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      {/* <AppSidebar /> */}
      {/* <main> */}
        <Outlet />
      {/* </main> */}
    </div>
  );
}
