import { Card } from "../components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select";
import { DashboardTable } from "./_components/dashboard_table";
import './dashboard.page.css'; // Assuming you have a CSS file for styling

import { useState , useEffect} from "react";

import axios from "axios";

const BACKEND_URL = 'https://ems-backend-viey.onrender.com'


const DashboardPage = () => {
  const [selectedBranch, setSelectedBranch] = useState<string| null>("BHATEDADA BRANCH");

  const handleBranchChange = (value:string) => {
    setSelectedBranch(value);
  };


  // Fetch branch data
  const [branchData, setBranchData] = useState<string[]>([]);

  const fetchBranchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/branch/branches`);
      //add response data to existing data
      setBranchData(response.data)
    } catch (error) {
      console.error("Error fetching branch data:", error);
    } 
  };

  // Fetch branch data on component mount
  useEffect(() => {
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
              {branchData.sort().map((branch) => (
                <SelectItem key={branch} value={branch}>
                  {branch}
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

export default DashboardPage;