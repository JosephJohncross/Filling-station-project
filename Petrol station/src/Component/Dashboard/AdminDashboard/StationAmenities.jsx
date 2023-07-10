import React, { useState } from "react";

// image import
// import defaultImg  from "../../../assets/images/"

const StationAmenities = ({ icon = false, amenityName, amenityStatus }) => {
    const [amenityAvailable, setAmenityAvailable] = useState(amenityStatus)


  return (
    <>
      <div className="flex items-center justify-between">
        {/* Left flex */}
        <div className="flex items-center space-x-4">
          <span className="flex space-x-3 items-center ">
            {/* <span className={`${icon ? "flex justify-center items-center border border-primColor rounded-full w-11 h-11" : ""}`}> */}
              <img
                src={icon ? icon : "/default-amenity.svg"}
                alt=""
                className={icon ? "w-7" : ""}
              />
            </span>
            <p className="min-w-max">{amenityName}</p>
          {/* </span> */}
        </div>
        {/* Right flex */}
        <div className="">
            <label
            for={`${amenityName}`}
            className="inline-flex items-center space-x-4 cursor-pointer"
          >
            <span className="relative">
              <input
                id={`${amenityName}`}
                type="checkbox"
                className="hidden peer"
                checked={amenityAvailable}
                onChange={(e) => {
                    setAmenityAvailable(!amenityAvailable)
                }}
              />
              <div className="w-10 h-6 rounded-full shadow-inner bg-gray-300  peer-checked:bg-primColor"></div>
              <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 bg-primColor rounded-full shadow peer-checked:right-0 peer-checked:left-auto peer-checked:bg-white"></div>
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default StationAmenities;
