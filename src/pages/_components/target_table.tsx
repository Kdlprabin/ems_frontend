import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";


const BACKEND_URL = 'https://ems-backend-viey.onrender.com'


const TableData = ({ selectedBranch }: {
  selectedBranch: string | null;
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

  return (
    <>
      {
        dashboard_data
          .filter(data => data["Branch Name"] === selectedBranch)
          .map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row["Branch Name"]}</TableCell>
              <TableCell>{row["Staff Code"]}</TableCell>
              <TableCell>{row["Staff Name"]}</TableCell>
              <TableCell>{row["JobsType"]}</TableCell>
              <TableCell>{row["Indicator"]}</TableCell>
              <TableCell>{row["Shrawan"]}</TableCell>
              <TableCell>{row["Bhadra"]}</TableCell>
              <TableCell>{row["Aswoj"]}</TableCell>
              <TableCell>{row["Kartik"]}</TableCell>
              <TableCell>{row["Mangsir"]}</TableCell>
              <TableCell>{row["Poush"]}</TableCell>
              <TableCell>{row["Magh"]}</TableCell>
              <TableCell>{row["Falgun"]}</TableCell>
              <TableCell>{row["Chaitra"]}</TableCell>
              <TableCell>{row["Baishak"]}</TableCell>
              <TableCell>{row["Jestha"]}</TableCell>
              <TableCell>{row["Ashar"]}</TableCell>
              <TableCell>{row["Total"]}</TableCell>
            </TableRow>
          ))}
    </>
  )
}

export function TargetTable({ selectedBranch }: {
  selectedBranch: string | null;
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
        <TableData selectedBranch={selectedBranch} />
      </TableBody>
    </Table>
  )
}