import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

const staff_data = [
  {
    "S.N.": 1,
    "Branch": "BHATEDADA BRANCH",
    "Staff Code": 1280,
    "Staff Name": "Amar Thapa Magar"
  },
  {
    "S.N.": 2,
    "Branch": "BHATEDADA BRANCH",
    "Staff Code": 957,
    "Staff Name": "Manish Rokka"
  },
  {
    "S.N.": 3,
    "Branch": "BHATEDADA BRANCH",
    "Staff Code": 0,
    "Staff Name": ""
  },
  {
    "S.N.": 4,
    "Branch": "BHATEDADA BRANCH",
    "Staff Code": 496,
    "Staff Name": "Ishwar Biata"
  },
  {
    "S.N.": 5,
    "Branch": "Chhahare Branch",
    "Staff Code": 1245,
    "Staff Name": ""
  },
  {
    "S.N.": 6,
    "Branch": "Chhahare Branch",
    "Staff Code": 1,
    "Staff Name": "Isita Shrestha"
  },
  {
    "S.N.": 7,
    "Branch": "Chhahare Branch",
    "Staff Code": 281,
    "Staff Name": ""
  },
  {
    "S.N.": 8,
    "Branch": "DHADING BESHI DHADING",
    "Staff Code": 44,
    "Staff Name": "Laxmi Shrestha"
  },
  {
    "S.N.": 9,
    "Branch": "DHADING BESHI DHADING",
    "Staff Code": 105,
    "Staff Name": ""
  },
  {
    "S.N.": 10,
    "Branch": "DHADING BESHI DHADING",
    "Staff Code": 2222,
    "Staff Name": "Isham Man Neupane"
  }
]


export function StaffTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.N.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
       {
        staff_data.map((staff) => (
          <TableRow key={staff["Staff Code"]}>
            <TableCell>{staff["Staff Code"]}</TableCell>
            <TableCell>{staff["Staff Name"]}</TableCell>
            <TableCell>{staff["Branch"]}</TableCell>
          </TableRow>
        ))
       }
      </TableBody>
    </Table>
  )
}
