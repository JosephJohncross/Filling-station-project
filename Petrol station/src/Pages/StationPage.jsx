import React, { useState } from "react";
import CustomHeader from "../Layout/CustomHeader";
import DefaultFooter from "../Layout/DefaultFooter";
import { useImmerReducer } from "use-immer";
import ReviewCard from "../Component/Station/ReviewCard";

// image import
import stationLogo from "../assets/images/station-logo.svg";
import halfStar from "../assets/images/half-star.svg";
import fullStar from "../assets/images/full-star.svg";
import emptyStar from "../assets/images/empty-star.svg";
import favorite from "../assets/images/favorite.svg";
import naira from "../assets/images/naira.svg";
import pos from "../assets/images/pos.svg";
import noPos from "../assets/images/no-pos.svg";
import miniMart from "../assets/images/cart.svg";
import noMiniMart from "../assets/images/no-cart.svg";
import repairs from "../assets/images/reapiirs.svg";
import noRepairs from "../assets/images/no-repairs.svg";
import carWash from "../assets/images/car-was.svg";
import noCarWash from "../assets/images/no-was.svg";
import message from "../assets/images/message.svg";
import reviewImg from "../assets/images/review-img.svg";

// React Leaflet
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { Icon } from "leaflet";
import Button from "../Component/Common/Button";

const petrolIcon = new Icon({
  iconUrl: "/src/assets/images/mapicons/petrol-station.png",
  iconSize: [35, 35],
});

// static values to change later
const isCarWash = false;
const isPos = true;
const isMechanics = false;
const isMiniMart = false;

const reduceFunction = (draft, action) => {
  switch (action.type) {
    case "switch1Star":
      draft.rating = 1;
      //   draft.oneStar = true;
      break;
    case "switch2Star":
      draft.rating = 2;
      //   draft.oneStar = true;
      //   draft.twoStar = true;
      break;
    case "switch3Star":
      draft.rating = 3;
      draft.oneStar = true;
      draft.twoStar = true;
      draft.threeStar = true;
      break;
    case "switch4Star":
      draft.rating = 4;
      //   draft.oneStar = true;
      //   draft.twoStar = true;
      //   draft.threeStar = true;
      //   draft.fourStar = true;
      break;
    case "switch5Star":
      draft.rating = 5;
      //   draft.oneStar = true;
      //   draft.twoStar = true;
      //   draft.threeStar = true;
      //   draft.fourStar = true;
      //   draft.fiveStar = true;
      break;
  }
};

const initalState = {
  rating: 0,
};

