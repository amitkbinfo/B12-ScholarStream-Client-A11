import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../SharedPage/LoadingSpinner";
import ScholarshipCard from "./ScholarshipCard";

const AllScholarships = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [scholarshipCategory, setScholarshipCategory] = useState("");
  const [subjectCategory, setSubjectCategory] = useState("");
  const [location, setLocation] = useState("");
  const { data: scholarships = [], isLoading } = useQuery({
    queryKey: [
      "scholarships",
      search,
      scholarshipCategory,
      subjectCategory,
      location,
    ],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/scholarships?search=${search}&scholarshipCategory=${scholarshipCategory}&subjectCategory=${subjectCategory}&location=${location}`,
      );
      return res.data;
    },
  });

  return (
    <div className="w-10/12 mx-auto my-10 space-y-5">
      <h1 className="font-bold text-2xl text-center">All Scholarships</h1>
      <div>
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
              placeholder="Search by scholarship, university or degree..."
            />
          </label>
        </div>
        {/* Filter */}
        <div className="mt-5">
          {/* By Scholarship Category */}
          <select
            className="select w-fit select-bordered rounded-xl mr-3"
            value={scholarshipCategory}
            onChange={(e) => setScholarshipCategory(e.target.value)}
          >
            <option value="">All Scholarship Types</option>
            <option value="Full Fund">Full Fund</option>
            <option value="Partial">Partial</option>
            <option value="Self Fund">Self Fund</option>
          </select>
          {/* By Subject Category */}
          <select
            className="select w-fit select-bordered rounded-xl mr-3"
            value={subjectCategory}
            onChange={(e) => setSubjectCategory(e.target.value)}
          >
            <option value="">All Subjects</option>
            <option value="Engineering">Engineering</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business">Business</option>
            <option value="Health">Health</option>
          </select>
          {/* By Location of the University */}
          <select
            className="select w-fit select-bordered rounded-xl"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Countries</option>
            <option value="Germany">Germany</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
      </div>
      {/* ScholarshipCard */}
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : scholarships.length === 0 ? (
        <div className="flex flex-col items-center space-y-3 mt-10">
          <h1 className="text-2xl text-red-500 font-bold">
            No scholarship found for{" "}
            <span className="text-primary">"{search}"</span>!
          </h1>
          <button
            onClick={() => setSearch("")}
            className="btn btn-sm btn-primary border-none text-white shadow-none"
          >
            Search Again!
          </button>
        </div>
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
