import React, { useEffect, useState } from "react";
import featuredJobsData from "../../../public/featuredJobsData.json";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("featuredJobsData.json")
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }, []);
  return (
    <div>
      <div className="grid justify-items-center mt-32">
        <h2 className="text-4xl font-bold">Featured Jobs</h2>
        <p className="font-thin text-slate-400 my-6 p-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 lg:px-80">
        {featuredJobsData.map((featured) => (
          <div key={featured.id} className="border rounded-lg p-5">
            <img className="w-28" src={featured.companyLogo} alt="" />
            <h4 className="font-bold py-1">{featured.jobTitle}</h4>
            <p className="text-slate-400 pb-1">{featured.companyName}</p>
            <div className="flex flex-row gap-10 pb-1">
              <p className="border rounded-md w-28 h-auto text-center text-indigo-600 border-indigo-500 font-semibold">
                {featured.remoteOrOnsite}
              </p>
              <p className="border rounded-md w-28 h-auto text-center text-indigo-600 border-indigo-500 font-semibold">
                {featured.fulltimeOrParttime}
              </p>
            </div>
            <div className="py-5 flex flex-row gap-10">
              <p className="flex"><img src="../../../Images/Icons/location.png" alt="" />{featured.location}</p>
              <p className="flex"><img src="../../../Images/Icons/Frame.png" alt="" /> Salary: {featured.salary}</p>
            </div>
            <button className="btn bg-indigo-400 text-slate-50 font-bold">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
