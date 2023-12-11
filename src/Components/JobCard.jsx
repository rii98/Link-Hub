import React from "react";
// This componet will take props.
const JobCard = () => {
  return (
    <div
      className="cursor-pointer p-4 w-[300px] rounded-md  mb-6 mt-4"
      style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.1)" }}
    >
      <div className="flex items-start gap-4 pb-6">
        <div className=" rounded-[50%]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="logo company"
            className="h-10 w-10 rounded-[50%] object-center object-cover"
          />
        </div>
        <div className="flex items-center justify-between flex-1">
          <div>
            <h2 className="text-slate-700 font-bold text-medium">
              Backend WebDeveloper
            </h2>
            <div className="flex gap-2 items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-slate-900 text-sm"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                <path d="M19.071 3.429h.001c3.905 3.905 3.905 10.237 0 14.142l-5.403 5.403a2.36 2.36 0 0 1-3.336 0l-5.375-5.375-.028-.028c-3.905-3.905-3.905-10.237 0-14.142 3.904-3.905 10.236-3.905 14.141 0ZM5.99 4.489v.001a8.5 8.5 0 0 0 0 12.02l.023.024.002.002 5.378 5.378a.859.859 0 0 0 1.214 0l5.403-5.404a8.5 8.5 0 0 0-.043-11.977A8.5 8.5 0 0 0 5.99 4.489Z"></path>
              </svg>
              <p className="text-sm">California</p>
            </div>
          </div>
        </div>
      </div>

      <p>Job description. Senior developer with knowledge of react,express.</p>
      <div className="flex justify-between items-center mt-6">
        <div className="font-semibold text-blue-500 p-2 rounded-sm bg-green-50">
          Senior
        </div>
        <div className="text-slate-500 text-sm"> 5 days ago</div>
      </div>
    </div>
  );
};

export default JobCard;
