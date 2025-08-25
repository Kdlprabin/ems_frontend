import { Card } from "../components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select";
import './dashboard.page.css'; // Assuming you have a CSS file for styling

import { useEffect, useState } from "react";
import axios from "axios";
import { ReportTable } from "./_components/report_table";

const BACKEND_URL = 'https://ems-backend-viey.onrender.com'

const MONTHS = [
  'All',
  'Shrawan',
  'Bhadra',
  'Aswoj',
  'Kartik',
  'Mangsir',
  'Poush',
  'Magh',
  'Falgun',
  'Chaitra',
  'Baishak',
  'Jestha',
  'Ashar'
]


const ReportPage = () => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>("BHATEDADA BRANCH");
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState< string | null>('Shrawan');

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

  const handleMonthChange = (value: string) => {
    setSelectedMonth(value);
  }


  // Fetch branch data
  const [branchData, setBranchData] = useState<string[]>([]);

  const [staffData, setStaffData] = useState<string[]>([]);


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
          <Select value={selectedBranch? selectedBranch : undefined} onValueChange={handleBranchChange}>
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
          <Select value={selectedStaff? selectedStaff : undefined} onValueChange={handleStaffChange}>
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
          <Select value={selectedMonth? selectedMonth: undefined} onValueChange={handleMonthChange}>
            <SelectTrigger className="w-[180px] ml-2">
              <SelectValue placeholder="Select a Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Months</SelectLabel>
                {MONTHS.map((month) => (
                  <SelectItem key={month} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        < ReportTable selectedBranch={selectedBranch} selectedStaff={selectedStaff} selectedMonth={selectedMonth} />
      </Card>
    </>
  );
}

export default ReportPage;