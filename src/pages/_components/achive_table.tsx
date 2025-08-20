import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = 'https://ems-backend-viey.onrender.com'

interface DashboardRow {
  Branch: string;
  Category: string;
  "Staff Code": number;
  "Staff Name": string;
  "Job Type": string;
  "Indicator": string;
  "Shrawan": number;
  "Bhadra": number;
  "Aswoj": number;
  "Kartik": number;
  "Mangsir": number;
  "Poush": number;
  "Magh": number;
  "Falgun": number;
  "Chaitra": number;
  "Baishak": number;
  "Jestha": number;
  "Ashar": number;
  "Total Target": number;
}

const TableData = ({ selectedBranch, selectedStaff }: {
  selectedBranch: string | null;
  selectedStaff: string | null
}) => {

  //fetch dashboard data

  const [dashboard_data, setDashboardData] = useState<DashboardRow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/achieve/data`); // Adjust API endpoint
        setDashboardData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {selectedBranch === "All" ?
        dashboard_data
          .map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.Branch}</TableCell>
              <TableCell>{row["Staff Code"]}</TableCell>
              <TableCell>{row["Staff Name"]}</TableCell>
              <TableCell>{row["Job Type"]}</TableCell>
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
              <TableCell>{row["Total Target"]}</TableCell>
            </TableRow>))
        :
        dashboard_data
          .filter(data => data.Branch === selectedBranch)
          .map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.Branch}</TableCell>
              <TableCell>{row["Staff Code"]}</TableCell>
              <TableCell>{row["Staff Name"]}</TableCell>
              <TableCell>{row["Job Type"]}</TableCell>
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
              <TableCell>{row["Total Target"]}</TableCell>
            </TableRow>
          ))}
    </>
  )
}

export function AchieveTable({ selectedBranch, selectedStaff }: {
  selectedBranch: string | null;
  selectedStaff: string | null
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.N.</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>Staff Code</TableHead>
          <TableHead>Staff Name</TableHead>

          {/* Target This FY */}
          <TableHead>Job Type</TableHead>
          <TableHead>Indicator</TableHead>
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
          <TableHead>Total Target</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableData selectedBranch={selectedBranch} selectedStaff={selectedStaff} />
      </TableBody>
    </Table>
  )
}