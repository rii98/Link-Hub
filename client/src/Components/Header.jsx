import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  return (
    <>
      <header
        className={
          showNavMenu ? "relative pb-4 bg-blue-50 " : "relative bg-blue-50"
        }
      >
        <div className="flex justify-between p-6">
          <Link to="/" className="font-bold text-lg">
            <span className="text-blue-500">Link</span>
            <span className="text-blue-300">Hub</span>
          </Link>
          <div className=" cursor-pointer">
            {!showNavMenu ? (
              <div onClick={() => setShowNavMenu((p) => !p)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  height="26"
                  width="26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            ) : (
              <div
                onClick={() => {
                  setShowNavMenu((p) => !p);
                  setShowLogoutMenu(false);
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0" // Change stroke-width to strokeWidth
                  viewBox="0 0 1024 1024"
                  height="26"
                  width="26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </div>
            )}
          </div>
        </div>
        {showNavMenu ? (
          <div className="absolute top-full bg-blue-50 w-full pb-6 shadow-md">
            <nav className="flex flex-col p-6 font-semibold text-blue-600 gap-4">
              <NavLink to="/">Find Jobs</NavLink>
              <NavLink to="/">Companies</NavLink>
              <NavLink to="/">Upload Jobs</NavLink>
              <NavLink to="/">About</NavLink>
            </nav>

            <div className="p-6 rounded-md shadow-md flex gap-2 items-center bg-white w-fit m-auto">
              <div className="text-blue-700 text-sm">
                <p className="font-bold">riyaj_b1</p>
                <p>riyajbhandari98@gmail.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="h-10 w-10 object-cover object-center rounded-[50%]"
                  src="https://scontent.fsif1-1.fna.fbcdn.net/v/t39.30808-6/408786261_18420131257040635_3170342171552451696_n.jpg?stp=dst-jpg_p960x960&_nc_cat=1&ccb=1-7&_nc_sid=3635dc&_nc_ohc=jmsEl9Ml0RwAX_vOqRW&_nc_ht=scontent.fsif1-1.fna&oh=00_AfDxlPte8qlETNmy17o4yDyD7y7di9am5A-lM3zzQijUWg&oe=657AA466"
                  alt="profile"
                />
                <div
                  className="relative cursor-pointer"
                  onClick={() => {
                    setShowLogoutMenu((p) => !p);
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0" // Change stroke-width to strokeWidth
                    viewBox="0 0 24 24"
                    className="h-8 w-8 text-slate-600" // Change class to className
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                  {showLogoutMenu && (
                    <div className="p-3 bg-white absolute left-[-450%] top-16 rounded-md shadow-md w-fit">
                      <div className="pb-3">
                        <Link to="/" className="flex">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="text-gray-600 mr-2 h-5 w-5  "
                            aria-hidden="true"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span>Company Profile</span>
                        </Link>
                      </div>
                      <div>
                        <Link to="/" className="flex">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            class="text-gray-600 mr-2 h-5 w-5  "
                            aria-hidden="true"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
                          </svg>
                          <span>Logout</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
