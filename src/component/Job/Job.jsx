import React, { useState } from "react";
import featuredJobsData from "../../../public/featuredJobsData.json";
const Job = ({ job }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fulltimeOrParttime,
    location,
    salary,
  } = job;
  return (
    <div>
      <div key={id} className="border rounded-lg p-10">
        <img className="w-28" src={companyLogo} alt="" />
        <h4 className="font-bold py-1">{jobTitle}</h4>
        <p className="text-slate-400 pb-1">{companyName}</p>
        <div className="flex flex-row gap-10 mt-2">
          <button className="border rounded-md w-28 h-auto text-center text-indigo-600 border-indigo-500 font-semibold">
            {remoteOrOnsite}
          </button>
          <button className="border rounded-md w-28 h-auto text-center text-indigo-600 border-indigo-500 font-semibold">
            {fulltimeOrParttime}
          </button>
        </div>
        <div className="py-5 md:flex md:flex-row md:gap-10">
          <div className="flex pb-5">
            <img src="https://i.ibb.co/3pmPjfX/Frame.png" alt="" />
            <p>{location}</p>
          </div>
          <div className="flex">
            <img
              className="h-6 w-6"
              src="../../../public/Icons/Frame.png"
              alt=""
            />
            <p>Salary:{salary}</p>
          </div>
        </div>
        <button className="btn bg-indigo-400 text-slate-50 font-bold">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Job;
