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
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Loanee",
    "PreviousYears": 574,
    "TargetThisFY": { "1stQtr": 610, "2ndQtr": 654, "3rdQtr": 695, "4thQtr": 720, "Total": 146 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Outstanding Loan",
    "PreviousYears": 102237,
    "TargetThisFY": { "1stQtr": 110938, "2ndQtr": 120981, "3rdQtr": 132068, "4thQtr": 140646, "Total": 38409 },
    "Staff": 2
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Saving",
    "PreviousYears": 30347,
    "TargetThisFY": { "1stQtr": 36610, "2ndQtr": 42343, "3rdQtr": 49526, "4thQtr": 56258, "Total": 25911 },
    "Staff": 2
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "P/L",
    "PreviousYears": 1572667,
    "TargetThisFY": { "1stQtr": 824486, "2ndQtr": 990041, "3rdQtr": 1223245, "4thQtr": 1353364, "Total": 4391136 },
    "Staff": 2
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Risk",
    "PreviousYears": 17601,
    "TargetThisFY": { "1stQtr": 16058, "2ndQtr": 14128, "3rdQtr": 11426, "4thQtr": 9883, "Total": -7718 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "NPL",
    "PreviousYears": 7132,
    "TargetThisFY": { "1stQtr": 6622, "2ndQtr": 5984, "3rdQtr": 5092, "4thQtr": 4582, "Total": -2550 },
    "Staff": 3
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Watchlist",
    "PreviousYears": 1306,
    "TargetThisFY": { "1stQtr": 1305, "2ndQtr": 1303, "3rdQtr": 1301, "4thQtr": 1300, "Total": -6 },
    "Staff": 2
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Int Due",
    "PreviousYears": 1950,
    "TargetThisFY": { "1stQtr": 1868, "2ndQtr": 1730, "3rdQtr": 1538, "4thQtr": 1400, "Total": -550 },
    "Staff": 2
  },
  {
    "Branch": "BHATEDADA BRANCH",
    "Category": "Restructu..",
    "PreviousYears": 7315,
    "TargetThisFY": { "1stQtr": 7010, "2ndQtr": 6310, "3rdQtr": 5310, "4thQtr": 4365, "Total": -2950 },
    "Staff": 3
  },
   {
    "Branch": "Chhahare Branch",
    "Category": "Member",
    "PreviousYears": 364,
    "TargetThisFY": { "1stQtr": 414, "2ndQtr": 498, "3rdQtr": 616, "4thQtr": 700, "Total": 336 },
    "Staff": 2
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Loanee",
    "PreviousYears": 180,
    "TargetThisFY": { "1stQtr": 207, "2ndQtr": 249, "3rdQtr": 308, "4thQtr": 400, "Total": 220 },
    "Staff": null
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Outstanding Loan",
    "PreviousYears": 47549,
    "TargetThisFY": { "1stQtr": 56980, "2ndQtr": 68032, "3rdQtr": 78540, "4thQtr": 90000, "Total": 42451 },
    "Staff": null
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Saving",
    "PreviousYears": 5952,
    "TargetThisFY": { "1stQtr": 8547, "2ndQtr": 12246, "3rdQtr": 16493, "4thQtr": 19800, "Total": 13848 },
    "Staff": null
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "P/L",
    "PreviousYears": 49511,
    "TargetThisFY": { "1stQtr": 134518, "2ndQtr": 257617, "3rdQtr": 422022, "4thQtr": 561336, "Total": 1375493 },
    "Staff": null
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Risk",
    "PreviousYears": 4356,
    "TargetThisFY": { "1stQtr": 3840, "2ndQtr": 3194, "3rdQtr": 2290, "4thQtr": 1774, "Total": -2582 },
    "Staff": null
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "NPL",
    "PreviousYears": 998,
    "TargetThisFY": { "1stQtr": 975, "2ndQtr": 945, "3rdQtr": 904, "4thQtr": 881, "Total": -117 },
    "Staff": null
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Watchlist",
    "PreviousYears": 1856,
    "TargetThisFY": { "1stQtr": 1648, "2ndQtr": 1387, "3rdQtr": 1021, "4thQtr": 812, "Total": -1044 },
    "Staff": null
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Int Due",
    "PreviousYears": 394,
    "TargetThisFY": { "1stQtr": 387, "2ndQtr": 376, "3rdQtr": 361, "4thQtr": 350, "Total": -44 },
    "Staff": null
  },
  {
    "Branch": "Chhahare Branch",
    "Category": "Restructu..",
    "PreviousYears": 0,
    "TargetThisFY": { "1stQtr": 0, "2ndQtr": 0, "3rdQtr": 0, "4thQtr": 0, "Total": 0 },
    "Staff": null
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
          <TableCell>{row.Staff?Math.floor(row.TargetThisFY["1stQtr"]/row.Staff) : 0}</TableCell>
          <TableCell>{row.Staff?Math.floor(row.TargetThisFY["2ndQtr"]/row.Staff) : 0}</TableCell>
          <TableCell>{row.Staff?Math.floor(row.TargetThisFY["3rdQtr"]/row.Staff) : 0}</TableCell>
          <TableCell>{row.Staff?Math.floor(row.TargetThisFY["4thQtr"]/row.Staff) : 0}</TableCell>
          <TableCell>{row.Staff?Math.floor(row.TargetThisFY["Total"]/row.Staff) : 0}</TableCell>

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
          <TableHead>Indicators</TableHead>
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