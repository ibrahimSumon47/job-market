import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = ({}) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const {
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    jobTitle,
    phone,
    mail,
    location,
  } = data;

  const details = useLoaderData();
  useEffect(() => {
    if (details) {
      let viewDetails = details.find((details) => details.id === id);
      setData(viewDetails);
    }
  }, [details, id]);
  return (
    <div key={id}>
      <div className="">
        <h2 className="text-center p-20 md:p-40 text-5xl font-bold bg-indigo-50">
          Job Details
        </h2>
      </div>
      <div className="md:flex justify-between gap-20 mt-32 p-10 md:px-96 ">
        <div className="">
          <p className="py-5">
            <span className="font-bold">Job Description: </span>
            {jobDescription}
          </p>
          <p className="py-5">
            <span className="font-bold">Job Responsibility: </span>
            {jobResponsibility}
          </p>
          <p className="font-bold py-5">Educational Requirements:</p>
          <p>{educationalRequirements}</p>
          <p className="font-bold py-5">Experiences:</p>
          <p>{experiences}</p>
        </div>
        <div>
          <div className="bg-indigo-50 border rounded-lg w-auto md:w-96 mt-10 md:mt-0">
            <p className="font-bold py-5 pl-3">Job Details</p>
            <hr className="border-t-2 border-indigo-500" />
            <div className="py-5 pl-3">
              <div className="flex py-3 gap-1">
                <img
                  className="h-6 w-6"
                  src="https://i.ibb.co/3pmPjfX/Frame.png"
                  alt=""
                />
                <p>
                  <span className="font-bold">Salary:</span> {salary}
                </p>
              </div>
              <div className="flex gap-1">
                <img
                  className="h-6 w-6"
                  src="https://i.ibb.co/PQLg8RB/Frame-1.png"
                  alt=""
                />
                <p>
                  <span className="font-bold">Job Title:</span> {jobTitle}
                </p>
              </div>
            </div>
            <p className="font-bold py-5 pl-3">Contact Information</p>
            <hr className="border-t-2 border-indigo-500" />
            <div className="py-5 pl-3">
              <div className="flex gap-1 py-3">
                <img
                  className="h-6 w-6"
                  src="https://i.ibb.co/kG9982x/Frame-2.png"
                  alt=""
                />
                <p>
                  <span className="font-bold">Phone:</span> {phone}
                </p>
              </div>
              <div className="flex gap-1">
                <img
                  className="w-6 h-6"
                  src="https://i.ibb.co/g4z1JZW/Frame-3.png"
                  alt=""
                />
                <p>
                  <span className="font-bold">Email:</span> {mail}
                </p>
              </div>
              <div className="flex gap-1 py-3">
                <img
                  className="h-6 w-6"
                  src="https://i.ibb.co/TWszmLJ/location.png"
                  alt=""
                />
                <p>
                  <span className="font-bold">Address:</span> {location}
                </p>
              </div>
            </div>
          </div>
          <div>
          <button className="btn bg-indigo-400 text-slate-50 font-bold w-full rounded-lg mt-5">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
