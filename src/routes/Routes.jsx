import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Home/Homepage";
import AllScholarships from "../pages/AllScholarships/AllScholarships";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ErrorPage from "../pages/SharedPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ScholarshipDetails from "../pages/AllScholarships/ScholarshipDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: "scholarships",
                Component: AllScholarships
            },
            {
                path: "scholarship/:id",
                element: <PrivateRoute><ScholarshipDetails></ScholarshipDetails></PrivateRoute>
            }
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            }
        ]
    }
])