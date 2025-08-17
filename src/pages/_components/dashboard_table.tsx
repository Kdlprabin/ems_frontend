import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

const dashboard_data = [
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Member",
    "PreviousYears": 1196,
    "TargetThisFY": { "1stQtr": 1219, "2ndQtr": 1258, "3rdQtr": 1312, "4thQtr": 1350, "Total": 154 },
    "PerStaff": { "1stQtr": 23, "2ndQtr": 39, "3rdQtr": 54, "4thQtr": 38, "Total": 154 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Loanee",
    "PreviousYears": 574,
    "TargetThisFY": { "1stQtr": 610, "2ndQtr": 654, "3rdQtr": 695, "4thQtr": 720, "Total": 146 },
    "PerStaff": { "1stQtr": 36, "2ndQtr": 44, "3rdQtr": 41, "4thQtr": 25, "Total": 146 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Outstanding Loan",
    "PreviousYears": 102237,
    "TargetThisFY": { "1stQtr": 110938, "2ndQtr": 120981, "3rdQtr": 132068, "4thQtr": 140646, "Total": 38409 },
    "PerStaff": { "1stQtr": 8701, "2ndQtr": 10043, "3rdQtr": 11087, "4thQtr": 8578, "Total": 38409 },
    "Staff": 2
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Saving",
    "PreviousYears": 30347,
    "TargetThisFY": { "1stQtr": 36610, "2ndQtr": 42343, "3rdQtr": 49526, "4thQtr": 56258, "Total": 25911 },
    "PerStaff": { "1stQtr": 6263, "2ndQtr": 5733, "3rdQtr": 7183, "4thQtr": 6732, "Total": 25911 },
    "Staff": 2
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "P/L",
    "PreviousYears": 1572667,
    "TargetThisFY": { "1stQtr": 824486, "2ndQtr": 990041, "3rdQtr": 1223245, "4thQtr": 1353364, "Total": 4391136 },
    "PerStaff": { "1stQtr": 824486, "2ndQtr": 990041, "3rdQtr": 1223245, "4thQtr": 1353364, "Total": 4391136 },
    "Staff": 2
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Risk",
    "PreviousYears": 17601,
    "TargetThisFY": { "1stQtr": 16058, "2ndQtr": 14128, "3rdQtr": 11426, "4thQtr": 9883, "Total": -7718 },
    "PerStaff": { "1stQtr": -1543, "2ndQtr": -1930, "3rdQtr": -2702, "4thQtr": -1543, "Total": -7718 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "NPL",
    "PreviousYears": 7132,
    "TargetThisFY": { "1stQtr": 6622, "2ndQtr": 5984, "3rdQtr": 5092, "4thQtr": 4582, "Total": -2550 },
    "PerStaff": { "1stQtr": -510, "2ndQtr": -638, "3rdQtr": -892, "4thQtr": -510, "Total": -2550 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Watchlist",
    "PreviousYears": 1306,
    "TargetThisFY": { "1stQtr": 1305, "2ndQtr": 1303, "3rdQtr": 1301, "4thQtr": 1300, "Total": -6 },
    "PerStaff": { "1stQtr": -1, "2ndQtr": -2, "3rdQtr": -2, "4thQtr": -1, "Total": -6 },
    "Staff": 2
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Int Due",
    "PreviousYears": 1950,
    "TargetThisFY": { "1stQtr": 1868, "2ndQtr": 1730, "3rdQtr": 1538, "4thQtr": 1400, "Total": -550 },
    "PerStaff": { "1stQtr": -82, "2ndQtr": -138, "3rdQtr": -192, "4thQtr": -138, "Total": -550 },
    "Staff": 2
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Restructu..",
    "PreviousYears": 7315,
    "TargetThisFY": { "1stQtr": 7010, "2ndQtr": 6310, "3rdQtr": 5310, "4thQtr": 4365, "Total": -2950 },
    "PerStaff": { "1stQtr": -305, "2ndQtr": -700, "3rdQtr": -1000, "4thQtr": -945, "Total": -2950 },
    "Staff": 3
  }
]



const TableData = ({selectedBranch}:{
  selectedBranch: string | null;
}) => {
  return (
    <>
      {
      dashboard_data
      .filter(data => data.Branch === selectedBranch)
      .map((row, index) => (
        <TableRow key={index}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{row.Branch}</TableCell>
          <TableCell>{row.Category}</TableCell>
          <TableCell>{row.PreviousYears}</TableCell>

          {/* Target This FY */}
          <TableCell>{row.TargetThisFY["1stQtr"]}</TableCell>
          <TableCell>{row.TargetThisFY["2ndQtr"]}</TableCell>
          <TableCell>{row.TargetThisFY["3rdQtr"]}</TableCell>
          <TableCell>{row.TargetThisFY["4thQtr"]}</TableCell>
          <TableCell>{row.TargetThisFY["Total"]}</TableCell>

          {/* Per Staff */}
          <TableCell>{row.PerStaff["1stQtr"]}</TableCell>
          <TableCell>{row.PerStaff["2ndQtr"]}</TableCell>
          <TableCell>{row.PerStaff["3rdQtr"]}</TableCell>
          <TableCell>{row.PerStaff["4thQtr"]}</TableCell>
          <TableCell>{row.PerStaff["Total"]}</TableCell>

          <TableCell>{row.Staff ?? "-"}</TableCell>
        </TableRow>
      ))}
    </>
  )
}

export function DashboardTable({selectedBranch}:{
  selectedBranch: string | null;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.N.</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Previous Years</TableHead>

          {/* Target This FY */}
          <TableHead>Target 1st Qtr</TableHead>
          <TableHead>Target 2nd Qtr</TableHead>
          <TableHead>Target 3rd Qtr</TableHead>
          <TableHead>Target 4th Qtr</TableHead>
          <TableHead>Target Total</TableHead>

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