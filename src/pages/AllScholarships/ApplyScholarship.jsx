import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../SharedPage/LoadingSpinner";

const ApplyScholarship = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: scholarship = {}, isLoading } = useQuery({
    queryKey: ["scholarship", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarships/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const onSubmit = async (data) => {
    const applicationData = {
      scholarshipId: scholarship._id,
      scholarshipName: scholarship.scholarshipName,
      universityName: scholarship.universityName,
      universityCountry: scholarship.universityCountry,
      universityCity: scholarship.universityCity,
      subjectCategory: scholarship.subjectCategory,
      scholarshipCategory: scholarship.scholarshipCategory,
      applicationFees: scholarship.applicationFees,
      serviceCharge: scholarship.serviceCharge,
      applicantName: user?.displayName,
      applicantEmail: user?.email,
      applicantPhone: data.phone,
      applicantPhoto: data.photo,
      applicantAddress: data.address,
      gender: data.gender,
      applyingDegree: data.degree,
      sscResult: data.ssc,
      hscResult: data.hsc,
      studyGap: data.studyGap,
      paymentStatus: "unpaid",
      applicationStatus: "pending",
      feedback: "",
      appliedAt: new Date(),
    };

    const res = await axiosSecure.post("/applications", applicationData);

    if (res.data.insertedId) {
      toast.success("Application Submitted Successfully");

      navigate(`/dashboard/payment/${res.data.insertedId}`);
    }
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10">
      <div className="bg-[#E7F7FF] rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Apply For Scholarship
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 gap-5"
        >
          {/* Scholarship Info */}

          <fieldset className="fieldset">
            <label className="label text-black">Scholarship Name</label>

            <input
              type="text"
              value={scholarship.scholarshipName || ""}
              readOnly
              className="input w-full rounded-lg border-none outline-none"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-black">University Name</label>

            <input
              type="text"
              value={scholarship.universityName || ""}
              readOnly
              className="input w-full rounded-lg border-none outline-none"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-black">Subject Category</label>

            <input
              type="text"
              value={scholarship.subjectCategory || ""}
              readOnly
              className="input w-full rounded-lg border-none outline-none"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-black">Application Fee</label>

            <input
              type="text"
              value={`$${scholarship.applicationFees}`}
              readOnly
              className="input w-full rounded-lg border-none outline-none"
            />
          </fieldset>

          {/* Phone */}

          <fieldset className="fieldset">
            <label className="label text-black">Phone Number</label>

            <input
              type="number"
              {...register("phone", {
                required: "Enter your phone number",
              })}
              className="input w-full rounded-lg border-none outline-none"
              placeholder="Phone Number"
            />

            {errors.phone && (
              <p className="text-red-600">{errors.phone.message}</p>
            )}
          </fieldset>

          {/* Photo */}

          <fieldset className="fieldset">
            <label className="label text-black">Applicant Photo URL</label>

            <input
              type="url"
              {...register("photo", {
                required: "Enter photo URL",
              })}
              className="input w-full rounded-lg border-none outline-none"
              placeholder="Photo URL"
            />

            {errors.photo && (
              <p className="text-red-600">{errors.photo.message}</p>
            )}
          </fieldset>

          {/* Gender */}

          <fieldset className="fieldset">
            <label className="label text-black">Gender</label>

            <select
              {...register("gender", {
                required: "Select gender",
              })}
              className="select w-full rounded-lg border-none outline-none"
            >
              <option value="">Select Gender</option>

              <option>Male</option>

              <option>Female</option>

              <option>Other</option>
            </select>

            {errors.gender && (
              <p className="text-red-600">{errors.gender.message}</p>
            )}
          </fieldset>

          {/* Applying Degree */}

          <fieldset className="fieldset">
            <label className="label text-black">Applying Degree</label>

            <select
              {...register("degree", {
                required: "Select degree",
              })}
              className="select w-full rounded-lg border-none outline-none"
            >
              <option value="">Select Degree</option>

              <option>Diploma</option>

              <option>Bachelor</option>

              <option>Masters</option>

              <option>PhD</option>
            </select>

            {errors.degree && (
              <p className="text-red-600">{errors.degree.message}</p>
            )}
          </fieldset>

          {/* SSC */}

          <fieldset className="fieldset">
            <label className="label text-black">SSC Result</label>

            <input
              type="text"
              {...register("ssc", {
                required: "Enter SSC result",
              })}
              className="input w-full rounded-lg border-none outline-none"
              placeholder="5.00"
            />

            {errors.ssc && <p className="text-red-600">{errors.ssc.message}</p>}
          </fieldset>

          {/* HSC */}

          <fieldset className="fieldset">
            <label className="label text-black">HSC Result</label>

            <input
              type="text"
              {...register("hsc", {
                required: "Enter HSC result",
              })}
              className="input w-full rounded-lg border-none outline-none"
              placeholder="5.00"
            />

            {errors.hsc && <p className="text-red-600">{errors.hsc.message}</p>}
          </fieldset>

          {/* Study Gap */}

          <fieldset className="fieldset md:col-span-2">
            <label className="label text-black">Study Gap (optional)</label>

            <input
              type="text"
              {...register("studyGap")}
              className="input w-full rounded-lg border-none outline-none"
              placeholder="None / 1 Year / 2 Years"
            />
          </fieldset>

          {/* Address */}

          <fieldset className="fieldset md:col-span-2">
            <label className="label text-black">Address</label>

            <textarea
              {...register("address", {
                required: "Enter your address",
              })}
              className="textarea w-full rounded-lg border-none outline-none h-28"
              placeholder="Your Address"
            />

            {errors.address && (
              <p className="text-red-600">{errors.address.message}</p>
            )}
          </fieldset>

          <div className="md:col-span-2 text-center mt-4">
            <button className="btn btn-primary border-none shadow-none text-white px-10">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyScholarship;
