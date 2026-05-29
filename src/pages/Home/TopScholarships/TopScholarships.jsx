import React from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../SharedPage/LoadingSpinner";
import ScholarshipCard from "../../AllScholarships/ScholarshipCard";

const TopScholarships = () => {
  const axiosSecure = useAxiosSecure();
  const { data: scholarships = [], isLoading } = useQuery({
    queryKey: ["topScholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get("/scholarships?limit=6");
      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="my-10">
      <div className="md:w-10/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Top Scholarships</h2>

          <p className="text-accent mt-4">
            Discover the latest scholarship opportunities.
          </p>
        </div>
        {/*  Top Scholarships */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
          {scholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship._id} scholarship={scholarship} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/scholarships"
            className="btn shadow-none border-primary text-primary hover:btn-primary hover:text-white hover:border-none px-6 rounded-lg"
          >
            View All Scholarships
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopScholarships;
