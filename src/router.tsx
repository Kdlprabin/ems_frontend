import { createBrowserRouter } from "react-router";


import AuthLayout from "./layouts/AuthLayout";
import MasterLayout from "./layouts/MasterLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import DashboardPage from "./pages/dashboard.page";
import LoginPage from "./pages/login.page";
import StaffPage from "./pages/staff.page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MasterLayout />,
        children: [
            {
                path: "",
                element: <DashboardLayout/>,
                children: [
                    {
                        path: "",
                        element: <DashboardPage />
                    },
                    {
                        path: "staff",
                        element: <StaffPage />
                    }
                ]
            },
            {
                path: "login",
                element: <AuthLayout />,
                children: [
                    {
                        path: "",
                        element: <LoginPage />
                    }
                ]
            }
        ]
    }
]);

export { router };