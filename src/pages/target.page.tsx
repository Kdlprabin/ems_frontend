import { Card } from "../components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select";
import {TargetTable} from "./_components/target_table"
import './dashboard.page.css'; // Assuming you have a CSS file for styling

import { useEffect, useState } from "react";

import axios from "axios";

const BACKEND_URL = 'https://ems-backend-viey.onrender.com'


const TargetPage = () => {
  const [selectedBranch, setSelectedBranch] = useState<string| null>("BHATEDADA BRANCH");
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null)

  
  const handleBranchChange = (value: string) => {
    setSelectedBranch(value);

    if (value === "All") {
      fetchStaffData()
    } else {
      fetchStaffByBranch(value)
    }
  };

  const handleStaffChange = (value: string) => {
    setSelectedStaff(value)
  }

// Fetch branch data
  const [branchData, setBranchData] = useState<string[]>([]);

  const [staffData, setStaffData] = useState<string[]>([])

  const fetchBranchData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/branch/branches`);
      //add response data to existing data
      setBranchData(response.data)
    } catch (error) {
      console.error("Error fetching branch data:", error);
    }
  };

  const fetchStaffData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/staff/staff-name`);
      //add response data to existing data
      setStaffData(response.data)
    } catch (error) {
      console.error("Error fetching branch data:", error);
    }
  };

  const fetchStaffByBranch = async (branchName: string) => {
    try {
      const response = await axios.post((`${BACKEND_URL}/api/staff/staff-name-by-branch`),{
        branchName
      });

      //add response data to existing data
      setStaffData(response.data)
    } catch (error) {
      console.error("Error fetching branch data:", error);
    }
  }

  // Fetch branch data on component mount
  useEffect(() => {
    fetchBranchData();
    fetchStaffData();
  }, []);



  return (
    <>
      <Card className="dashboard-page">
        <div className="flex">
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
          <Select onValueChange={handleStaffChange}>
            <SelectTrigger className="w-[180px] ml-2">
              <SelectValue placeholder="Select a Staff" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Staffs</SelectLabel>
                {staffData.sort().map((staff) => (
                  <SelectItem key={staff} value={staff}>
                    {staff}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <TargetTable selectedStaff={selectedStaff} selectedBranch={selectedBranch} />
      </Card>
    </>
  );
}

export default TargetPage;