import { Card } from "../components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select";
import { DashboardTable } from "./_components/dashboard_table";
import './dashboard.page.css'; // Assuming you have a CSS file for styling

import { useState } from "react";

import axios from "axios";


const TargetPage = () => {
  const [selectedBranch, setSelectedBranch] = useState<string| null>("BHATEDADA BRANCH");

  const handleBranchChange = (value:string) => {
    setSelectedBranch(value);
  };


  // Fetch branch data
  const [branchData, setBranchData] = useState<any[]>([]);

  const fetchBranchData = async () => {
    try {
      const response = await axios.get("https://ems-backend-kdlprabin.onrender.com/api/branch/branches");

      setBranchData(response.data);

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching branch data:", error);
    } 
  };

  // Fetch branch data on component mount
  useState(() => {
    fetchBranchData();
  }, []);

  return (
    <>
      <Card className="dashboard-page">
        <Select onValueChange={handleBranchChange}>
          <SelectTrigger className="w-[180px] ml-2">
            <SelectValue placeholder="Select a Branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Branches</SelectLabel>
              {branchData.map((branch) => (
                <SelectItem key={branch._id} value={branch.branch_name}>
                  {branch.branch_name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <DashboardTable selectedBranch={selectedBranch} />
      </Card>
    </>
  );
}

export default TargetPage;