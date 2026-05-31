import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../pages/SharedPage/LoadingSpinner";

const ManageApplications = () => {
  const axiosSecure = useAxiosSecure();

  const [selectedApp, setSelectedApp] =
    useState(null);

  const {
    data: applications = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allApplications"],
    queryFn: async () => {
      const res =
        await axiosSecure.get("/applications");

      return res.data;
    },
  });

  const handleStatus = async (
    id,
    status
  ) => {
    await axiosSecure.patch(
      `/applications/status/${id}`,
      { status }
    );

    refetch();
  };

  const handleFeedback = async (
    id
  ) => {
    const { value } = await Swal.fire({
      title: "Write Feedback",
      input: "textarea",
      inputPlaceholder:
        "Enter feedback...",
      showCancelButton: true,
    });

    if (value) {
      await axiosSecure.patch(
        `/applications/feedback/${id}`,
        {
          feedback: value,
        }
      );

      refetch();
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-8">

      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-3xl font-bold mb-6">
          Manage Applications
        </h2>

        <div className="overflow-x-auto">

          <table className="table">

            <thead>
              <tr>
                <th>#</th>

                <th>Applicant</th>

                <th>Email</th>

                <th>University</th>

                <th>Status</th>

                <th>Payment</th>

                <th>Feedback</th>

                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {applications.map(
                (application, index) => (
                  <tr
                    key={application._id}
                  >
                    <td>{index + 1}</td>

                    <td>
                      {
                        application.applicantName
                      }
                    </td>

                    <td>
                      {
                        application.applicantEmail
                      }
                    </td>

                    <td>
                      {
                        application.universityName
                      }
                    </td>

                    <td>
                      <span className="badge badge-primary text-white">
                        {
                          application.applicationStatus
                        }
                      </span>
                    </td>

                    <td>
                      <span className="badge badge-success text-white">
                        {
                          application.paymentStatus
                        }
                      </span>
                    </td>

                    <td>
                      {application.feedback ||
                        "No Feedback"}
                    </td>

                    <td>

                      <div className="flex flex-wrap gap-2">

                        <button
                          className="btn btn-info btn-xs text-white"
                          onClick={() => {
                            setSelectedApp(
                              application
                            );

                            document
                              .getElementById(
                                "detailsModal"
                              )
                              .showModal();
                          }}
                        >
                          Details
                        </button>

                        <button
                          className="btn btn-warning btn-xs text-white"
                          onClick={() =>
                            handleFeedback(
                              application._id
                            )
                          }
                        >
                          Feedback
                        </button>

                        <select
                          value={
                            application.applicationStatus
                          }
                          onChange={(e) =>
                            handleStatus(
                              application._id,
                              e.target.value
                            )
                          }
                          className="select select-xs"
                        >
                          <option value="pending">
                            Pending
                          </option>

                          <option value="processing">
                            Processing
                          </option>

                          <option value="completed">
                            Completed
                          </option>
                        </select>

                        <button
                          onClick={() =>
                            handleStatus(
                              application._id,
                              "rejected"
                            )
                          }
                          className="btn btn-error btn-xs text-white shadow-none border-none"
                        >
                          Cancel
                        </button>

                      </div>

                    </td>
                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>
      </div>

      {/* Details Modal */}

      <dialog
        id="detailsModal"
        className="modal"
      >
        <div className="modal-box">

          <h3 className="font-bold text-xl mb-4">
            Application Details
          </h3>

          {selectedApp && (
            <div className="space-y-2">

              <p>
                <strong>Name:</strong>{" "}
                {
                  selectedApp.applicantName
                }
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {
                  selectedApp.applicantEmail
                }
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {
                  selectedApp.applicantPhone
                }
              </p>

              <p>
                <strong>Address:</strong>{" "}
                {
                  selectedApp.applicantAddress
                }
              </p>

              <p>
                <strong>University:</strong>{" "}
                {
                  selectedApp.universityName
                }
              </p>

              <p>
                <strong>Degree:</strong>{" "}
                {
                  selectedApp.applyingDegree
                }
              </p>

              <p>
                <strong>SSC:</strong>{" "}
                {
                  selectedApp.sscResult
                }
              </p>

              <p>
                <strong>HSC:</strong>{" "}
                {
                  selectedApp.hscResult
                }
              </p>

            </div>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">
                Close
              </button>
            </form>
          </div>

        </div>
      </dialog>
    </div>
  );
};

export default ManageApplications;