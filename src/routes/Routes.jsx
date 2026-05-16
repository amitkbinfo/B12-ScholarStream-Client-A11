import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Home/Homepage";
import AllScholarships from "../pages/AllScholarships/AllScholarships";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: "all-scholarships",
                Component: AllScholarships
            }
        ]
    }
])