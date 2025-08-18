import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

import { useEffect, useState } from "react";
import axios from "axios";

interface Staff {
  "Staff Code": string;
  "Branch Name": string;
  "Staff Name": string;
  "Post": string;
  "JobsType": string;
  "Monitoring": string;
  "Monitoring Post": string;
  "Indicator": string;
  "Full Marks": string | number;
  "शाखाको नाम": string;
  "कर्मचारीको नाम": string;
  "पद": string;
  "सुपरिवेक्षक": string;
  "कामको प्रकार": string;
}

const {BACKEND_URL} = process.env

const TableData = ({ selectedBranch, selectedStaff }: {
  selectedBranch: string | null;
  selectedStaff: string | null;
}) => {

  const [staffData, setStaffData] = useState<Staff[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/staff/data`);
        setStaffData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchData();
  }, []);

  // ✅ Apply filtering logic
  const filteredData = staffData.filter(row => {
    const branchMatch = selectedBranch === "All" || row["Branch Name"] === selectedBranch;
    const staffMatch = !selectedStaff || row["Staff Name"] === selectedStaff;
    return branchMatch && staffMatch;
  });

  return (
    <>
      {filteredData.map((row, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{row["Staff Code"]}</TableCell>
          <TableCell>{row["Branch Name"]}</TableCell>
          <TableCell>{row["Staff Name"]}</TableCell>
          <TableCell>{row["Post"]}</TableCell>
          <TableCell>{row["JobsType"]}</TableCell>
          <TableCell>{row["Monitoring"]}</TableCell>
          <TableCell>{row["Monitoring Post"]}</TableCell>
          <TableCell>{row["Indicator"]}</TableCell>
          <TableCell>{row["Full Marks"]}</TableCell>
          <TableCell>{row["शाखाको नाम"]}</TableCell>
          <TableCell>{row["कर्मचारीको नाम"]}</TableCell>
          <TableCell>{row["पद"]}</TableCell>
          <TableCell>{row["सुपरिवेक्षक"]}</TableCell>
          <TableCell>{row["कामको प्रकार"]}</TableCell>
        </TableRow>
      ))}
    </>
  )
}

export function StaffTable({ selectedBranch, selectedStaff }: {
  selectedBranch: string | null,
  selectedStaff: string | null
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.N.</TableHead>
          <TableHead>Staff Code</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Post</TableHead>
          <TableHead>Job Type</TableHead>
          <TableHead>Monitoring</TableHead>
          <TableHead>Monitoring Post</TableHead>
          <TableHead>Indicator</TableHead>
          <TableHead>Full Marks</TableHead>
          <TableHead>शाखाको नाम</TableHead>
          <TableHead>कर्मचारीको नाम</TableHead>
          <TableHead>पद</TableHead>
          <TableHead>सुपरिवेक्षक</TableHead>
          <TableHead>कामको प्रकार</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableData selectedBranch={selectedBranch} selectedStaff={selectedStaff} />
      </TableBody>
    </Table>
  )
}
