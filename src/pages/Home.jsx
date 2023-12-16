import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Footer from "../Components/Footer";
import JobCard from "../Components/JobCard";
import Signup from "../Components/Signup";

const Home = () => {
  const searchRef = useRef();
  return (
    <>
      <main className="md:pt-10">
        <h1 className="text-slate-500 py-6 font-bold text-3xl text-center px-4">
          Find Your Dream Job With Ease
        </h1>
        <form className="p-4">
          <div className="flex items-center px-4 py-2 shadow-[-5px_5px_10px_rgba(0,0,0,0.1)] rounded-full max-w-[700px] m-auto">
            <div>
              <CiSearch size={25} />
            </div>
            <div className="pl-4 flex-1">
              <input
                placeholder="Job Titles or Keywords"
                className="w-full outline-none placeholder:text-sm"
                ref={searchRef}
              />
            </div>
            <div className="">
              <button
                type="button"
                className="bg-blue-500 rounded-full px-3 py-2 text-sm text-white font-semibold"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="pt-10 px-4 pb-14 flex flex-wrap gap-4 justify-center">
          {[
            "Full Stack",
            "Remote",
            "Software",
            "Express",
            "Node",
            "React",
            "Tinder",
            "Pornhub",
            "Xnxx",
          ].map((s) => {
            return (
              <div
                className="cursor-pointer px-3 py-1 bg-blue-100 rounded-full text-sm text-gray-600"
                onClick={(e) => {
                  searchRef.current.value = s;
                }}
              >
                {s}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-4 py-2 px-4 shadow-[-5px_5px_10px_rgba(0,0,0,0.1)]">
          <p className="text-sm">
            Showing: <span className="font-bold">15</span> Jobs Available
          </p>
          <form>
            <div>
              <label htmlFor="filter" className="font-semibold text-sm">
                Sort By:
              </label>
              <select id="filter" className="outline-none" name="filter">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>
          </form>
          <button className="p-3 bg-slate-100 rounded-sm">
            Advance Filter
          </button>
        </div>
        <section className="flex flex-wrap justify-center gap-4 pt-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            return <JobCard key={crypto.randomUUID()} />;
          })}
        </section>
      </main>
      <Signup />
      <Footer />
    </>
  );
};

export default Home;
