import React from "react";

// image import
import ratingIcon from "../../assets/images/rating.svg";
import Button from "../Common/Button";
import PriceCard from "./PriceCard";
import { Link } from "react-router-dom";

const StationSearchCard = ({
  distance,
  openingTime,
  name,
  address,
  rating,
  petrolPrice,
  dieselPrice,
  kerosinePrice,
  clickFunction,
  hide,
  stationImg,
  favorite,
  stationSlug
}) => {
  return (
    <div
      className="w-full p-6 flex flex-col mini:flex-row gap-y-5 mini:gap-y-0 bg-white font-open shadow-rounded-xl hover:bg-gray-100/80 transition-colors duration-200"
      onClick={() => {}}
    >
      {/* Left side */}
      <div className="w-full mini:w-2/3 flex flex-col space-y-3">
        {/* Direction and opening hour */}
        <div className="flex divide-x items-center space-x-2 text-xs">
          <p className="">{distance} away</p>
          <p className="text-[#0B8826] pl-2">Open from {openingTime}</p>
        </div>
        {/* Name */}
        <p className="text-xl font-semibold font-pt">{name}</p>
        {/* Address */}
        <p className="text-sm">{address}</p>
        {/* Rating */}
        <div className="flex flex-col text-sm font-open">
          <span className="flex space-x-2 items-center">
            <div className="flex items-center">
              <span className=" font-semibold">{rating}</span>
              <img src={ratingIcon} alt="" className="w-4 inline-flex" />
              <p className="pl-2">Rating</p>
            </div>
          </span>
          <p className="text-[#D20000]">
            {hide ? "" : "Log in to see Customer’s reviews"}
          </p>
        </div>
        {favorite && (
          <>
            <p
              className="cursor-pointer hover:text-green-500 text-sm font-pt w-max"
              onClick={() => {}}
            >
              Remove from favorites
            </p>
          </>
        )}
        <Link to={`/station/${stationSlug}`}>
          <Button
            shade={"blueBig"}
            content={favorite ? "Visit" : "Go to"}
            icon={true}
            clickFunction={()=> {

            }}
          />
        </Link>
      </div>
      {/* Right side */}
      <div className=" w-full mini:w-1/3 flex ipad:justify-end items-center">
        <PriceCard
          diesel={dieselPrice}
          kerosene={kerosinePrice}
          petrol={petrolPrice}
        />
      </div>
    </div>
  );
};

export default StationSearchCard;
