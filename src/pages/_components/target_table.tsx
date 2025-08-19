import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";


const BACKEND_URL = 'https://ems-backend-viey.onrender.com'


const TableData = ({ selectedBranch, selectedStaff }: {
  selectedBranch: string | null;
  selectedStaff: string | null;
}) => {

  //fetch dashboard data

  type DashboardData = {
    "Branch Name": string;
    "Staff Code": string;
    "Staff Name": string;
    "Post": string;
    "Position"?: string;
    "JobsType"?: string;
    "Monitoring"?: string;
    "Monitoring Post"?: string;
    "Indicator"?: string;
    "Full Marks"?: number;
    "Shrawan"?: number;
    "Bhadra"?: number;
    "Aswoj"?: number;
    "Kartik"?: number;
    "Mangsir"?: number;
    "Poush"?: number;
    "Magh"?: number;
    "Falgun"?: number;
    "Chaitra"?: number;
    "Baishak"?: number;
    "Jestha"?: number;
    "Ashar"?: number;
    "Total"?: number;
  };

  const [dashboard_data, setDashboardData] = useState<DashboardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/target/employee-target`); // Adjust API endpoint
        setDashboardData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);


  const filteredData = dashboard_data.filter(row => {
    const branchMatch = selectedBranch === "All" || row["Branch Name"] === selectedBranch;
    const staffMatch = !selectedStaff || row["Staff Name"] === selectedStaff;
    return branchMatch && staffMatch
  })

  return (
    <>
      {
        filteredData
          .map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row["Branch Name"]}</TableCell>
              <TableCell>{row["Staff Code"]}</TableCell>
              <TableCell>{row["Staff Name"]}</TableCell>
              <TableCell>{row["JobsType"]}</TableCell>
              <TableCell>{row["Indicator"]}</TableCell>
              <TableCell>{row["Shrawan"] !== undefined ? Number(row["Shrawan"]).toFixed(2) : "-"}</TableCell>
              <TableCell>{row["Bhadra"] !== undefined ? Number(row["Bhadra"]).toFixed(2) : "-"}</TableCell>
              <TableCell>{row["Aswoj"] !== undefined ? Number(row["Aswoj"]).toFixed(2) : "-"}</TableCell>
              <TableCell>{row["Kartik"] !== undefined ? Number(row["Kartik"]).toFixed(2) : "-"}</TableCell>
              <TableCell>{row["Mangsir"] !== undefined ? Number(row["Mangsir"]).toFixed(2) : "-"}</TableCell>
              <TableCell>{row["Poush"] !== undefined ? Number(row["Poush"]).toFixed(2) : "-"}</TableCell>
              <TableCell>{row["Magh"] !== undefined ? Number(row["Magh"]).toFixed(2) : "-"}</TableCell>
              <TableCell>{row["Falgun"] !== undefined ? Number(row["Falgun"]).toFixed(2) : "-"}</TableCell>
              <TableCell>{row["Chaitra"] !== undefined ? Number(row["Chaitra"]).toFixed(2) : "-"}</TableCell>
              <TableCell>{row["Baishak"] !== undefined ? Number(row["Baishak"]).toFixed(2) : "-"}</TableCell>
              <TableCell>{row["Jestha"] !== undefined ? Number(row["Jestha"]).toFixed(2) : "-"}</TableCell>
              <TableCell>{row["Ashar"] !== undefined ? Number(row["Ashar"]).toFixed(2) : "-"}</TableCell>
              <TableCell>{row["Total"]}</TableCell>
            </TableRow>
          ))}
    </>
  )
}

export function TargetTable({ selectedBranch, selectedStaff }: {
  selectedBranch: string | null;
  selectedStaff: string | null;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.N.</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>Staff Code</TableHead>
          <TableHead>Staff Name</TableHead>
          <TableHead>Job Type</TableHead>

          <TableHead>Indicator</TableHead>

          {/* Target This FY */}
          <TableHead>Shrawan</TableHead>
          <TableHead>Bhadra</TableHead>
          <TableHead>Aswoj</TableHead>
          <TableHead>Kartik</TableHead>
          <TableHead>Mangsir</TableHead>
          <TableHead>Poush</TableHead>
          <TableHead>Magh</TableHead>
          <TableHead>Falgun</TableHead>
          <TableHead>Chaitra</TableHead>
          <TableHead>Baishak</TableHead>
          <TableHead>Jestha</TableHead>
          <TableHead>Ashar</TableHead>

          <TableHead>Total Target </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableData selectedBranch={selectedBranch} selectedStaff={selectedStaff} />
      </TableBody>
    </Table>
  )
}