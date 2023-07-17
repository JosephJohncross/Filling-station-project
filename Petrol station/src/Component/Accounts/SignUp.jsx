import React from "react";
import leftsvg from "../../assets/images/unsplash.svg";
import customericon from "../../assets/images/Group.svg";
import stationicon from "../../assets/images/Vector.svg";
import logo from "../../../src/assets/images/logo.svg";
import { Link } from "react-router-dom";


const SignUp = () => {
  const LeftPage = {
    backgroundImage: `url(${leftsvg})`,
  };


  return (
    <div className="md:h-screen overflow-hidden font-open">
      <div className="md:h-full flex flex-row">
        {/* left page */}
        <div
          className="left md:h-full md:w-1/3 flex flex-col pt-12 px-8 gap-8 justify-center"
          style={LeftPage}
        >
          <img className="w-48" src="/logo.svg" alt="logo" />
          <h1 className="text-3xl text-white font-pt font-bold">
            Uyo Fuel Inform tells you all you need to know on
          </h1>
          <ul className="text-sm text-white flex flex-col gap-2">
            <li>The Availability of Fuel in Filling Stations around you</li>
            <li>The Price of Fuel in each Filling Station</li>
            <li>The Distance of the Fuel Station from you</li>
            <li>Reviews from other Customers</li>
            <li>Fuel Insights</li>
            <li>and many more...</li>
          </ul>
          <div className="md:hidden mt-10 bg-[#E8EAF5] rounded-lg my-4 py-4 px-4">
            <div className="right flex flex-col gap-16 justify-center bg-[#E8EAF5]  md:px-10 mini:pl-20">
              <div className="flex flex-col text-left text-[#1B1B1B]">
                <h1 className="text-2xl font-pt text-center pb-5 font-bold">Sign Up</h1>
                <h3 className="text-center text-base font-semibold">
                  Select an Account Type
                </h3>
              </div>
              <div className="flex flex-row gap-5 md:gap-9 mini:gap-12">
                <Link
                  to="/customersignup"
                  className="bg-[#bcc2e3] focus:outline-[#697097] focus:border-transparent flex py-3 px-1 flex-col items-center justify-center text-center gap-3 relative md:w-[250px] md:h-[250px] rounded-lg"
                >
                  <div className="bg-[#E8EAF5] rounded-full w-16 h-16 flex items-center justify-center">
                    <img
                      src={customericon}
                      alt="Customer Icon"
                      className="w-8"
                    />
                  </div>

                  <h2 className="font-pt text-lg tracking-[2.9] leading-[34.5px] relative">
                    User Account
                  </h2>
                  <p className="text-sm relative w-3/4">
                    Click Here to Create an Account for a General User
                  </p>
                </Link>
                <Link
                  to="/stationsignup"
                  className="bg-[#FED9A5] focus:outline-[#b09062] py-3 px-1 focus:border-transparent flex flex-col items-center justify-center text-center gap-3 relative md:w-[250px] md:h-[250px] rounded-lg"
                >
                  <div className="bg-[#E8EAF5] rounded-full w-16 h-16 flex items-center justify-center">
                    <img src={stationicon} alt="Station Icon" className="w-8" />
                  </div>

                  <h2 className="font-pt text-lg tracking-[2.9] leading-[34.5px]  relative">
                    Station Account
                  </h2>
                  <p className="text-sm relative w-3/4">
                    Click Here to Register a Filling Station to the Platform
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* right page */}
        <div className="right w-2/3 hidden md:flex flex-col gap-16 justify-center bg-[#E8EAF5]  md:px-10 mini:pl-36">
          <div className="flex flex-col gap-8 text-left text-[#1B1B1B]">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <h3 className="text-2xl font-semibold">Select an Account Type</h3>
          </div>
          <div className="flex flex-row gap-12">
            <Link
              to="/customersignup"
              className="bg-[#bcc2e3] focus:outline-[#697097] focus:border-transparent flex flex-col items-center justify-center text-center gap-3 relative w-[250px] h-[250px] rounded-lg"
            >
              <div className="bg-[#E8EAF5] rounded-full w-16 h-16 flex items-center justify-center">
                <img src={customericon} alt="Customer Icon" className="w-8" />
              </div>

              <h2 className="font-pt text-lg tracking-[2.9] leading-[34.5px] relative">
                User Account
              </h2>
              <p className="text-sm relative w-3/4">
                Click Here to Create an Account for a General User
              </p>
            </Link>
            <Link
              to="/stationsignup"
              className="bg-[#FED9A5] focus:outline-[#b09062] focus:border-transparent flex flex-col items-center justify-center text-center gap-3 relative w-[250px] h-[250px] rounded-lg"
            >
              <div className="bg-[#E8EAF5] rounded-full w-16 h-16 flex items-center justify-center">
                <img src={stationicon} alt="Station Icon" className="w-8" />
              </div>

              <h2 className="font-pt text-lg tracking-[2.9] leading-[34.5px]  relative">
                Station Account
              </h2>
              <p className="text-sm relative w-3/4">
                Click Here to Register a Filling Station to the Platform
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
