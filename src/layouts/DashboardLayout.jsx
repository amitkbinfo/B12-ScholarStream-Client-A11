import React from "react";
import { Link, Outlet } from "react-router";
import { ImProfile } from "react-icons/im";
import { RiMailSendFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdAssignmentAdd, MdRateReview } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import useUserRole from "../hooks/useUserRole";
import LoadingSpinner from "../pages/SharedPage/LoadingSpinner";
import { FaUsersCog, FaChartPie } from "react-icons/fa";
const DashboardLayout = () => {
  const [role, isLoading] = useUserRole();
  if (isLoading) {
    return <LoadingSpinner />;
  }

  const dashboardLinks = (
    <>
      {role === "Admin" && (
        <>
          {/* My Profile */}
          <li>
            <Link
              to={"my-profile"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="My Profile"
            >
              <ImProfile className="text-xl" />
              <span className="is-drawer-close:hidden">My Profile</span>
            </Link>
          </li>

          {/* Add Scholarship */}
          <li>
            <Link
              to={"add-scholarship"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Add Scholarship"
            >
              <MdAssignmentAdd className="text-xl" />
              <span className="is-drawer-close:hidden">Add Scholarship</span>
            </Link>
          </li>

          {/* Manage Scholarships */}
          <li>
            <Link
              to={"manage-scholarships"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Manage Scholarship"
            >
              <FaUserGraduate className="text-xl" />
              <span className="is-drawer-close:hidden">
                Manage Scholarships
              </span>
            </Link>
          </li>

          {/* Manage Users */}
          <li>
            <Link
              to={"manage-users"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Manage Users"
            >
              <FaUsersCog className="text-xl" />
              <span className="is-drawer-close:hidden">Manage Users</span>
            </Link>
          </li>

          {/* Analytics */}
          <li>
            <Link
              to={"analytics"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Analytics"
            >
              <FaChartPie className="text-xl" />
              <span className="is-drawer-close:hidden">Analytics</span>
            </Link>
          </li>
        </>
      )}
      {role === "Moderator" && (
        <>
          {/* My Profile */}
          <li>
            <Link
              to={"my-profile"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="My Profile"
            >
              <ImProfile className="text-xl" />
              <span className="is-drawer-close:hidden">My Profile</span>
            </Link>
          </li>

          {/* Manage Applications */}
          <li>
            <Link
              to={"manage-applications"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Manage Applications"
            >
              <RiMailSendFill className="text-xl" />
              <span className="is-drawer-close:hidden">
                Manage Applications
              </span>
            </Link>
          </li>

          {/* All Reviews */}
          <li>
            <Link
              to={"all-reviews"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="All Reviews"
            >
              <MdRateReview className="text-xl" />
              <span className="is-drawer-close:hidden">All Reviews</span>
            </Link>
          </li>
        </>
      )}
      {role === "Student" && (
        <>
          {/* My Profile */}
          <li>
            <Link
              to={"my-profile"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="My Profile"
            >
              <ImProfile className="text-xl" />
              <span className="is-drawer-close:hidden">My Profile</span>
            </Link>
          </li>

          {/* My Applications */}
          <li>
            <Link
              to={"my-applications"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="My Applications"
            >
              <RiMailSendFill className="text-xl" />
              <span className="is-drawer-close:hidden">My Applications</span>
            </Link>
          </li>

          {/* My Reviews */}
          <li>
            <Link
              to={"my-reviews"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="My Reviews"
            >
              <MdRateReview className="text-xl" />
              <span className="is-drawer-close:hidden">My Reviews</span>
            </Link>
          </li>

          {/* Payment History */}
          <li>
            <Link
              to={"payment-history"}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Payment History"
            >
              <RiMoneyDollarCircleFill className="text-2xl" />
              <span className="is-drawer-close:hidden">Payment History</span>
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-[#E7F7FF]">
      <div className="w-/12 mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Navbar */}
            <nav className="navbar w-full bg-green-200">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                {/* Sidebar toggle icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 10l2 2l-2 2"></path>
                </svg>
              </label>
              <div className="px-4">My Dashboard</div>
            </nav>
            {/* Page content here */}
            <Outlet></Outlet>
          </div>
          <div className="drawer-side is-drawer-close:overflow-visible">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="flex min-h-full flex-col items-start is-drawer-close:w-14 is-drawer-open:w-60 bg-green-200">
              {/* Sidebar content here */}
              <ul className="menu w-full grow space-y-2">
                {/* List item */}
                <li>
                  <Link
                    to={"/"}
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Homepage"
                  >
                    {/* Home icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="my-1.5 inline-block size-4"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    <span className="is-drawer-close:hidden">Homepage</span>
                  </Link>
                </li>

                {/* Our Dashboard Link */}
                {dashboardLinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
