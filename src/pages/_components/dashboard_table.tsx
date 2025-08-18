import {Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";


interface DashboardRow {
  Branch: string;
  Category: string;
  "Previous Years": number;
  "Target 1st Qtr": number;
  "Target 2nd Qtr": number;
  "Target 3rd Qtr": number;
  "Target 4th Qtr": number;
  "Target Total": number;
  "Per Branch 1st Qtr": number;
  "Per Branch 2nd Qtr": number;
  "Per Branch 3rd Qtr": number;
  "Per Branch 4th Qtr": number;
  "Per Branch Total": number;
  "Per Staff 1st Qtr": number;
  "Per Staff 2nd Qtr": number;
  "Per Staff 3rd Qtr": number;
  "Per Staff 4th Qtr": number;
  "Per Staff Total": number;
  Staff: string;
}

const TableData = ({ selectedBranch }: {
  selectedBranch: string | null;
}) => {

    //fetch dashboard data

    const [dashboard_data, setDashboardData] = useState<DashboardRow[]>([]);

     useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ems-backend-viey.onrender.com/api/data/data"); // Adjust API endpoint
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
                <TableCell>{index +1}</TableCell>
                <TableCell>{row.Branch}</TableCell>
                <TableCell>{row.Category}</TableCell>
                <TableCell>{Math.round(row["Previous Years"])}</TableCell>
                <TableCell>{Math.round(row["Target 1st Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Target 2nd Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Target 3rd Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Target 4th Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Target Total"])}</TableCell>
                <TableCell>{Math.round(row["Per Branch 1st Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Branch 2nd Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Branch 3rd Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Branch 4th Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Branch Total"])}</TableCell>
                <TableCell>{Math.round(row["Per Staff 1st Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Staff 2nd Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Staff 3rd Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Staff 4th Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Staff Total"])}</TableCell>
                <TableCell>{row.Staff}</TableCell>
            </TableRow>))
      :
        dashboard_data
          .filter(data => data.Branch === selectedBranch)
          .map((row, index) => (
            <TableRow key={index}>
                <TableCell>{index +1}</TableCell>
                <TableCell>{row.Branch}</TableCell>
                <TableCell>{row.Category}</TableCell>
                <TableCell>{Math.round(row["Previous Years"])}</TableCell>
                <TableCell>{Math.round(row["Target 1st Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Target 2nd Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Target 3rd Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Target 4th Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Target Total"])}</TableCell>
                <TableCell>{Math.round(row["Per Branch 1st Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Branch 2nd Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Branch 3rd Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Branch 4th Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Branch Total"])}</TableCell>
                <TableCell>{Math.round(row["Per Staff 1st Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Staff 2nd Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Staff 3rd Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Staff 4th Qtr"])}</TableCell>
                <TableCell>{Math.round(row["Per Staff Total"])}</TableCell>
                <TableCell>{row.Staff}</TableCell>
            </TableRow>
          ))}
    </>
  )
}

export function DashboardTable({ selectedBranch }: {
  selectedBranch: string | null;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.N.</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>Indicators</TableHead>
          <TableHead>Previous Years</TableHead>

          {/* Target This FY */}
          <TableHead>Target 1st Qtr</TableHead>
          <TableHead>Target 2nd Qtr</TableHead>
          <TableHead>Target 3rd Qtr</TableHead>
          <TableHead>Target 4th Qtr</TableHead>
          <TableHead>Target Total</TableHead>

          {/* Target per branch*/}
          <TableHead>Per Branch 1st Qtr</TableHead>
          <TableHead>Per Branch 2nd Qtr</TableHead>
          <TableHead>Per Branch 3rd Qtr</TableHead>
          <TableHead>Per Branch 4th Qtr</TableHead>
          <TableHead>Per Branch Total</TableHead>

          {/* Per Staff */}
          <TableHead>Per Staff 1st Qtr</TableHead>
          <TableHead>Per Staff 2nd Qtr</TableHead>
          <TableHead>Per Staff 3rd Qtr</TableHead>
          <TableHead>Per Staff 4th Qtr</TableHead>
          <TableHead>Per Staff Total</TableHead>

          <TableHead>Staff</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableData selectedBranch={selectedBranch} />
      </TableBody>
    </Table>
  )
}