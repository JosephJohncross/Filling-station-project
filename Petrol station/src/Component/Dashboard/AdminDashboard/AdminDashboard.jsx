import React, { useContext } from "react";
import { useImmerReducer } from "use-immer";
import ButtonCapsule from "./ButtonCapsule";
import AuthContext from "../../../Context/AuthContext";

// Http request import
import { createStation } from "../../../Services/admin-request";

// Reducer function
const reducerFunction = (draft, action) => {
  switch (action.type) {
    case "switchDashboard":
      draft.activeTab = "dash";
      break;
    case "switchUpdates":
      draft.activeTab = "up";
      break;
    case "switchProfile":
      draft.activeTab = "prof";
      break;
  }
};

// Initial set state
const initialState = {
  activeTab: "dash",
};

// image import
import logo from "../../../assets/images/logo.svg";
import dashboardIcon from "../../../assets/images/dashboard.svg";
import updateIcon from "../../../assets/images/update.svg";
import profileIcon from "../../../assets/images/station-profile.svg";
import stationImage from "../../../assets/images/stationlogo.svg";
import Histogram from "../../Charts/Histogram";
import carWash from "../../../assets/images/car-was.svg";
import repairs from "../../../assets/images/reapiirs.svg";
import miniMart from "../../../assets/images/cart.svg";
import pos from "../../../assets/images/pos.svg";
import StationAmenities from "./StationAmenities";

