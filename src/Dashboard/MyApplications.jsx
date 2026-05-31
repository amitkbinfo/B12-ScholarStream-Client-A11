import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "../pages/SharedPage/LoadingSpinner";

const MyApplications = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: applications = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["applications", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/applications?email=${user.email}`);

      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Application?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      const res = await axiosSecure.delete(`/applications/${id}`);

      if (res.data.deletedCount) {
        Swal.fire("Deleted!", "Application removed.", "success");

        refetch();
      }
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-8">
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-3xl font-bold mb-6">My Applications</h2>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>

                <th>University</th>

                <th>Subject</th>

                <th>Fee</th>

                <th>Status</th>

                <th>Feedback</th>

                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((application, index) => (
                <tr key={application._id}>
                  <td>{index + 1}</td>

                  <td>{application.universityName}</td>

                  <td>{application.subjectCategory}</td>

                  <td>${application.applicationFees}</td>

                  <td>
                    <span className="badge badge-primary text-white">
                      {application.applicationStatus}
                    </span>
                  </td>

                  <td>{application.feedback || "No Feedback"}</td>

                  <td>
                    <div className="flex flex-wrap gap-2">
                      <button className="btn btn-info btn-xs text-white">
                        Details
                      </button>

                      {application.applicationStatus === "pending" && (
                        <>
                          <button className="btn btn-warning btn-xs text-white border-none shadow-none">
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(application._id)}
                            className="btn btn-error btn-xs text-white border-none shadow-none"
                          >
                            Delete
                          </button>
                        </>
                      )}

                      {application.paymentStatus === "unpaid" &&
                        application.applicationStatus === "pending" && (
                          <Link
                            to={`/dashboard/payment/${application._id}`}
                            className="btn btn-success btn-xs"
                          >
                            Pay
                          </Link>
                        )}

                      {application.applicationStatus === "completed" && (
                        <button className="btn btn-primary btn-xs text-white">
                          Add Review
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;
