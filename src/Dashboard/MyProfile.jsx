import React from "react";
import useAuth from "../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-[#e7f7ff] rounded-2xl p-8">
        {/* Header */}
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
          />

          <h1 className="text-3xl font-bold mt-4">{user?.displayName}</h1>

          <span className="badge badge-primary text-white mt-2">Student</span>
        </div>

        {/* Profile Info */}
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
              <p className="text-gray-500">Role</p>
              <h3 className="font-semibold text-lg">Student</h3>
            </div>

            <div className="bg-white rounded-xl p-5">
              <p className="text-gray-500">Account Status</p>
              <h3 className="font-semibold text-lg text-green-600">Active</h3>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-5">Quick Overview</h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-primary">0</h3>
              <p className="text-gray-500">Applications</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-primary">0</h3>
              <p className="text-gray-500">Reviews</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-3xl font-bold text-primary">Student</h3>
              <p className="text-gray-500">Current Role</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
