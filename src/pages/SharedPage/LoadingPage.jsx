import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <DotLottieReact
        src="/SandyLoading.lottie"
        loop
        autoplay
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default LoadingPage;
