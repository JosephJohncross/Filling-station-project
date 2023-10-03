import React, { useState, useEffect } from "react";
const { VITE_USERNAME, VITE_STYLE_ID, VITE_ACCESS_TOKEN } = import.meta.env;
import { useNavigate } from "react-router-dom";
import { useImmerReducer } from "use-immer";
// import { Icon } from "leaflet";
import DefaultHeader from "../Layout/DefaultHeader";
// import { Link } from "react-router-dom";
// import AuthContext from "../Context/AuthContext";

import hero from "../../public/hero.svg";
import Button from "../Component/Common/Button";
import { displayNotifications } from "../Services/helper";
import { getStationInMyLocation } from "../Services/http-request";

const reducerFunction = (draft, action) => {
  switch (action.type) {
    case "setLatitude":
      draft.latitude = action.val;
      break;
    case "setLongitude":
      draft.longitude = action.val;
      break;
  }
};

const initialState = {
  latitude: "",
  longitude: "",
};

const Homepage = () => {
  const navigate = useNavigate();
  // const [longitude, setLocation] = useState(null);
  // const [lat, setLatitude] = useState(null);
  // const [long, setLongitude] = useState(null);
  const [state, dispatch] = useImmerReducer(reducerFunction, initialState);

  useEffect(() => {
    const controller = new AbortController();

    return () => {
      controller.abort();
    };
  }, []);

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // localStorage.setItem('latitude', latitude)
          // localStorage.setItem('longitude', longitude)
          localStorage.setItem("latitude", latitude);
          localStorage.setItem("longitude", longitude);
          // getStationInMyLocation(7.9122, 5.0116);
        },
        (error) => {
          displayNotifications("Error getting location");
          // console.error("Error getting location:", error);
        }
      );
    } else {
      displayNotifications("Location not available in this browser");
      // console.error("Geolocation is not available in this browser.");
    }
  };

  return (
    <>
      <DefaultHeader dispatch={dispatch} />
      {/* Hero section */}
      <div
        className="backdrop-brightness-50"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="container_limiter h-full py-20">
          <p className="text-white font-pt font-bold text-5xl">
            Unlocking a Seamless
            <span className="block">Fueling experience with Lgfuel:</span>
          </p>
          <ul className="text-white font-pt text-lg pt-8 flex flex-col space-y-2 font-semibold list-disc list-inside">
            <li className="">
              Know the Availability of Fuel in Filling Stations around you
            </li>
            <li className="">Know the Price of Fuel in each Filling Station</li>
            <li>Know the Distance of the Fuel Station from you</li>
            <li>
              Get Reviews and from other Customers who have used these Filling
              Stations
            </li>
            <li>and many more...</li>
          </ul>
          <div className=" py-8">
            <button
              className="rounded-md px-6 py-2 font-semibold font-pt text-base focus:outline-primColor  text-[#F2F2F2] bg-primColor shadow-md hover:bg-primColor/80 hover:shadow-sm flex justify-center items-center"
              onClick={() => {
                getCurrentLocation();
                navigate("stations");

                // displayNotifications(`${state.latitude} ${state.longitude}`);
              }}
            >
              See Filling Stations Close to you
            </button>
          </div>
        </div>
      </div>
      {/* Main body */}
      <div className="container_limiter mt-24 mb-14">
        {/* Availability */}
        <div className="flex flex-col gap-y-5 mini:gap-y-0 items-center mini:flex-row">
          {/* Left flex */}
          <div className="w-full mini:w-1/2">
            <p className="font-pt font-bold text-3xl mini:text-4xl leading-[3rem]">
              Know about the availability of{" "}
              <span className="block">
                Fuel in your Favourite Filling Station
              </span>{" "}
              with just a click
            </p>
            <div className="mt-7 font-open">
              <p className="mb-2">
                You do not need to journey far to get information on the
                availability of fuel in filling Station.
              </p>
              <p className="">
                Thanks to LgFuel. You can stay at your comfort zone and know the
                current price of fuel products at any Filling withing Uyo with
                other activities going on in the Filling Station. s
              </p>
            </div>
          </div>
          {/* Right flex */}
          <div className="w-full mini:w-1/2 flex justify-center items-center mini:items-start">
            <img src="/home1.svg" alt="" />
          </div>
        </div>
        {/* Different */}
        <div className="flex flex-col items-center mini:flex-row mt-12 gap-y-5 mini:gap-y-0">
          {/* Left flex */}
          <div className="w-full mini:w-1/2 flex justify-center order-2 mini:order-1">
            <img src="/home2.svg" alt="" />
          </div>

          {/* Right flex */}
          <div className="w-full mini:w-1/2 order-1 mini:order-2">
            <p className="font-pt font-bold text-3xl mini:text-4xl leading-[3rem]">
              I want to try a different Filling{" "}
              <span className="block">Station, How do I know</span> how well it
              services are?
            </p>
            <div className="mt-7 font-open">
              <p className="mb-2">
                You do not need to journey far to get information on the
                availability of fuel in filling Station.
              </p>
              <p className="">
                Thanks to LgFuel. You can stay at your comfort zone and know the
                current price of fuel products at any Filling withing Uyo with
                other activities going on in the Filling Station. s
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
