import React, { useState, useEffect, useContext } from "react";
// import CustomHeader from "../Layout/CustomHeader";
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
import AuthContext from "../Context/AuthContext";

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
import { getStationProfile } from "../Services/station-request";
import { displayNotifications } from "../Services/helper";
import { createReview } from "../Services/user-request";
import { getStationReview } from "../Services/http-request";
import DefaultHeader from "../Layout/DefaultHeader";

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
    case "setStationDetails":
      draft.stationDetails = action.val;
      break;
    case "setRating":
      draft.rating = action.val;
      break;
    case "setLoading":
      draft.loading = action.val;
      break;
    case "setReview":
      draft.review = action.val;
      break;
    case "setStationReview":
      draft.reviews = action.val;
      break;
    case "setLoadingReview":
      draft.loadingReview = action.val;
      break;
  }
};

const initalState = {
  rating: 0,
  stationDetails: {},
  loading: true,
  review: "",
  loadingReview: true,
  reviews: [],
};

const StationPage = () => {
  const [state, dispatch] = useImmerReducer(reduceFunction, initalState);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const stationId = location.pathname.split("/")[2];
    // console.log(stationId)
    getStationProfile(stationId).then((data) => {
      console.log(data);
      dispatch({
        type: "setStationDetails",
        val: data,
      });
      dispatch({
        type: "setLoading",
        val: !state.loading,
      });
    });
  }, []);

  useEffect(() => {
    getStationReview(state.stationDetails?.id).then((data) => {
      dispatch({
        type: "setStationReview",
        val: data,
      });
      dispatch({
        type: "setLoadingReview",
        val: false,
      });
    });
  }, [state.stationDetails]);

  return (
    <section className="">
      {state.loading ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 flex justify-center items-center z-[1000000000000]">
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-8 h-8 mr-2 text-gray-100 animate-spin fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <DefaultHeader />
          <div className="container_limiter mt-8">
            <>
              <section className="">
                <h1 className="font-pt text-4xl text-[#1b1b1b] mb-12">
                  {state.stationDetails?.name}
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
                          <p className="font-pt text-sm pb-2">
                            {state.stationDetails?.address}
                          </p>
                          {/* <p className="font-pt text-sm">A342 Oron Road</p> */}
                          <p className="font-pt text-base text-primColor pt-6">
                            {state.stationDetails?.phone}
                          </p>
                          <div className="flex divide-x items-center space-x-2 text-sm pt-2">
                            <p className="text-primColor font-pt">
                              {state.stationDetails?.is_open
                                ? "Open"
                                : "Closed"}
                            </p>
                            <p className="pl-2 font-nunito">
                              {state.stationDetails?.operation_time
                                ? `From ${state.stationDetails?.operation_time}`
                                : ""}
                            </p>
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
                    <div className="mb-7 mini:mb-0">
                      <p className="font-pt text-xl text-[#1B1B1B] py-4">
                        Fuel Prices
                      </p>
                      <div className="shadow-rounded-md rounded-md py-9 mini:px-10 flex mini:space-x-6 items-center">
                        {/* Naira */}
                        <div className="hidden mini:block">
                          <img src={naira} alt="" />
                        </div>
                        <div className="w-full flex items-center divide-x-2">
                          {/* Petrol */}
                          <div className="w-1/3 flex flex-col text-textColor/70 text-center space-y-2">
                            <p className="text-lg font-medium">Petrol</p>
                            <p className="font-bold text-4xl">
                              {state.stationDetails?.petrol_price
                                ? state.stationDetails?.petrol_price
                                : `- - -`}
                            </p>
                            <p className="text-sm font-nunito font-medium">
                              Price Updated
                              <span className="block">15 Hours Ago</span>
                            </p>
                          </div>
                          {/* Diesel */}
                          <div className="w-1/3 flex flex-col text-textColor/70 text-center space-y-2">
                            <p className="text-lg font-medium">Diesel</p>
                            <p className="font-bold text-4xl">
                              {state.stationDetails?.diesel_price
                                ? state.stationDetails?.diesel_price
                                : `- - -`}
                            </p>
                            <p className="text-sm font-nunito font-medium">
                              Price Updated
                              <span className="block">10 Hours Ago</span>
                            </p>
                          </div>
                          {/* Kerosene */}
                          <div className="w-1/3 flex flex-col text-textColor/70 text-center space-y-2">
                            <p className="text-lg font-medium">Kerosene</p>
                            {/* <p className="text-black font-pt text-2xl"> */}
                            <p className="font-bold text-4xl">
                              {state.stationDetails?.kerosene_price
                                ? state.stationDetails?.kerosene_price
                                : `- - -`}
                            </p>
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
                    <div className="map-scroll rounded-lg h-[70vh] mb-4">
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
                          position={[
                            state.stationDetails?.latitude,
                            state.stationDetails?.longitude,
                          ]}
                          key={1}
                          title="Piranha"
                          riseOnHover={true}
                        >
                          <Popup>
                            <div className="font-didact w-44 text-center">
                              <p className="font-semibold">{"Piranha"}</p>
                            </div>
                          </Popup>
                        </Marker>
                      </MapContainer>
                    </div>
                    <a
                      href={`https://www.google.com/maps?q=${state.stationDetails?.latitude},${state.stationDetails?.longitude}&z=12`}
                      target="_blank"
                      className="w-full rounded-md px-6 py-2 font-semibold font-pt text-base focus:outline-primColor text-[#F2F2F2] bg-primColor shadow-md hover:bg-primColor/80 hover:shadow-sm flex justify-center items-center"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
                {/* Reviews and services */}
                <div className="flex flex-col mini:flex-row mini:justify-between mini:space-x-9 mt-10">
                  {/* Reviews */}
                  <div className="flex flex-col gap-y-4 mini:gap-6 mini:w-3/5 order-2 mini:order-1">
                    <p className="font-pt text-xl text-[#1B1B1B] py-4">
                      Reviews
                    </p>
                    {/* Review box */}
                    <div>
                      <div className="">
                        <textarea
                          value={state.review}
                          id="message"
                          rows="10"
                          className="resize-none block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="Share the experience you had with this station"
                          onChange={(e) => {
                            dispatch({
                              type: "setReview",
                              val: e.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                      <div className="flex justify-end pt-3">
                        <button
                          onClick={() => {
                            if (!user && user?.role !== 1) {
                              displayNotifications("Login to make a review");
                            } else {
                              createReview(
                                user?.user_id,
                                state.stationDetails?.id,
                                state.review
                              );
                            }
                          }}
                          className="ounded-md px-6 py-2 rounded-md font-semibold font-pt text-base focus:outline-primColor  text-[#F2F2F2] bg-primColor shadow-md hover:bg-primColor/80 hover:shadow-sm flex justify-center items-center"
                        >
                          <div className="flex justify-center items-center space-x-3">
                            <span>Send</span>
                            <img src={message} alt="" />
                          </div>
                        </button>
                      </div>
                    </div>
                    {/* Review section */}
                    {state.loadingReview ? (
                      <div className="flex justify-between">
                        <div
                          role="status"
                          class="max-w-xs p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 "
                        >
                          {/* <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 roundedfu ">
                            <svg
                              class="w-10 h-10 text-gray-200 dark:text-gray-600"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 20"
                            >
                              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            </svg>
                          </div> */}
                          <div class="flex items-center mt-4 space-x-3">
                            <svg
                              class="w-10 h-10 text-gray-200 dark:text-gray-700"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            <div>
                              <div class="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
                              <div class="w-48 h-2 bg-gray-200 rounded-full "></div>
                            </div>
                          </div>
                          <div class="h-2.5 bg-gray-200 rounded-full  w-48 mb-4 mt-3"></div>
                          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full "></div>

                          <span class="sr-only">Loading...</span>
                        </div>
                        <div
                          role="status"
                          class="max-w-xs p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 "
                        >
                          {/* <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 roundedfu ">
                            <svg
                              class="w-10 h-10 text-gray-200 dark:text-gray-600"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 20"
                            >
                              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                            </svg>
                          </div> */}
                          <div class="flex items-center mt-4 space-x-3">
                            <svg
                              class="w-10 h-10 text-gray-200 dark:text-gray-700"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                            <div>
                              <div class="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
                              <div class="w-48 h-2 bg-gray-200 rounded-full "></div>
                            </div>
                          </div>
                          <div class="h-2.5 bg-gray-200 rounded-full  w-48 mb-4 mt-3"></div>
                          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full "></div>

                          <span class="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <div className="">
                        <div className="grid mini:grid-cols-2 mini:gap-5 grid-1 gap-y-3">
                          {state.reviews?.map((review) => {
                            return (
                              <ReviewCard
                                img={
                                  review?.user_profile_picture
                                    ? review?.user_profile_picture
                                    : reviewImg
                                }
                                review={review?.review}
                                author={review?.name}
                                date={review?.date}
                              />
                            );
                          })}
                        </div>
                        {state.reviews?.length > 10 && (
                          <div className="flex justify-end">
                            <Button content={"See more"} shade={"blue"} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {/* Services */}
                  <div className="w-full mini:w-2/5 flex flex-col gap-y-6 mini:gap-y-8 order-1 mini:order-2">
                    {/* Other features */}
                    <div className="">
                      <p className="font-pt text-xl text-[#1B1B1B] py-4">
                        Other Features of the Station
                      </p>
                      <div className="shadow-rounded-md rounded-md py-9 px-10 flex space-x-5 items-center">
                        {/* car wash */}
                        <div className="flex flex-col items-center space-y-2 w-1/4">
                          <img
                            src={
                              state.stationDetails?.car_wash == 1
                                ? carWash
                                : noCarWash
                            }
                            alt=""
                            className="w-7"
                          />
                          <p
                            className={`text-sm font-nunito font-semibold ${
                              state.stationDetails?.car_wash == 1
                                ? "text-primColor"
                                : "text-[#D9D9D9]"
                            }`}
                          >
                            Car Wash
                          </p>
                        </div>
                        {/* pos */}
                        <div className="flex flex-col items-center space-y-2 w-1/4">
                          <img
                            src={state.stationDetails?.pos == 1 ? pos : noPos}
                            alt=""
                            className="w-7"
                          />
                          <p
                            className={`text-sm font-nunito font-semibold ${
                              state.stationDetails?.pos == 1
                                ? "text-primColor"
                                : "text-[#D9D9D9]"
                            }`}
                          >
                            POS
                          </p>
                        </div>
                        {/* mechanic */}
                        <div className="flex flex-col items-center space-y-2 w-1/4">
                          <img
                            src={
                              state.stationDetails?.car_mechanic
                                ? repairs
                                : noRepairs
                            }
                            alt=""
                            className="w-7"
                          />
                          <p
                            className={`text-sm font-nunito font-semibold ${
                              state.stationDetails?.car_mechanic
                                ? "text-primColor"
                                : "text-[#D9D9D9]"
                            }`}
                          >
                            Mechanic
                          </p>
                        </div>
                        {/* pos */}
                        <div className="flex flex-col items-center space-y-2 w-1/4">
                          <img
                            src={
                              state.stationDetails?.mini_mart == 1
                                ? miniMart
                                : noMiniMart
                            }
                            alt=""
                            className="w-7"
                          />
                          <p
                            className={`text-sm font-nunito font-semibold ${
                              state.stationDetails?.mini_mart == 1
                                ? "text-primColor"
                                : "text-[#D9D9D9]"
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
                              if (user && user.user_id == 1) {
                                dispatch({
                                  type: "switch1Star",
                                });
                              } else {
                                displayNotifications(
                                  "Login to rate this station"
                                );
                              }
                            }}
                          />
                          {/* 2 stars */}
                          <img
                            src={state.rating >= 2 ? fullStar : emptyStar}
                            alt=""
                            className="w-6 hover:cursor-pointer"
                            onClick={() => {
                              if (user && user.user_id == 1) {
                                dispatch({
                                  type: "switch2Star",
                                });
                              } else {
                                displayNotifications(
                                  "Login to rate this station"
                                );
                              }
                            }}
                          />
                          {/* 3 stars */}
                          <img
                            src={state.rating >= 3 ? fullStar : emptyStar}
                            alt=""
                            className="w-6 hover:cursor-pointer"
                            onClick={() => {
                              if (user && user.user_id == 1) {
                                dispatch({
                                  type: "switch3Star",
                                });
                              } else {
                                displayNotifications(
                                  "Login to rate this station"
                                );
                              }
                            }}
                          />
                          {/* 4 stars */}
                          <img
                            src={state.rating >= 4 ? fullStar : emptyStar}
                            alt=""
                            className="w-6 hover:cursor-pointer"
                            onClick={() => {
                              if (user && user.user_id == 1) {
                                dispatch({
                                  type: "switch4Star",
                                });
                              } else {
                                displayNotifications(
                                  "Login to rate this station"
                                );
                              }
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
        </>
      )}
    </section>
  );
};

export default StationPage;
