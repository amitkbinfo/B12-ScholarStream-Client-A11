import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import LoadingSpinner from "../../pages/SharedPage/LoadingSpinner";

const ManageScholarships = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: scholarships = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["manageScholarships"],
    queryFn: async () => {
      const res = await axiosSecure.get("/scholarships");

      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Scholarship?",
      icon: "warning",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/scholarships/${id}`);

        if (res.data.deletedCount) {
          toast.success("Scholarship Deleted");

          refetch();
        }
      }
    });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Scholarship</th>
            <th>University</th>
            <th>Category</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>

        {isLoading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <tbody>
            {scholarships.map((scholarship, index) => (
              <tr key={scholarship._id}>
                <td>{index + 1}</td>

                <td>{scholarship.scholarshipName}</td>

                <td>{scholarship.universityName}</td>

                <td>{scholarship.scholarshipCategory}</td>

                <td>{scholarship.applicationDeadline}</td>

                <td>
                  {/* Update */}
                  <Link
                    to={`update-scholarship/${scholarship._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Update
                  </Link>
                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(scholarship._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default ManageScholarships;
