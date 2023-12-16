import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [accountType, setAccountType] = useState("user");
  const [firstname, setFirstname] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [areBothPassworSame, setAreBothPasswordSame] = useState(true);

  useEffect(() => {
    password === confirmPassword
      ? setAreBothPasswordSame(true)
      : setAreBothPasswordSame(false);
  }, [password, confirmPassword]);
  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission/validation here
    console.log("Form submitted!");
  };

  return (
    <section className="mt-8 p-4 bg-transparent rounded-lg mx-4  max-w-[750px] lg:min-w-[800px] md:mx-auto md:min-w-[600px] mb-8 shadow-2xl ">
      <h1 className="font-bold text-xl text-center">Create Account</h1>
      <div className="flex gap-4 justify-center pt-4 ">
        <button
          className={`rounded-md ${
            accountType === "user"
              ? "bg-blue-500 text-white"
              : "bg-blue-100 text-blue-800"
          } px-4 py-2  font-semibold`}
          onClick={() => handleAccountTypeChange("user")}
        >
          Users Account
        </button>
        <button
          className={`rounded-md ${
            accountType === "company"
              ? "bg-blue-500 text-white"
              : "bg-blue-100 text-blue-800"
          } px-4 py-2  font-semibold`}
          onClick={() => handleAccountTypeChange("company")}
        >
          Company Account
        </button>
      </div>
      <div className="pt-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col pb-3">
            <label htmlFor="email" className="font-light text-slate-600 w-full">
              Email
            </label>
            <input
              className="p-2 outline-none  rounded-md"
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {accountType === "user" ? (
            <div className="flex flex-col sm:flex-row gap-4 pb-3 justify-between">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="firstname"
                  className="font-light text-slate-600"
                >
                  Firstname
                </label>
                <input
                  className="p-2 outline-none  rounded-md"
                  id="firstname"
                  placeholder="eg. Riyaj"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-light text-slate-600" htmlFor="lastname">
                  Lastname
                </label>
                <input
                  className="p-2 outline-none  rounded-md"
                  id="lastname"
                  placeholder="eg. Bhandari"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col pb-3">
              <label
                className="font-light text-slate-600"
                htmlFor="companyname"
              >
                Company Name
              </label>
              <input
                className="p-2 outline-none  rounded-md"
                id="companyname"
                placeholder="eg. Microsoft Inc."
                value={companyname}
                onChange={(e) => setCompanyname(e.target.value)}
              />
            </div>
          )}

          <div className="flex flex-col pb-3">
            <label className="font-light text-slate-600" htmlFor="password">
              Password
            </label>
            <input
              className="p-2 outline-none  rounded-md"
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col pb-4">
            <label
              className="font-light text-slate-600"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="p-2 outline-none  rounded-md"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {!areBothPassworSame ? (
            <div className="text-center pt-2 pb-4 text-red-500">
              Password don't match
            </div>
          ) : null}

          <div className="flex justify-center pb-4">
            <button
              type="submit"
              className="px-4 py-2 text-blue-800 font-semibold bg-blue-200 rounded-md"
            >
              Create Account
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
