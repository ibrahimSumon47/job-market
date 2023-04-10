import React, { useEffect, useState } from "react";

import Job from "../Job/Job";

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
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