const StationPage = () => {
  const [state, dispatch] = useImmerReducer(reduceFunction, initalState);

  return (
    <section className="">
      <div className="container_limiter">
        <CustomHeader />
        <>
          <section className="">
            <h1 className="font-pt text-4xl text-[#1b1b1b] mb-6">
              Mobile Filling Station Oron Road
            </h1>
            <div className="flex flex-col mini:flex-row mini:justify-between mini:space-x-9">
              {/* Left flex */}
              <div className="flex flex-col gap-y-4 mini:gap-6 mini:w-3/5">
                {/* Station details */}
                <div className="shadow-rounded-md rounded-md p-8 flex">
                  <div className="flex space-x-4 mini:w-3/5">
                    {/* Logo */}
                    <div className="w-16 h-16 flex justify-center items-center border border-gray-400 rounded-full">
                      <img src={stationLogo} alt="" />
                    </div>
                    {/* Main details */}
                    <div className="">
                      <p className="font-pt text-xl">Mobil</p>
                      <div className="flex items-center space-x-2 pb-3">
                        <img src={fullStar} alt="" className="w-4" />
                        <img src={fullStar} alt="" className="w-4" />
                        <img src={fullStar} alt="" className="w-4" />
                        <img src={halfStar} alt="" className="w-4" />
                        <img src={emptyStar} alt="" className="w-4" />
                        <p className="text-[.7rem] text-[#A6A096]">(98)</p>
                      </div>
                      <p className="font-pt text-sm pb-2">Uyo High School</p>
                      <p className="font-pt text-sm">A342 Oron Road</p>
                      <p className="font-pt text-base text-primColor pt-6">
                        09048005346
                      </p>
                      <div className="flex divide-x items-center space-x-2 text-sm pt-2">
                        <p className="text-primColor font-pt">Open</p>
                        <p className="pl-2 font-nunito">From 6am-9pm</p>
                      </div>
                    </div>
                    <img
                      src={favorite}
                      alt=""
                      className="w-9 cursor-pointer mini:hidden"
                    />
                  </div>

                  {/* Favourite */}
                  <div className="hidden mini:w-2/5 mini:flex flex-col items-center justify-center border-l-2 border-l-gray-200">
                    <img
                      src={favorite}
                      alt=""
                      className="w-1/3 pb-3 cursor-pointer"
                    />
                    <p className="">Add to Favourite</p>
                    <p className="">Station</p>
                  </div>
                </div>
                {/* Fuel Prices */}
                <div className="">
                  <p className="font-pt text-xl text-[#1B1B1B] py-4">
                    Fuel Prices
                  </p>
                  <div className="shadow-rounded-md rounded-md py-9 px-10 flex space-x-6 items-center">
                    {/* Naira */}
                    <div className="">
                      <img src={naira} alt="" />
                    </div>
                    <div className="w-full flex items-center divide-x-2">
                      {/* Petrol */}
                      <div className="w-1/3 flex flex-col text-textColor/70 text-center space-y-2">
                        <p className="text-lg font-medium">Petrol</p>
                        <p className="text-black font-pt text-2xl">380</p>
                        <p className="text-sm font-nunito font-medium">
                          Price Updated
                          <span className="block">15 Hours Ago</span>
                        </p>
                      </div>
                      {/* Diesel */}
                      <div className="w-1/3 flex flex-col text-textColor/70 text-center space-y-2">
                        <p className="text-lg font-medium">Diesel</p>
                        <p className="font-bold text-4xl">
                          -{""}-{""}-
                        </p>
                        <p className="text-sm font-nunito font-medium">
                          Price Updated
                          <span className="block">10 Hours Ago</span>
                        </p>
                      </div>
                      {/* Kerosene */}
                      <div className="w-1/3 flex flex-col text-textColor/70 text-center space-y-2">
                        <p className="text-lg font-medium">Kerosene</p>
                        <p className="text-black font-pt text-2xl">550</p>
                        <p className="text-sm font-nunito font-medium">
                          Price Updated
                          <span className="block">36 Hours Ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right flex */}
              <div className="w-full mini:w-2/5">
                <div className="map-scroll rounded-lg mini:h-[70vh] mb-4">
                  <MapContainer
                    center={[5.0421838, 7.9701854]}
                    zoom={12}
                    scrollWheelZoom={false}
                    style={{ height: "100%" }}
                    zoomControl={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      // url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      // url={`https://api.mapbox.com/styles/v1/${VITE_USERNAME}/${VITE_STYLE_ID}.html?title=view&access_token=${VITE_ACCESS_TOKEN}&zoomwheel=true&fresh=true#11/48.138/11.575`}
                    />
                    <ZoomControl position="topright" />
                    <Marker
                      icon={petrolIcon}
                      position={[5.0421838, 7.9701854]}
                      key={1}
                      title="Piranha"
                      riseOnHover={true}
                    >
                      <Popup>
                        <div className="font-didact w-44 text-center">
                          <p className="font-semibold">{"Piranha"}</p>
                          {/* <img
                            src={houseListing}
                            alt="propert-image"
                            className="w-full h-28"
                          />
                          <p className=""></p>
                          <Link to={"/station"}>
                            <button className="w-full text-white rounded-full px-3 py-2 bg-sky-400 hover:bg-sky-500 font-medium">
                              Visit
                            </button>
                          </Link> */}
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
                <button className="w-full rounded-md px-6 py-2 font-semibold font-pt text-base focus:outline-primColor text-[#F2F2F2] bg-primColor shadow-md hover:bg-primColor/80 hover:shadow-sm flex justify-center items-center">
                  Get Directions
                </button>
              </div>
            </div>
            {/* Reviews and services */}
            <div className="flex flex-col mini:flex-row mini:justify-between mini:space-x-9 mt-10">
              {/* Reviews */}
              <div className="flex flex-col gap-y-4 mini:gap-6 mini:w-3/5">
                <p className="font-pt text-xl text-[#1B1B1B] py-4">Reviews</p>
                {/* Review box */}
                <div>
                  <div className="">
                    <textarea
                      id="message"
                      rows="10"
                      className="resize-none block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Share the experience you had with this station"
                    ></textarea>
                  </div>
                  <div className="flex justify-end pt-3">
                    <button className="ounded-md px-6 py-2 rounded-md font-semibold font-pt text-base focus:outline-primColor  text-[#F2F2F2] bg-primColor shadow-md hover:bg-primColor/80 hover:shadow-sm flex justify-center items-center">
                      <div className="flex justify-center items-center space-x-3">
                        <span>Send</span>
                        <img src={message} alt="" />
                      </div>
                    </button>
                  </div>
                </div>
                {/* Review section */}
                <div className="grid mini:grid-cols-2 mini:gap-5 grid-1 gap-y-3">
                  <ReviewCard
                    img={reviewImg}
                    review={
                      "Lorem ipsum dolor sit amet consectetur. Enim penatibus interdum facilisis lectus. Urna faucibus sem pulvinar vitae ornare metus."
                    }
                    author={"Lawrence Izzy"}
                    date={"Mar 24, 2023"}
                  />
                  <ReviewCard
                    review={
                      "Lorem ipsum dolor sit amet consectetur. Enim penatibus interdum facilisis lectus. Urna faucibus sem pulvinar vitae ornare metus."
                    }
                    author={"Lawrence Izzy"}
                    date={"Mar 24, 2023"}
                  />
                  <ReviewCard
                    review={
                      "Lorem ipsum dolor sit amet consectetur. Enim penatibus interdum facilisis lectus. Urna faucibus sem pulvinar vitae ornare metus."
                    }
                    author={"Lawrence Izzy"}
                    date={"Mar 24, 2023"}
                  />
                  <ReviewCard
                    review={
                      "Lorem ipsum dolor sit amet consectetur. Enim penatibus interdum facilisis lectus. Urna faucibus sem pulvinar vitae ornare metus."
                    }
                    author={"Lawrence Izzy"}
                    date={"Mar 24, 2023"}
                  />
                </div>
                <div className="flex justify-between">
                  <Button
                    content={"Go Back"}
                    shade={'white'}
                  />
                  <Button
                    content={"See more"}
                    shade={'blue'}
                  />
                </div>
              </div>
              {/* Services */}
              <div className="w-full mini:w-2/5 flex flex-col gap-y-6 mini:gap-y-8">
                {/* Other features */}
                <div className="">
                  <p className="font-pt text-xl text-[#1B1B1B] py-4">
                    Other Features of the Station
                  </p>
                  <div className="shadow-rounded-md rounded-md py-9 px-10 flex space-x-5 items-center">
                    {/* car wash */}
                    <div className="flex flex-col items-center space-y-2 w-1/4">
                      <img
                        src={isCarWash ? carWash : noCarWash}
                        alt=""
                        className="w-7"
                      />
                      <p
                        className={`text-sm font-nunito font-semibold ${
                          isCarWash ? "text-primColor" : "text-[#D9D9D9]"
                        }`}
                      >
                        Car Wash
                      </p>
                    </div>
                    {/* pos */}
                    <div className="flex flex-col items-center space-y-2 w-1/4">
                      <img src={isPos ? pos : noPos} alt="" className="w-7" />
                      <p
                        className={`text-sm font-nunito font-semibold ${
                          isPos ? "text-primColor" : "text-[#D9D9D9]"
                        }`}
                      >
                        POS
                      </p>
                    </div>
                    {/* mechanic */}
                    <div className="flex flex-col items-center space-y-2 w-1/4">
                      <img
                        src={isMechanics ? repairs : noRepairs}
                        alt=""
                        className="w-7"
                      />
                      <p
                        className={`text-sm font-nunito font-semibold ${
                          isMechanics ? "text-primColor" : "text-[#D9D9D9]"
                        }`}
                      >
                        Mechanic
                      </p>
                    </div>
                    {/* pos */}
                    <div className="flex flex-col items-center space-y-2 w-1/4">
                      <img
                        src={isMiniMart ? miniMart : noMiniMart}
                        alt=""
                        className="w-7"
                      />
                      <p
                        className={`text-sm font-nunito font-semibold ${
                          isMiniMart ? "text-primColor" : "text-[#D9D9D9]"
                        }`}
                      >
                        Mini Mart
                      </p>
                    </div>
                  </div>
                </div>
                {/* Rate station */}
                <div className="">
                  <p className="font-pt text-xl text-[#1B1B1B] py-4">
                    Rate Station ({state.rating})
                  </p>
                  <div className="shadow-rounded-md rounded-md py-9 px-10 flex flex-col space-y-5 justify-center">
                    <div className="flex items-center space-x-2 pb-3 justify-evenly w-full">
                      {/* 1 star */}
                      <img
                        src={state.rating >= 1 ? fullStar : emptyStar}
                        alt=""
                        className="w-6 hover:cursor-pointer"
                        onClick={() => {
                          dispatch({
                            type: "switch1Star",
                          });
                        }}
                      />
                      {/* 2 stars */}
                      <img
                        src={state.rating >= 2 ? fullStar : emptyStar}
                        alt=""
                        className="w-6 hover:cursor-pointer"
                        onClick={() => {
                          dispatch({
                            type: "switch2Star",
                          });
                        }}
                      />
                      {/* 3 stars */}
                      <img
                        src={state.rating >= 3 ? fullStar : emptyStar}
                        alt=""
                        className="w-6 hover:cursor-pointer"
                        onClick={() => {
                          dispatch({
                            type: "switch3Star",
                          });
                        }}
                      />
                      {/* 4 stars */}
                      <img
                        src={state.rating >= 4 ? fullStar : emptyStar}
                        alt=""
                        className="w-6 hover:cursor-pointer"
                        onClick={() => {
                          dispatch({
                            type: "switch4Star",
                          });
                        }}
                      />
                      {/* 5 stars */}
                      <img
                        src={state.rating >= 5 ? fullStar : emptyStar}
                        alt=""
                        className="w-6 hover:cursor-pointer"
                        onClick={() => {
                          dispatch({
                            type: "switch5Star",
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
        <DefaultFooter />
      </div>
    </section>
  );
};

export default StationPage;
