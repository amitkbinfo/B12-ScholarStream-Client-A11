import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../pages/SharedPage/LoadingSpinner";

const COLORS = [
  "#22C55E",
  "#0EA5E9",
  "#F59E0B",
  "#EF4444", 
  "#8B5CF6", 
  "#14B8A6", 
];

const Analytics = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: stats = {},
    isLoading: statsLoading,
  } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const {
    data: chartData = [],
    isLoading: chartLoading,
  } = useQuery({
    queryKey: ["chartData"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/analytics/scholarship-category"
      );
      return res.data;
    },
  });

  if (statsLoading || chartLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          Analytics Overview
        </h2>

        <p className="text-gray-500 mt-2">
          Platform statistics and scholarship insights
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-base-200">
          <h4 className="text-gray-500 font-medium">
            Total Users
          </h4>

          <p className="text-5xl font-bold text-primary mt-3">
            {stats.totalUsers || 0}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-base-200">
          <h4 className="text-gray-500 font-medium">
            Total Scholarships
          </h4>

          <p className="text-5xl font-bold text-primary mt-3">
            {stats.totalScholarships || 0}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-base-200">
          <h4 className="text-gray-500 font-medium">
            Total Applications
          </h4>

          <p className="text-5xl font-bold text-primary mt-3">
            {stats.totalApplications || 0}
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-3xl shadow-md p-8 mt-10">
        <h3 className="text-2xl font-bold mb-2">
          Scholarship Categories
        </h3>

        <p className="text-gray-500 mb-6">
          Distribution of scholarships by category
        </p>

        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={450}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="_id"
                cx="50%"
                cy="50%"
                outerRadius={140}
                innerRadius={70}
                label={({ _id, percent }) =>
                  `${_id} ${(percent * 100).toFixed(0)}%`
                }
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-80 flex items-center justify-center">
            <p className="text-gray-500">
              No analytics data available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;