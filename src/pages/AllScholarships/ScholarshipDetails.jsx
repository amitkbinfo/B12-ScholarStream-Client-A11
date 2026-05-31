import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../SharedPage/LoadingSpinner";
import {
  FaCalendarDays,
  FaGraduationCap,
  FaLocationDot,
  FaRankingStar,
} from "react-icons/fa6";
import { MdOutlineSubject } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import Reviews from "../Reviews/Reviews";

const ScholarshipDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: scholarship = {}, isLoading } = useQuery({
    queryKey: ["scholarship", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarships/${id}`);
      return res.data;
    },
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${id}`);

      return res.data;
    },
  });
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const {
    scholarshipName,
    universityName,
    universityImage,
    universityCountry,
    universityCity,
    universityWorldRank,
    scholarshipCategory,
    subjectCategory,
    degree,
    tuitionFees,
    applicationFees,
    serviceCharge,
    applicationDeadline,
    scholarshipDescription,
    stipend,
  } = scholarship;
  return (
    <div className="min-h-screen bg-base-100">
      <div className="px-5 md:px-0 md:w-10/12 mx-auto my-10">
        {/* Hero */}
        <div className="bg-[#e7f7ff] rounded-2xl p-8">
          <img
            src={universityImage}
            alt={universityName}
            className="w-full h-112 object-cover rounded-xl"
          />

          <div className="mt-6">
            <h1 className="text-xl md:text-4xl font-bold">{scholarshipName}</h1>

            <h3 className="text-lg md:text-xl mt-2 text-gray-600">
              {universityName}
            </h3>

            <p className="mt-3 text-gray-500 flex items-center gap-2">
              <FaLocationDot className="text-[#F53871]" /> {universityCity},{" "}
              {universityCountry}
            </p>
          </div>
        </div>
        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-col-4 gap-5 mt-10">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h4 className="font-semibold flex items-center gap-2">
              <FaRankingStar className="text-2xl" />
              World Rank
            </h4>
            <p className="text-xl mt-2">#{universityWorldRank}</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h4 className="font-semibold badge badge-outline flex items-center gap-2">
              <FaGraduationCap className="text-xl" />
              Degree
            </h4>
            <p className="text-lg mt-2">{degree}</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h4 className="font-semibold flex items-center gap-2">
              <TbCategoryFilled className="text-xl" />
              Scholarship Category
            </h4>
            <p className="mt-2 badge badge-primary text-white">
              {scholarshipCategory}
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h4 className="font-semibold flex items-center gap-2">
              <MdOutlineSubject className="text-2xl" />
              Subject Category
            </h4>
            <p className="mt-2">{subjectCategory}</p>
          </div>
        </div>
        {/* Fees */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h4 className="font-semibold">Tuition Fee</h4>
            <p className="text-primary font-semibold mt-2">
              {tuitionFees === 0 ? (
                <span className="text-green-600">Fully Covered</span>
              ) : (
                `$${tuitionFees}`
              )}
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h4 className="font-semibold">Application Fee</h4>
            <p className="text-primary font-semibold mt-2">
              ${applicationFees}
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h4 className="font-semibold">Service Charge</h4>
            <p className="text-primary font-semibold mt-2">${serviceCharge}</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h4 className="flex items-center gap-2 font-semibold">
              <FaCalendarDays />
              Deadline
            </h4>
            <p className="font-semibold text-red-500 mt-2">
              {applicationDeadline}
            </p>
          </div>
        </div>
        {/* Description */}
        <div className="bg-white rounded-2xl p-8 mt-10 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Scholarship Description</h2>

          <p className="text-gray-600 leading-8">{scholarshipDescription}</p>
        </div>
        {/* Coverage */}
        <div className="bg-white rounded-2xl p-8 mt-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Coverage & Benefits</h2>

          <p className="text-gray-600 leading-8">{stipend}</p>
        </div>
        {/* Apply */}
        <div className="text-center mt-10">
          <Link
            to={`/apply-scholarship/${id}`}
            className="btn btn-primary border-none shadow-none text-white px-10"
          >
            Apply For Scholarship
          </Link>
        </div>
        {/* Reviews */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>

          {reviews.length > 0 ? (
            <Reviews reviews={reviews}></Reviews>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <h3 className="text-xl font-semibold">No Reviews Yet</h3>

              <p className="text-gray-500 mt-2">
                Be the first student to share an experience.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
