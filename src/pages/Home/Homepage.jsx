import React from "react";
import Banner from "./Banner/Banner";
import TopScholarships from "./TopScholarships/TopScholarships";
import Testimonials from "./Testimonials/Testimonials";
import FAQ from "./FAQ/FAQ";
import Newsletter from "./Newsletter/Newsletter";

const Homepage = () => {
  return (
    <div className="my-10">
      <Banner></Banner>
      <div className="w-10/12 mx-auto">
        <TopScholarships></TopScholarships>
        <Testimonials></Testimonials>
        <Newsletter></Newsletter>
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Homepage;
