import { Card } from "../components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select";
import {TargetTable} from "./_components/target_table"
import './dashboard.page.css'; // Assuming you have a CSS file for styling

import { useEffect, useState } from "react";

import axios from "axios";

const BACKEND_URL = 'https://ems-backend-viey.onrender.com'


const TargetPage = () => {
  const [selectedBranch, setSelectedBranch] = useState<string| null>("BHATEDADA BRANCH");

  const handleBranchChange = (value:string) => {
    setSelectedBranch(value);
  };


  // Fetch branch data
  const [branchData, setBranchData] = useState<string[]>([]);

  const fetchBranchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/branch/branches`);

      setBranchData(response.data);

      console.log(response.data);
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
              {branchData.map((branch) => (
                <SelectItem key={branch} value={branch}>
                  {branch}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <TargetTable selectedBranch={selectedBranch} />
      </Card>
    </>
  );
}

export default TargetPage;