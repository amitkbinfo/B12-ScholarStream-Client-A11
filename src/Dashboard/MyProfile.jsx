import React from "react";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import useAxiosSecure from "../hooks/useAxiosSecure";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const MyProfile = () => {
  const { user, updateUserProfile, updateUserPassword } = useAuth();

  const [role] = useUserRole();

  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();

  /// Applications Count
  const { data: applications = [] } = useQuery({
    queryKey: ["myApplicationsCount", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/applications?email=${user.email}`);

      return res.data;
    },
  });

  // Reviews Count
  const { data: reviews = [] } = useQuery({
    queryKey: ["myReviewsCount", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-reviews?email=${user.email}`);

      return res.data;
    },
  });

  const handleUpdateProfile = async (data) => {
    try {
      // Firebase Profile Update

      await updateUserProfile({
        displayName: data.name,
        photoURL: data.photoURL,
      });

      // Password Update

      if (data.password) {
        try {
          await updateUserPassword(data.password);
        } catch (error) {
          toast.warning("Please login again before changing password.");
        }
      }

      // MongoDB Update

      await axiosSecure.patch(`/users/${user.email}`, {
        name: data.name,
        photoURL: data.photoURL,
      });

      
      toast.success("Profile Updated Successfully");
      document.getElementById("edit_profile").close();

      reset();

    //   window.location.reload();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-[#e7f7ff] rounded-2xl p-8">
        {/* Profile Header */}

        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
          />

          <h1 className="text-3xl font-bold mt-4">{user?.displayName}</h1>

          <span className="badge badge-primary text-white mt-2">{role}</span>

          <button
            onClick={() => document.getElementById("edit_profile").showModal()}
            className="btn btn-secondary shadow-none border-none mt-5 rounded-lg text-white"
          >
            Update Profile
          </button>
        </div>

        {/* Profile Information */}

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5">Profile Information</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-5">
              <p className="text-gray-500">Full Name</p>

              <h3 className="font-semibold text-lg">{user?.displayName}</h3>
            </div>

            <div className="bg-white rounded-xl p-5">
              <p className="text-gray-500">Email Address</p>

              <h3 className="font-semibold text-lg break-all">{user?.email}</h3>
            </div>

            <div className="bg-white rounded-xl p-5">
              <p className="text-gray-500">Account Status</p>

              <h3 className="font-semibold text-lg text-green-600">Active</h3>
            </div>
          </div>
        </div>

        {/* Statistics */}

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5">Quick Overview</h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-primary">
                {applications.length}
              </h3>

              <p className="text-gray-500">Applications</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-primary">
                {reviews.length}
              </h3>

              <p className="text-gray-500">Reviews</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-primary">{role}</h3>

              <p className="text-gray-500">Current Role</p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}

      <dialog id="edit_profile" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl mb-5">Update Profile</h3>

          <form onSubmit={handleSubmit(handleUpdateProfile)} className="space-y-4">
            <div>
              <label className="label">Full Name</label>

              <input
                defaultValue={user?.displayName}
                {...register("name", {
                  required: true,
                })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Photo URL</label>

              <input
                defaultValue={user?.photoURL}
                {...register("photoURL", {
                  required: true,
                })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">New Password</label>

              <input
                type="password"
                {...register("password")}
                className="input input-bordered w-full"
                placeholder="Leave empty if unchanged"
              />
            </div>

            <button className="btn btn-primary border-none shadow-none w-full text-white">
              Update Profile
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyProfile;
