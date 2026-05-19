import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile, signOutUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (data) => {
    const { name, email, photo, password } = data;

    createUser(email, password)
      .then((result) => {
        const userProfile = {
          displayName: name,
          photoURL: photo,
        };
        // Update User
        updateUserProfile(userProfile)
          .then(() => {
            console.log("Update", result.user);
            toast.success(`Registration successful, ${name}!`);
            reset();
          })
          .catch((err) => {
            console.log(err.code);
          });

        //   Logout after Registration
        signOutUser()
          .then(() => {
            console.log("Successfully Logout!");
            navigate(location?.state || "/login");
          })
          .catch((err) => {
            console.log(err.code);
          });
      })
      .catch((err) => {
        console.log(err.code);
      });
  };
  return (
    <div className="bg-[#e7f7ff] rounded-2xl p-20 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit(handleRegister)}>
        <h1 className="font-bold text-center text-2xl mb-5">
          Register to <span className=" text-primary">ScholarStream</span>
        </h1>
        <fieldset className="fieldset">
          {/* Name */}
          <label className="label text-black">Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Enter Your Name",
              //   pattern: {
              //     value: /^[A-Za-z]+(?:\s[A-Za-z]+)+$/,
              //     message: "Enter your first and last name",
              //   },
            })}
            className="input w-full outline-none rounded-lg border-none mb-2"
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          {/* Email */}
          <label className="label text-black">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full outline-none rounded-lg border-none mb-2"
            placeholder="Your Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600">Enter your email</p>
          )}

          {/* Photo URL */}
          <label className="label text-black">Photo URL</label>
          <input
            type="url"
            {...register("photo", { required: true })}
            className="input w-full outline-none rounded-lg border-none mb-2"
            placeholder="Your PhotoURL"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-600">Enter your Photo URL</p>
          )}

          {/* Password */}
          <label className="label text-black">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/,
                  message:
                    "Min 6 chars, include uppercase, lowercase & special character",
                },
              })}
              className="input w-full outline-none rounded-lg border-none mb-2"
              placeholder="Password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-lg top-3 right-3 cursor-pointer"
            >
              {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}

          <button className="btn btn-secondary rounded-lg border-none shadow-none text-white mt-4">
            Registration
          </button>
        </fieldset>
      </form>
      <div className="text-center mt-4">
        <Link to={"/login"} className="text-sm">
          Already have an Account?{" "}
          <span className="font-semibold text-primary hover:underline">
            Login
          </span>
        </Link>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
