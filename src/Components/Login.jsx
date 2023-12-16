import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [accountType, setAccountType] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for login submission/validation here
    console.log("Login form submitted!");
  };

  return (
    <section className="mt-8 p-4 bg-transparent shadow-2xl rounded-lg mx-4 max-w-[600px] sm:mx-auto md:min-w-[600px] mb-8">
      <h1 className="font-bold text-xl text-center">Login</h1>
      <div className="flex gap-4 justify-center pt-4">
        <button
          className={`rounded-md ${
            accountType === "user"
              ? "bg-blue-500 text-white"
              : "bg-blue-100 text-blue-800"
          } px-4 py-2 font-semibold`}
          onClick={() => handleAccountTypeChange("user")}
        >
          User Account
        </button>
        <button
          className={`rounded-md ${
            accountType === "company"
              ? "bg-blue-500 text-white"
              : "bg-blue-100 text-blue-800"
          } px-4 py-2 font-semibold`}
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

          <div className="flex justify-center pb-4">
            <button
              type="submit"
              className="px-4 py-2 text-blue-800 font-semibold bg-blue-200 rounded-md"
            >
              Login
            </button>
          </div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
