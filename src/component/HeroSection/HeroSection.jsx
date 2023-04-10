import React from "react";
import "./HeroSection.css"
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const HeroSection = () => {
  return (
    <div className="flex justify-around  bg-indigo-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="../../../Images/All Images/Professional.png"
          className="mb-4 lg:mb-0 lg:max-w-screen-lg lg:self-start"
        />
        <div>
          <h1 className="text-6xl font-bold">One Step <span>Closer To Your</span> <span className="text-indigo-400">Dream Job</span></h1>
          <p className="py-6">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn bg-indigo-400 text-slate-50 font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
