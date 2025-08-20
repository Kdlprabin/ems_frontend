import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = 'https://ems-backend-viey.onrender.com'

interface DashboardRow {
  Branch: string;
  Category: string;
  "Staff Code": number;
  "Staff Name": string;
  "Branch Name": string;
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

const MonthlyData = ({ row }: { row: DashboardRow }) => {

  const [indicators,] = useState(["Member", "Loanee"]);
  return (
    <>
      {
        indicators.includes(`${row["Indicator"]}`) ?
          <>
            <TableCell>{row["Shrawan"] !== undefined ? Math.round(row["Shrawan"]) : "-"}</TableCell>
            <TableCell>{row["Bhadra"] !== undefined ? Math.round(row["Bhadra"]) : "-"}</TableCell>
            <TableCell>{row["Aswoj"] !== undefined ? Math.round(row["Aswoj"]) : "-"}</TableCell>
            <TableCell>{row["Kartik"] !== undefined ? Math.round(row["Kartik"]) : "-"}</TableCell>
            <TableCell>{row["Mangsir"] !== undefined ? Math.round(row["Mangsir"]) : "-"}</TableCell>
            <TableCell>{row["Poush"] !== undefined ? Math.round(row["Poush"]) : "-"}</TableCell>
            <TableCell>{row["Magh"] !== undefined ? Math.round(row["Magh"]) : "-"}</TableCell>
            <TableCell>{row["Falgun"] !== undefined ? Math.round(row["Falgun"]) : "-"}</TableCell>
            <TableCell>{row["Chaitra"] !== undefined ? Math.round(row["Chaitra"]) : "-"}</TableCell>
            <TableCell>{row["Baishak"] !== undefined ? Math.round(row["Baishak"]) : "-"}</TableCell>
            <TableCell>{row["Jestha"] !== undefined ? Math.round(row["Jestha"]) : "-"}</TableCell>
            <TableCell>{row["Ashar"] !== undefined ? Math.round(row["Ashar"]) : "-"}</TableCell>
            <TableCell>{row["Total Target"] !== undefined ? Math.round(row["Total Target"]) : "-"}</TableCell>
          </> :
          <>
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
            <TableCell>{row["Total Target"] !== undefined ? Math.round(row["Total Target"]) : "-"}</TableCell>
          </>
      }
    </>
  );
}


const TableData = ({ selectedBranch, selectedStaff }: {
  selectedBranch: string | null;
  selectedStaff: string | null
}) => {

  const [staffData, setStaffData] = useState<DashboardRow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/achieve/data`);
        setStaffData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchData();
  }, []);

  // ✅ Apply filtering logic
  const filteredData = staffData.filter((row) => {
    const branchMatch = selectedBranch === "All" || row["Branch Name"] === selectedBranch;
    const staffMatch = !selectedStaff || row["Staff Name"] === selectedStaff;
    return branchMatch && staffMatch;
  });

  return (
    <>
      {selectedBranch === "All" ?
        filteredData
          .map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.Branch}</TableCell>
              <TableCell>{row["Staff Code"]}</TableCell>
              <TableCell>{row["Staff Name"]}</TableCell>
              <TableCell>{row["Job Type"]}</TableCell>
              <TableCell>{row["Indicator"]}</TableCell>
              <MonthlyData row={row} />
            </TableRow>))
        :
        filteredData
          .filter(data => data.Branch === selectedBranch)
          .map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.Branch}</TableCell>
              <TableCell>{row["Staff Code"]}</TableCell>
              <TableCell>{row["Staff Name"]}</TableCell>
              <TableCell>{row["Job Type"]}</TableCell>
              <TableCell>{row["Indicator"]}</TableCell>
              <MonthlyData row={row} />
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