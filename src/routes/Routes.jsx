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
import DashboardLayout from "../layouts/DashboardLayout";
import MyProfile from "../Dashboard/MyProfile";
import MyApplications from "../Dashboard/MyApplications";
import MyReviews from "../Dashboard/MyReviews";
import PaymentHistory from "../Dashboard/Payment/PaymentHistory";
import AddScholarship from "../Dashboard/Scholarships/AddScholarship";
import ManageScholarships from "../Dashboard/Scholarships/ManageScholarships";
import ManageUsers from "../Dashboard/Admin/ManageUsers/ManageUsers";
import Analytics from "../Dashboard/Admin/Analytics";
import ManageApplications from "../Dashboard/Moderator/ManageApplications";
import AllReviews from "../Dashboard/Moderator/AllReviews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "scholarships",
        Component: AllScholarships,
      },
      {
        path: "scholarship/:id",
        element: (
          <PrivateRoute>
            <ScholarshipDetails></ScholarshipDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        path: "my-profile",
        Component: MyProfile,
      },
      {
        path: "add-scholarship",
        Component: AddScholarship,
      },
      {
        path: "manage-scholarships",
        Component: ManageScholarships,
      },
      {
        path: "manage-users",
        Component: ManageUsers,
      },
      {
        path: "analytics",
        Component: Analytics,
      },
      {
        path: "manage-applications",
        Component: ManageApplications,
      },
      {
        path: "all-reviews",
        Component: AllReviews,
      },
      {
        path: "my-applications",
        Component: MyApplications,
      },
      {
        path: "my-reviews",
        Component: MyReviews,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
    ],
  },
]);
