import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { user } = useAuth();
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-[#e7f7ff] rounded-2xl p-20 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit(handleLogin)}>
        <h1 className="font-bold text-center text-2xl mb-5">
          Welcome to <span className=" text-primary">ScholarStream</span>
        </h1>
        <fieldset className="fieldset">
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

          {/* Password */}
          <label className="label text-black">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Enter your password",
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

          {/* Forgot Password */}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          {/* Login Button */}
          <button className="btn btn-primary rounded-lg border-none shadow-none text-white mt-4">
            Login
          </button>
        </fieldset>
      </form>
      <div className="text-center mt-4">
        <Link state={location?.state} to={"/register"} className="text-sm">
          Don't have an Account?{" "}
          <span className="font-semibold text-secondary hover:underline">
            Register
          </span>
        </Link>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
