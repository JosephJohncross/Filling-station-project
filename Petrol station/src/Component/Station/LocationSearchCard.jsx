import React from "react";
import { Link } from "react-router-dom";
import Button from "../Common/Button";

const LocationSearchCard = ({
  distance,
  title,
  county,
  city,
  latitude,
  longitude,
}) => {
//   console.log(`https://www.google.com/maps?q=${latitude},${longitude}&z=12`);
  return (
    <>
      <div className="w-full p-6 flex flex-col gap-y-5 bg-white font-open shadow-rounded-xl hover:bg-gray-100/80 transition-colors duration-200">
        {/* title */}
        <p className="text-2xl font-bold font-pt text-primColor">{title}</p>
        <div className="flex space-x-3">
          {/* county */}
          <div className="font-nunito text-lg">
            {county}, {city}
          </div>
          {/* Distance */}
          <span className="flex space-x-3 items-center">
            <p className="text-red-500">Distance: </p>
            <p className="text-base font-semibold">{distance} km</p>
          </span>
        </div>
        {/* city */}
        <a
          href={`https://www.google.com/maps?q=${latitude},${longitude}&z=12`}
          target="_blank"
        >
          <Button
            shade={"blueBig"}
            content={"Get direction"}
            icon={true}
            // clickFunction={() => {}}
          />
        </a>
      </div>
    </>
  );
};

export default LocationSearchCard;
