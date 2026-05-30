import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../SharedPage/LoadingSpinner";
import ScholarshipCard from "./ScholarshipCard";

const AllScholarships = () => {
  const axiosSecure = useAxiosSecure();
  const { data: scholarships = [], isLoading } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get("/scholarships");
      return res.data;
    },
  });

  return (
    <div className="w-10/12 mx-auto my-10 space-y-5">
      <h1 className="font-bold text-2xl text-center">All Scholarships</h1>
      {/* Search */}
      <div className="w-fit mx-auto">
        <label className="input w-100 rounded-xl border-primary outline-none">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search by scholarship, university or degree..."
          />
        </label>
      </div>
      {/* ScholarshipCard */}
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {scholarships.map((scholarship) => (
            <ScholarshipCard
              key={scholarship._id}
              scholarship={scholarship}
            ></ScholarshipCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllScholarships;
