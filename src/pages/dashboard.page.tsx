import { Card } from "../components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select";
import { DashboardTable } from "./_components/dashboard_table";
import './dashboard.page.css'; // Assuming you have a CSS file for styling

import { useState } from "react";


const BRANCHES= [
"DHADING BESHI DHADING",
"Dharke Branch",
"DORAMBHA BRANCH",
"GOGANPANI DHADING",
"Jalpa Branch",
"JIRI BRANCH",
"KHANDICHAUR SINDHUPALANCHOK",
"KISPANG BRANCH",
"Majhimtar Branch",
"OKHARPAUWA BRANCH",
"Parewatar Branch",
"SIPADOL BHAKTAPUR",
"UGRA TARA KABHRE PALANCHOK",
"BHATEDADA BRANCH",
"Chhahare Branch",
]



const DashboardPage = () => {
  const [selectedBranch, setSelectedBranch] = useState<string| null>(null);

  const handleBranchChange = (value:string) => {
    setSelectedBranch(value);
  };

  return (
    <>
      <Card className="dashboard-page">
        <Select onValueChange={handleBranchChange}>
          <SelectTrigger className="w-[180px] ml-2">
            <SelectValue placeholder="Select a Branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Branches</SelectLabel>
              {BRANCHES.sort((a, b) => a.localeCompare(b)).map((branch) => (
                <SelectItem className="capitalize" key={branch} value={branch}>
                  {branch}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <DashboardTable selectedBranch={selectedBranch} />
      </Card>
    </>
  );
}

export default DashboardPage;