import { Card } from "../components/ui/card";
import { StaffTable } from "./_components/staff_table"; // Importing the DashboardTable component
import './dashboard.page.css'; // Assuming you have a CSS file for styling

const StaffPage = () => {
  return (
    <>
      <Card className="dashboard-page">
        < StaffTable />
      </Card>
    </>
  );
}

export default StaffPage;