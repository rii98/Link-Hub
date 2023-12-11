import React, { useState } from "react";
import Header from "../Components/Header";
import JobCard from "../Components/JobCard";

const CompanyProfile = () => {
  const [showJobDescription, setShowJobDescription] = useState(true);
  return (
    <div>
      <Header />
      <main className="shadow-md mb-6">
        <section className="flex items-start gap-4 pt-10 px-4">
          <div className="border-2 border-slate-500 rounded-[50%]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="logo company"
              className="h-14 w-14 rounded-[50%] object-center object-cover"
            />
          </div>
          <div className="flex items-center justify-between flex-1">
            <div>
              <h2 className="text-slate-700 font-bold text-lg">
                Backend WebDeveloper
              </h2>
              <h3 className="text-sm font-semibold  text-blue-600">
                Microsoft Inc
              </h3>
              <p className="text-sm">California</p>
              <p className="text-xs text-slate-400">5 days ago</p>
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="text-3xl text-blue-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"></path>
              </svg>
            </div>
          </div>
        </section>
        <section className="flex flex-wrap gap-4 text-center justify-center py-6">
          <div className="w-[200px] py-2 bg-green-200 rounded-md">
            <h3 className="font-bold">Salary</h3>
            <p>$5000</p>
          </div>
          <div className="w-[200px] py-2 bg-red-200 rounded-md ">
            <h3 className="font-bold">Job Type</h3>
            <p>Senior Enginner</p>
          </div>
          <div className="w-[200px] py-2 bg-pink-200 rounded-md ">
            <h3 className="font-bold">No. of Vaccancy</h3>
            <p>10</p>
          </div>
          <div className="w-[200px] py-2 bg-blue-200 rounded-md ">
            <h3 className="font-bold">No. of Applicants</h3>
            <p>120</p>
          </div>
          <div className="w-[200px] py-2 bg-orange-200 rounded-md ">
            <h3 className="font-bold">Year of Experience</h3>
            <p>10</p>
          </div>
        </section>
        <section className="p-4">
          <div className="flex gap-4 text-center justify-center flex-wrap text-sm">
            <div
              onClick={() => setShowJobDescription((p) => !p)}
              className={`cursor-pointer py-3 rounded-full border w-[30%] font-semibold max-w-[300px] min-w-[200px] ${
                showJobDescription ? "bg-black text-white" : ""
              }`}
            >
              Job Description
            </div>
            <div
              onClick={() => setShowJobDescription((p) => !p)}
              className={`cursor-pointer py-3 rounded-full border w-[30%] font-semibold max-w-[300px] min-w-[200px] ${
                !showJobDescription ? "bg-black text-white" : ""
              }`}
            >
              Company
            </div>
          </div>
          {showJobDescription ? (
            <div className="pt-8">
              <div className="pb-4">
                <h3 className="text-blue-400 font-bold text-2xl pb-2">
                  Job Description
                </h3>
                <p className="font-semibold">
                  Proficient in TypeScript, Express, Mongoose.
                </p>
              </div>
              <div>
                <h3 className="text-blue-400 font-bold text-2xl pb-3">
                  Requirement
                </h3>
                <ul className="font-semibold ">
                  <li className="bg-slate-50 py-2 px-4 rounded-md mb-2">
                    Nodejs
                  </li>
                  <li className="bg-slate-50 py-2 px-4 rounded-md mb-2">
                    Express
                  </li>
                  <li className="bg-slate-50 py-2 px-4 rounded-md mb-2">
                    React
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="pt-8">
              <div className="pb-4">
                <h3 className="text-blue-400 font-bold text-2xl pb-3">
                  Microsoft Inc..
                </h3>
                <p className="font-semibold">California, USA</p>
                <p className="text-sm text-slate-500">
                  microsoft@microsoft.com
                </p>
              </div>
              <div>
                <h3 className="text-blue-400 font-bold text-2xl pb-3">
                  About Company
                </h3>
                <p className=" font-medium">
                  Trillion dollar company with billions of user.
                </p>
              </div>
            </div>
          )}
          <div className="cursor-pointer my-6 text-center font-semibold py-2 text-white bg-black rounded-full max-w-[500px] m-auto">
            Apply Now
          </div>
        </section>
      </main>
      <h2 className="text-slate-500 font-bold text-2xl text-center py-6 bg-blue-50">
        Related Jobs
      </h2>
      <section className="flex flex-wrap gap-4 justify-center">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </section>
    </div>
  );
};

export default CompanyProfile;
