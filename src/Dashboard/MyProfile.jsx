import React from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: userInfo = {} } = useQuery({
    queryKey: ["userInfo", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });
  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-center">My Information</h1>
      <div className="bg-white rounded-2xl p-8 shadow-sm min-w-5xl mt-5">
        <img
          src={userInfo.photoURL}
          alt=""
          className="w-32 h-32 rounded-full mx-auto"
        />

        <h2 className="text-3xl font-bold text-center mt-4">{userInfo.name}</h2>

        <div className="divider"></div>

        <div className="space-y-3">
          <p>
            <span className="font-semibold">Email:</span> {userInfo.email}
          </p>

          <p>
            <span className="font-semibold">Role:</span> {userInfo.role}
          </p>

          <p>
            <span className="font-semibold">Joined:</span>{" "}
            {new Date(userInfo.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