const AdminDashboard = () => {
  const [state, dispatch] = useImmerReducer(reducerFunction, initialState);
  const { logoutUser } = useContext(AuthContext);

  return (
    <>
      <section className="bg-gray-100/30 mini:h-screen overflow-hidden w-screen">
        <div className="ipad:grid admin__layout h-full w-full">
          {/* Logo */}
          <div className="py-5 bg-white flex justify-center items-center  ">
            <img src={logo} alt="logo" className="w-20" />
          </div>

          {/* Right side of header */}
          {/* Notification */}
          <div className=" bg-white flex justify-end items-center mini:px-10 mini:pr-16">
            There
          </div>

          {/* Side navigation */}
          <div className="bg-white  pt-12 hidden ipad:block">
            {/* Filling station  */}
            <div className="px-3 mb-16">
              <div className=" bg-[#F6F6F6] text-[#1B1B1B] border border-transparent w-full transition-colors rounded-tr-full rounded-br-full rounded-bl-lg pl-4 py-4 flex space-x-3 items-center cursor-point">
                <img src={stationImage} alt="" />
                <p className="font-semibold font-open">Total Filling Station</p>
              </div>
            </div>
            {/* Navigation */}
            <div className="ipad:px-8 mini:px-10 flex flex-col gap-y-10">
              <ButtonCapsule
                Icon={dashboardIcon}
                active={state.activeTab === "dash" ? true : false}
                text={"Dashboard"}
                patch={dispatch}
                actionType={"switchDashboard"}
              />
              <ButtonCapsule
                Icon={updateIcon}
                active={state.activeTab === "up" ? true : false}
                text={"Make Updates"}
                patch={dispatch}
                actionType={"switchUpdates"}
              />
              <ButtonCapsule
                Icon={profileIcon}
                active={state.activeTab === "prof" ? true : false}
                text={"Station Profile"}
                patch={dispatch}
                actionType={"switchProfile"}
              />
              {/* Logout button */}
              <button
                className={`focus:outline-[#384AAD] w-full pt-5 transition-colors bg-primColor hover:bg-primColor/80 duration-300 rounded-tr-full rounded-br-full pl-4 py-4 flex space-x-3 items-center cursor-pointer `}
                onClick={(e) => {
                  e.preventDefault();
                  logoutUser();
                }}
              >
                <img src={"/logout.svg"} alt="" />
                <p className="font-semibold font-open text-white">Logout</p>
              </button>
            </div>
          </div>

          {/* Main body */}
          <div className="shadow-[inset_10px_0_10px_0px_rgba(0,0,0,.09)] mini:pl-5 mini:pt-5">
            <div className="bg-white w-full ipad:h-[85vh] ipad:overflow-y-auto ipad:dashboard_scroll mb-10">
              <div className="dashboard_limiter mt-7">
                <div className="flex justify-between items-center">
                  {/* Welcome text */}
                  <p className="font-semibold font-pt text-3xl">
                    Hi, Welcome Back
                  </p>
                  {/* Toggle Open and Close */}
                  <label className="flex items-center relative w-max cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="peer amenity-input appearance-none transition-colors cursor-pointer w-20 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gray-500"
                      onChange={(e) => {
                        console.log(e.target.checked ? true : false);
                      }}
                    />
                    <span className="absolute font-medium text-xs uppercase right-3 text-white peer-checked:hidden font-open">
                      {" "}
                      Close{" "}
                    </span>
                    <span className="absolute font-medium text-xs uppercase right-9 text-white hidden peer-checked:block font-open">
                      {" "}
                      {/* Open{" "} */}
                    </span>
                    <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
                  </label>
                </div>
              </div>
              {/* Dashboard */}
              {state.activeTab === "dash" && (
                <>
                  <div className="dashboard_limiter my-5">
                    {/* Dashboard cards */}
                    <div className="grid mini:grid-cols-4 ipad:grid-cols-3 grid-cols-2 mt-12 gap-y-4 gap-x-3 ipad:gap-y-3 ipad:gap-x-6">
                      {/* <DashboardCard
                        icon={"/clicks.svg"}
                        info={"Total Clicks"}
                        shade={"#D7DBEF"}
                        valueText={"2.5K"}
                        borderS={"#384AAD"}
                      /> */}
                      {/* Total clicks */}
                      <div
                        className={`rounded-lg flex flex-col justify-center items-center bg-[#D7DBEF] space-y-3 h-48 border-2 border-[#384AAD]`}
                      >
                        <img src={"/clicks.svg"} alt="" className="w-6" />
                        <p className="font-pt text-2xl">{"2.5K"}</p>
                        <p className="text-base font-open font-medium">
                          "Total Clicks"
                        </p>
                      </div>
                      {/* <DashboardCard
                        icon={"/star.svg"}
                        info={"Total Rating"}
                        shade={"#F4D9A6"}
                        valueText={"2.5"}
                        borderS={"#EBAE39"}
                      /> */}
                      {/* Total Rating */}
                      <div
                        className={`rounded-lg flex flex-col justify-center items-center bg-[#F4D9A6] space-y-3 h-48 border-2 border-[#EBAE39]`}
                      >
                        <img src={"/star.svg"} alt="" className="w-6" />
                        <p className="font-pt text-2xl">"2.5</p>
                        <p className="text-base font-open font-medium">
                          Total Rating
                        </p>
                      </div>
                      {/* <DashboardCard
                        icon={"/treview.svg"}
                        info={"Total Reviews"}
                        shade={"#CCFDFF4D"}
                        valueText={"34"}
                        borderS={"#01CBD4"}
                      /> */}
                      {/* Total Reviews */}
                      <div
                        className={`rounded-lg flex flex-col justify-center items-center bg-[#CCFDFF4D] space-y-3 h-48 border-2 border-[#01CBD4]`}
                      >
                        <img src={"/treview.svg"} alt="" className="w-6" />
                        <p className="font-pt text-2xl">34</p>
                        <p className="text-base font-open font-medium">
                          Total Reviews
                        </p>
                      </div>
                      {/* <DashboardCard
                        icon={"/fav.svg"}
                        info={"Total Favourites"}
                        shade={"#ECB7B7"}
                        valueText={"10"}
                        borderS={"#C62828"}
                      /> */}
                      {/* Total Favourites */}
                      <div
                        className={`rounded-lg flex flex-col justify-center items-center bg-[#ECB7B7] space-y-3 h-48 border-2 border-[#C62828]`}
                      >
                        <img src={"/fav.svg"} alt="" className="w-6" />
                        <p className="font-pt text-2xl">10</p>
                        <p className="text-base font-open font-medium">
                          Total Favourites
                        </p>
                      </div>
                    </div>
                    {/* Chart */}
                    <div className="pt-10 border border-black mt-14 mini:mt-16 mini:w-1/2">
                      <Histogram />
                    </div>
                  </div>
                </>
              )}
              {/* Make Updates */}
              {state.activeTab === "up" && (
                <>
                  <form className="dashboard_limiter mt-8 flex flex-col gap-y-9 mini:flex-row mini:justify-between mini:gap-x-16">
                    {/* Fuel Product update */}
                    <div className="mini:w-1/2 rounded-lg px-5 shadow-rounded-md mini:px-7 pt-6">
                      <h3 className="font-pt text-lg mb-8">Fuel Product</h3>
                      {/* Petrol input */}
                      <div className="space-y-2 mb-7">
                        <label htmlFor="petrol_price" className="">
                          Petrol
                        </label>
                        <input
                          id="petrol_price"
                          type="text"
                          name="petrol_price"
                          className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                        />
                      </div>
                      {/* Diesel input */}
                      <div className="space-y-2 mb-7">
                        <label htmlFor="diesel_price" className="">
                          Diesel
                        </label>
                        <input
                          id="diesel_price"
                          type="text"
                          name="petrol_price"
                          className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                        />
                      </div>
                      {/* Kerosene input */}
                      <div className="space-y-2">
                        <label htmlFor="kerosene_price" className="">
                          Kerosene
                        </label>
                        <input
                          id="kerosene_price"
                          type="text"
                          name="petrol_price"
                          className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                        />
                      </div>
                      {/* Submit button */}
                      <div className="px-3 mb-16 flex justify-end pt-5">
                        <button className=" bg-primColor hover:bg-primColor/80 text-white border border-transparent w-max transition-colors rounded-full rounded-tl-none p-1 px-3 flex space-x-3 items-center cursor-point">
                          <p className="font-semibold font-open">
                            Save Changes
                          </p>
                        </button>
                      </div>
                    </div>
                    {/* Station amenities update */}
                    <div className="mini:w-1/2 rounded-lg px-5 h-max shadow-rounded-md mini:px-7 py-6">
                      <h3 className="font-pt text-lg mb-8">
                        Station Amenities
                      </h3>

                      <div className="flex flex-col space-y-7">
                        {/*Station Amenities */}
                        <StationAmenities
                          amenityName={"Car Wash"}
                          amenityStatus={false}
                          icon={carWash}
                        />
                        <StationAmenities
                          amenityName={"POS Stand"}
                          amenityStatus={true}
                          icon={pos}
                        />
                        <StationAmenities
                          amenityName={"Car Mechanic"}
                          amenityStatus={false}
                          icon={repairs}
                        />
                        <StationAmenities
                          amenityName={"Mini Mart"}
                          amenityStatus={true}
                          icon={miniMart}
                        />
                        <StationAmenities
                          amenityName={"Car Wash"}
                          amenityStatus={true}
                        />
                        {/* Submit button */}
                        <div className="mb-16 flex justify-end pt-5">
                          <button
                            className=" bg-primColor hover:bg-primColor/80 text-white border border-transparent w-max transition-colors rounded-full rounded-tl-none p-1 px-3 flex space-x-3 items-center cursor-point"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            <p className="font-semibold font-open">Add New</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              )}
              {/* Station profile */}
              {state.activeTab === "prof" && (
                <>
                  <div className="dashboard_limiter mt-8 flex justify-between mini:gap-x-16">
                    <div className="shadow-rounded-md w-full flex-col flex space-y-12 md:gap-x-4 mini:flex-row px-5 py-8 ipad:py-10 ipad:px-8 mini:py-16 mini:px-12">
                      {/* Left flex */}
                      <div className="w-full flex flex-col items-center mini:w-1/2 mini:border-r-2 ">
                        {/* Image field */}
                        <div className="flex items-center justify-center w-full">
                          <label
                            for="dropzone-file"
                            className="relative flex flex-col items-center justify-center w-44 h-44 border  rounded-full cursor-pointer bg-gray-50"
                          >
                            <img
                              src="/updateImg.svg"
                              className="absolute bottom-0 w-9 right-4"
                            />
                            <img
                              src={"/stationImg.png"}
                              className="w-full h-full"
                            />
                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                            />
                          </label>
                        </div>
                        <p className="font-pt text-xl text-slate-800 pt-5">
                          Total Filling Station
                        </p>
                        <p className="font-open pt-3">
                          No. 128 Use Offot, Nwaniba Road, Uyo
                        </p>
                        <p className="font-open pt-3">0701-123-335</p>
                        <p className="font-open font-medium pt-2">
                          <span className="text-primColor font-semibold">
                            Open
                          </span>{" "}
                          | 8am-8pm
                        </p>
                      </div>
                      {/* Right flex */}
                      <div className="w-full mini:w-1/2 mini:pl-4">
                        <h3 className="text-lg font-pt text-[#1B1B1B] text-center mini:text-left">
                          Update profile
                        </h3>
                        {/* Input fields */}
                        <div className="pt-8">
                          {/* Station name */}
                          <div className="space-y-2 mb-7">
                            <label
                              htmlFor="station_name"
                              className="font-semibold"
                            >
                              Name
                            </label>
                            <input
                              id="station_name"
                              type="text"
                              name="station_name"
                              className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                            />
                          </div>
                          {/* Address */}
                          <div className="space-y-2 mb-7">
                            <label
                              htmlFor="station_name"
                              className="font-semibold"
                            >
                              Address
                            </label>
                            <input
                              id="station_name"
                              type="text"
                              name="station_name"
                              className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                            />
                          </div>
                          {/* Station phone */}
                          <div className="space-y-2 mb-7">
                            <label
                              htmlFor="station_name"
                              className="font-semibold"
                            >
                              Phone Number
                            </label>
                            <input
                              id="station_name"
                              type="text"
                              name="station_name"
                              className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                            />
                          </div>
                          {/* Operation time */}
                          <div className="space-y-2 mb-7">
                            <label
                              htmlFor="station_name"
                              className="font-semibold"
                            >
                              Operation Time
                            </label>
                            <input
                              id="station_name"
                              type="text"
                              name="station_name"
                              className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                            />
                          </div>
                          {/* Submit button */}
                          <div className="mb-16 flex justify-end pt-5">
                            <button
                              className=" bg-primColor hover:bg-primColor/80 text-white border border-transparent w-max transition-colors rounded-full rounded-tl-none p-1 px-3 flex space-x-3 items-center cursor-point"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                            >
                              <p className="font-semibold font-open">
                                Save Changes
                              </p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
