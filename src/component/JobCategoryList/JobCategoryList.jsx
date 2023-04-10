import React from "react";
import JobCategoryData from "../../../public/JobCategoryData.json"

const JobCategoryList = () => {
  return (
    <div>
      <div className="grid justify-items-center mt-32">
        <h2 className="text-4xl font-bold">Job Category List</h2>
        <p className="font-thin text-slate-400 my-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="hero-content grid lg:grid-cols-4 gap-10 mx-auto">
        {JobCategoryData.map((category) => (
          <div key={category.id} className="p-10 bg-indigo-50 rounded-lg shadow-md">
            <img className="border rounded-lg p-5 bg-indigo-100 mb-5" src={category.image} alt="" />
            <h3 className="text-xl font-semibold">{category.jobType}</h3>
            <p className="text-gray-600 mt-2">{category.jobAvailable}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryList;
