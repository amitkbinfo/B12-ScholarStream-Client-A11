import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../pages/SharedPage/LoadingSpinner";

const UpdateScholarship = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { isLoading } = useQuery({
    queryKey: ["updateScholarship", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarships/${id}`);

      reset(res.data);

      return res.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  
  const handleUpdateScholarship = async (data) => {
    const { _id, ...updatedScholarship } = data;
    const res = await axiosSecure.patch(`/scholarships/${id}`, updatedScholarship);

    if (res.data.modifiedCount > 0 || res.data.matchedCount > 0) {
      toast.success("Scholarship Updated Successfully");

      navigate("/dashboard/manage-scholarships");
    }
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10">
      <div className="bg-[#E7F7FF] rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Update Scholarship
        </h2>

        <form
          onSubmit={handleSubmit(handleUpdateScholarship)}
          className="grid md:grid-cols-2 gap-5"
        >
          <fieldset className="fieldset">
            <label className="label">Scholarship Name</label>

            <input
              type="text"
              {...register("scholarshipName", {
                required: "Scholarship name is required",
              })}
              className="input w-full rounded-lg border-none"
            />

            {errors.scholarshipName && (
              <p className="text-red-600">{errors.scholarshipName.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">University Name</label>

            <input
              type="text"
              {...register("universityName", {
                required: "University name is required",
              })}
              className="input w-full rounded-lg border-none"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">University Image</label>

            <input
              type="url"
              {...register("universityImage", {
                required: "Image URL is required",
              })}
              className="input w-full rounded-lg border-none"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Country</label>

            <input
              type="text"
              {...register("universityCountry", {
                required: "Country is required",
              })}
              className="input w-full rounded-lg border-none"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">City</label>

            <input
              type="text"
              {...register("universityCity", {
                required: "City is required",
              })}
              className="input w-full rounded-lg border-none"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">World Rank</label>

            <input
              type="number"
              {...register("universityWorldRank", {
                required: "World rank is required",
              })}
              className="input w-full rounded-lg border-none"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Subject Category</label>

            <input
              type="text"
              {...register("subjectCategory", {
                required: "Subject category required",
              })}
              className="input w-full rounded-lg border-none"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Scholarship Category</label>

            <select
              {...register("scholarshipCategory", {
                required: "Select category",
              })}
              className="select w-full rounded-lg border-none"
            >
              <option value="">Select</option>

              <option>Full Fund</option>

              <option>Partial Fund</option>

              <option>Self Fund</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Degree</label>

            <select
              {...register("degree", {
                required: "Select degree",
              })}
              className="select w-full rounded-lg border-none"
            >
              <option value="">Select Degree</option>

              <option>Diploma</option>

              <option>Bachelor</option>

              <option>Masters</option>

              <option>PhD</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Tuition Fee</label>

            <input
              type="number"
              {...register("tuitionFees")}
              className="input w-full rounded-lg border-none"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Application Fee</label>

            <input
              type="number"
              {...register("applicationFees", {
                required: "Application fee required",
              })}
              className="input w-full rounded-lg border-none"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Service Charge</label>

            <input
              type="number"
              {...register("serviceCharge", {
                required: "Service charge required",
              })}
              className="input w-full rounded-lg border-none"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Deadline</label>

            <input
              type="date"
              {...register("applicationDeadline", {
                required: "Deadline required",
              })}
              className="input w-full rounded-lg border-none"
            />
          </fieldset>

          <fieldset className="fieldset md:col-span-2">
            <label className="label">Description</label>

            <textarea
              {...register("scholarshipDescription", {
                required: "Description required",
              })}
              className="textarea w-full h-28 rounded-lg border-none"
            />
          </fieldset>

          <fieldset className="fieldset md:col-span-2">
            <label className="label">Benefits / Stipend</label>

            <textarea
              {...register("stipend", {
                required: "Benefits required",
              })}
              className="textarea w-full h-28 rounded-lg border-none"
            />
          </fieldset>

          <div className="md:col-span-2 text-center mt-4">
            <button className="btn btn-primary px-10 border-none shadow-none text-white">
              Update Scholarship
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateScholarship;
