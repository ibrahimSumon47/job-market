import React from "react";
import { Link } from "react-router-dom";

const JobCart = ({ job }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    fulltimeOrParttime,
    salary,
  } = job;
  return (
    <div className="p-10 md:px-64">
      <div className="md:flex border p-5 gap-10">
        <div>
          <img className="w-full md:w-80 md:h-40 md:shadow-md p-10 bg-gray-50" src={companyLogo} alt="" />
        </div>
        <div className="md:flex flex-grow justify-between">
          <div>
            <h3 className="font-bold py-2">{jobTitle}</h3>
            <p className="text-gray-400 font-semibold">{companyName}</p>
            <div className="flex flex-row gap-10 mt-2 py-2">
              <button className="border rounded-md w-28 h-auto text-center text-indigo-600 border-indigo-500 font-semibold">
                {remoteOrOnsite}
              </button>
              <button className="border rounded-md w-28 h-auto text-center text-indigo-600 border-indigo-500 font-semibold">
                {fulltimeOrParttime}
              </button>
            </div>
            <div className="py-2 md:flex md:flex-row md:gap-10">
              <div className="flex pb-5">
                <img src="https://i.ibb.co/TWszmLJ/location.png" alt="" />
                <p>{location}</p>
              </div>
              <div className="flex">
                <img
                  className="h-6 w-6"
                  src="https://i.ibb.co/3pmPjfX/Frame.png"
                  alt=""
                />
                <p>Salary:{salary}</p>
              </div>
            </div>
          </div>
          <Link to = {`/details/${id}`}>
          <button className="btn bg-indigo-400 text-slate-50 font-bold w-full md:w-32 rounded-md mt-5 md:mt-10">
          View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCart;
