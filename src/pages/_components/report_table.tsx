import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";

interface MonthlyData {
  month: string;
  target: string | number;
  achieve: string | number;
  achievePercent: string | number;
  fullMarks: string | number;
  result: string;
}

interface Staff {
  "Staff Code": string;
  "Staff Name": string;
  "Post": string;
  "JobsType": string;
  "Indicator": string;
  "Branch Name": string;
  monthly: MonthlyData[];
}

const BACKEND_URL = "https://ems-backend-viey.onrender.com";

const TableData = ({
  selectedBranch,
  selectedStaff,
  selectedMonth,
}: {
  selectedBranch: string | null;
  selectedStaff: string | null;
  selectedMonth: string | null;
}) => {
  const [staffData, setStaffData] = useState<Staff[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/data/report-data`);
        setStaffData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchData();
  }, []);

  // Filter by branch & staff
  const filteredData = staffData.filter((row) => {
    const branchMatch = selectedBranch === "All" || row["Branch Name"] === selectedBranch;
    const staffMatch = !selectedStaff || row["Staff Name"] === selectedStaff;
    return branchMatch && staffMatch;
  });

  return (
    <>
      {filteredData.map((row, index) => {
        // Filter months based on selectedMonth
        const filteredMonths =
          !selectedMonth || selectedMonth === "All"
            ? row.monthly
            : row.monthly.filter((monthData) => monthData.month === selectedMonth);

        return filteredMonths.map((monthData, mIndex) => (
          <TableRow key={`${index}-${mIndex}`}>
            {mIndex === 0 && (
              <>
                <TableCell rowSpan={filteredMonths.length}>{index + 1}</TableCell>
                <TableCell rowSpan={filteredMonths.length}>{row["Staff Code"]}</TableCell>
                <TableCell rowSpan={filteredMonths.length}>{row["Staff Name"]}</TableCell>
                <TableCell rowSpan={filteredMonths.length}>{row["Post"]}</TableCell>
                <TableCell rowSpan={filteredMonths.length}>{row["JobsType"]}</TableCell>
                <TableCell rowSpan={filteredMonths.length}>{row["Indicator"]}</TableCell>
              </>
            )}
            <TableCell>{monthData.month}</TableCell>
            <TableCell>{monthData.target ? Math.round(Number(monthData.target)) : 0}</TableCell>
            <TableCell>{monthData.achieve ? Math.round(Number(monthData.achieve)) : 0}</TableCell>
            <TableCell>{monthData.achievePercent}%</TableCell>
            <TableCell>{monthData.fullMarks}</TableCell>
            <TableCell>{monthData.result}</TableCell>
          </TableRow>
        ));
      })}
    </>
  );
};

export function ReportTable({
  selectedBranch,
  selectedStaff,
  selectedMonth,
}: {
  selectedBranch: string | null;
  selectedStaff: string | null;
  selectedMonth: string | null;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.N.</TableHead>
          <TableHead>Staff Code</TableHead>
          <TableHead>Staff Name</TableHead>
          <TableHead>Post</TableHead>
          <TableHead>JobsType</TableHead>
          <TableHead>Indicator</TableHead>
          <TableHead>Month</TableHead>
          <TableHead>Target</TableHead>
          <TableHead>Achieve</TableHead>
          <TableHead>Achieve %</TableHead>
          <TableHead>Full Marks</TableHead>
          <TableHead>Result</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableData
          selectedBranch={selectedBranch}
          selectedStaff={selectedStaff}
          selectedMonth={selectedMonth}
        />
      </TableBody>
    </Table>
  );
}
