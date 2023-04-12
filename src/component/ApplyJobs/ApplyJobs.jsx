import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCart from "../JobCart/JobCart";

const ApplyJobs = () => {
  const applyJobs = useLoaderData();
  const [jobs, setJobs] = useState(applyJobs);
  const [filter, setFilter] = useState("");

  const handleFilerChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    if (filter === "") {
      return true;
    } else if (filter === "Onsite") {
      return job.remoteOrOnsite === "Onsite";
    } else if (filter === "Remote") {
      return job.remoteOrOnsite === "Remote";
    } else {
      return true;
    }
  });

  return (
    <div>
      <div className="text-center p-40 bg-indigo-50">
        <h2 className="font-bold text-5xl">Applied Jobs</h2>
      </div>
      <div>
        <div className="flex justify-end mr-10 md:mr-64">
          <select className="select select-bordered max-w-2xl mt-32" value={filter}
          onChange={handleFilerChange}>
            <option value="">
              Filter By
            </option>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        {filteredJobs.map((job) => (
          <JobCart key={job.id} job={job}></JobCart>
        ))}
      </div>
    </div>
  );
};

export default ApplyJobs;
