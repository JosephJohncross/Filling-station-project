import React from "react";
import leftsvg from "../../../public/unsplash.svg";
import customericon from "../../../public/Group.svg";
import stationicon from "../../../public/Vector.svg";
import logo from "../../../src/assets/images/logo.svg";
import { Link } from "react-router-dom";
const SignUp = () => {
  const LeftPage = {
    backgroundImage: `url(${leftsvg})`,
  };
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full flex flex-row">
        {/* left page */}
        <div
          className="left h-full w-1/3 flex flex-col px-8 gap-8 justify-center"
          style={LeftPage}
        >
          <img className="w-48" src={logo} alt="logo" />
          <h1 className="text-3xl text-white font-pt font-bold">
            Uyo Fuel Inform tells you all you need to know on
          </h1>
          <ul className="text-sm text-white flex flex-col gap-4">
            <li>The Availability of Fuel in Filling Stations around you</li>
            <li>The Price of Fuel in each Filling Station</li>
            <li>The Distance of the Fuel Station from you</li>
            <li>Reviews from other Customers</li>
            <li>Fuel Insights</li>
            <li>and many more...</li>
          </ul>
        </div>
        {/* right page */}
        <div className="right w-2/3 flex flex-col gap-16 justify-center bg-[#E8EAF5]">
          <div className="flex flex-col gap-8 text-left pl-56 text-[#1B1B1B]">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <h3 className="text-2xl">Select an Account Type</h3>
          </div>
          <div className="flex flex-row gap-12 justify-center ">
            <Link
              to="/customersignup"
              className="bg-[#bcc2e3] flex flex-col items-center justify-center text-center gap-3 relative w-[250px] h-[250px] rounded-lg"
            >
              <div className="bg-[#E8EAF5] rounded-full w-16 h-16 flex items-center justify-center">
                <img src={customericon} alt="Customer Icon" className="w-8" />
              </div>

              <h2 className="font-pt text-lg tracking-[2.9] leading-[34.5px]  relative">
                User Account
              </h2>
              <p className="font-pt tracking-[2.5px] leading-[28.7px] relative w-3/4">
                Click Here to Create an Account for a General User
              </p>
            </Link>
            <Link
              to="/stationsignup"
              className="bg-[#FED9A5] flex flex-col items-center justify-center text-center gap-3 relative w-[250px] h-[250px] rounded-lg"
            >
              <div className="bg-[#E8EAF5] rounded-full w-16 h-16 flex items-center justify-center">
                <img src={stationicon} alt="Station Icon" className="w-8" />
              </div>

              <h2 className="font-pt text-lg tracking-[2.9] leading-[34.5px]  relative">
                Station Account
              </h2>
              <p className="font-pt tracking-[1.7px] leading-[25.7px] relative w-3/4">
                Click Here to Register a Filling Station to the Platform{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
