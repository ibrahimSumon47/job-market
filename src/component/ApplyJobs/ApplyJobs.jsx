import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCart from "../JobCart/JobCart";

const ApplyJobs = () => {
  const applyJobs = useLoaderData();
  const [jobs, setJobs] = useState(applyJobs);

  return (
    <div>
      <div className="text-center p-40 bg-indigo-50">
        <h2 className="font-bold text-5xl">Applied Jobs</h2>
      </div>
      <div>
        <div className="flex justify-end mr-10 md:mr-64">
          <select className="select select-bordered max-w-2xl mt-32">
            <option disabled selected>
              Filter By
            </option>
            <option>Onsite</option>
            <option>Remote</option>
          </select>
        </div>

        {jobs.map((job) => (
          <JobCart key={job.id} job={job}></JobCart>
        ))}
      </div>
    </div>
  );
};

export default ApplyJobs;
