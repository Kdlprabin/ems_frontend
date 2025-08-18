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



const TableData = ({ selectedBranch }: {
  selectedBranch: string | null;
}) => {

  //fetch dashboard data

  const [staffData, setStaffData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/staff/data"); // Adjust API endpoint
        setStaffData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {
        selectedBranch === "All"
          ? staffData.map((row, index) => (
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
          ))
          : staffData
            .filter(row => row["Branch Name"] === selectedBranch) // ✅ fixed key
            .map((row, index) => (
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
            ))
      }

    </>
  )
}



export function StaffTable({ selectedBranch }: {
  selectedBranch: string | null
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
        <TableData selectedBranch={selectedBranch} />
      </TableBody>
    </Table>
  )
}
