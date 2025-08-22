import { createBrowserRouter } from "react-router";


import MasterLayout from "./layouts/MasterLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import DashboardPage from "./pages/dashboard.page";
import StaffPage from "./pages/staff.page";
import DataPage from "./pages/data.page";
import TargetPage from "./pages/target.page";
import AchievePage from "./pages/achieve.page"
import ReportPage from "./pages/report.page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MasterLayout />,
        children: [
            {
                path: "",
                element: <DashboardLayout />,
                children: [
                    {
                        path: "",
                        element: <DashboardPage />
                    },
                    {
                        path: "staff",
                        element: <StaffPage />
                    },
                    {
                        path: "data",
                        element: <DataPage />
                    },
                    {
                        path: "target",
                        element: <TargetPage/>
                    },
                      {
                        path: "achieve",
                        element: <AchievePage/>
                    },
                    {
                        path: "report",
                        element: <ReportPage/>
                    }
                ]
            }
        ]
    }
]);

export { router };