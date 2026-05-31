import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../pages/SharedPage/LoadingSpinner";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const [filterRole, setFilterRole] = useState("");

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const filteredUsers = filterRole
    ? users.filter((user) => user.role === filterRole)
    : users;

  const handleRoleChange = async (id, role) => {
    try {
      await axiosSecure.patch(`/users/role/${id}`, {
        role,
      });

      Swal.fire({
        icon: "success",
        title: "Role Updated",
        timer: 1500,
        showConfirmButton: false,
      });

      refetch();
    } catch (error) {
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete User?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      await axiosSecure.delete(`/users/${id}`);

      Swal.fire({
        icon: "success",
        title: "User Deleted",
        timer: 1500,
        showConfirmButton: false,
      });

      refetch();
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-8">
      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manage Users</h2>

          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="select select-bordered"
          >
            <option value="">All Roles</option>
            <option value="Student">Student</option>
            <option value="Moderator">Moderator</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Change Role</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>

                  <td>
                    <div className="flex items-center gap-3">
                      <img
                        src={user.photoURL}
                        alt=""
                        className="w-12 h-12 rounded-full"
                      />

                      <span>{user.name}</span>
                    </div>
                  </td>

                  <td>{user.email}</td>

                  <td>
                    <span className="badge badge-primary text-white rounded-xl">{user.role}</span>
                  </td>

                  <td>
                    <select
                      defaultValue={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id, e.target.value)
                      }
                      className="select select-sm select-bordered"
                    >
                      <option>Student</option>
                      <option>Moderator</option>
                      <option>Admin</option>
                    </select>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-error btn-sm shadow-none border-none text-black"
                    >
                      Delete
                    </button>
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

export default ManageUsers;
