import React from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen rounded-2xl flex flex-col justify-center items-center text-center px-4 bg-[#E7F7FF]">
        <Helmet>
          <title>404 - Page Not Found</title>
        </Helmet>

        {/* Image with Lottie Error */}
        <DotLottieReact
          src="/Error404.lottie"
          loop
          autoplay
          className="w-75 md:w-200"
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Oops! Page Not Found 😕
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-3 mb-6 max-w-md">
          Looks like this page wandered off. Let's get you back to exploring
          delicious reviews!
        </p>

        {/* Button */}
        <Link
          to="/"
          className="btn btn-neutral px-6 hover:btn-success hover:shadow-none hover:border-none hover:text-black"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
