import React, { useState } from 'react';

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const buttonStyle = {
    backgroundColor: isChecked ? 'blue' : 'gray',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
  };

  return (
    <div className="container_limiter flex flex-row">
      <div className="left w-1/3">
        <h1 className="text-red-500">Left</h1>
      </div>
      <div className="right w-2/3">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <form className="my-5 grid gap-7">
          <label className="block w-3/5">
            <span className="block text-sm font-medium text-slate-700">
              User Name
            </span>
            <input
              type="text"
              name="username"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>
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
          <label className="flex w-3/5">
            <input
              type="checkbox"
              className="checked:bg-blue-500 w-11 mx-2"
              onChange={handleCheckboxChange}
            />
            <p>
              Creating an account means you are OK with our terms of services,
              Privacy Policy and default Notification Settings
            </p>
          </label>
          <button
          className='w-1/5'
            style={buttonStyle}
            disabled={!isChecked}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
