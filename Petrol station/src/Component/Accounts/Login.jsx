import React from "react";

const Login = () => {


  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
  };

  return (
    <div className="container_limiter flex flex-row">
      <div className="left w-1/3">
        <h1 className="text-red-500">Left</h1>
      </div>
      <div className="right w-2/3">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <form className="my-5 grid gap-7">
          <label className="block w-3/5">
            <span className="block text-sm font-medium text-slate-700">
              Email/Phone number
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>
          <label className="block w-3/5">
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="password"
              name="password"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>
          <button className="w-1/5" style={buttonStyle}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
