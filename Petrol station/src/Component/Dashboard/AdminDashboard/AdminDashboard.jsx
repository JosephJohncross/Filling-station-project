import React, { useContext, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import ButtonCapsule from "./ButtonCapsule";
import AuthContext from "../../../Context/AuthContext";

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
import {
  getStationProfile,
  setStationOpenStatus,
  updateFuelProducts,
  updateStationProfile,
} from "../../../Services/station-request";

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
    case "setLoading":
      draft.loading = action.val;
      break;

    // Station profile
    case "setClosed":
      draft.isOpen = action.val;
      break;
    case "setName":
      draft.name = action.val;
      break;
    case "setAddress":
      draft.address = action.val;
      break;
    case "setPhone":
      draft.phone = action.val;
      break;
    case "setOperationTime":
      draft.operationTime = action.val;
      break;
    case "setProfilePicture":
      draft.photo = action.val;
      break;
    case "setPetrol":
      draft.petrolPrice = action.val;
      break;
    case "setDiesel":
      draft.dieselPrice = action.val;
      break;
    case "setKerosene":
      draft.kerosenePrice = action.val;
      break;
    case "setCarWash":
      draft.carWash = action.val;
      // console.log(action.val);
      break;
    case "setPOS":
      draft.POS = action.val;
      break;
    case "setCarMechanic":
      draft.carMechanic = action.val;
      break;
    case "setMiniMart":
      draft.miniMart = action.val;
      break;
    case "setTotalClicks":
      draft.totalClicks = action.val;
      break;
    case "setTotalRating":
      draft.totalRating = action.val;
      break;
    case "setTotalReview":
      draft.totalReview = action.val;
      break;
    case "setFavourites":
      draft.favorites = action.val;
      break;
  }
};

// Initial set state
const initialState = {
  activeTab: "dash",
  isOpen: 1,
  loading: true,
  stationProfile: {},
  name: "",
  address: "",
  phone: "",
  operationTime: "",
  photo: "",
  petrolPrice: "",
  dieselPrice: "",
  kerosenePrice: "",
  // station Amenities
  carWash: 0,
  POS: 0,
  carMechanic: 0,
  miniMart: 0,
  totalClicks: "",
  totalRating: "",
  totalReview: "",
  favorites: "",
};

const AdminDashboard = () => {
  const [state, dispatch] = useImmerReducer(reducerFunction, initialState);
  const { logoutUser, user } = useContext(AuthContext);

  useEffect(() => {
    getStationProfile(user.user_id).then((data) => {
      console.log(data);
      dispatch({
        type: "setName",
        val: data.name,
      });
      dispatch({
        type: "setAddress",
        val: data.address,
      });

      dispatch({
        type: "setPhone",
        val: data.phone,
      });

      dispatch({
        type: "setOperationTime",
        val: data.operation_time,
      });

      dispatch({
        type: "setProfilePicture",
        val: "",
      });

      dispatch({
        type: "setPetrol",
        val: data.petrol_price,
      });

      dispatch({
        type: "setDiesel",
        val: data.diesel_price,
      });

      dispatch({
        type: "setKerosene",
        val: data.kerosene_price,
      });

      dispatch({
        type: "setCarWash",
        val: data.car_wash,
      });

      dispatch({
        type: "setPOS",
        val: data.pos,
      });

      dispatch({
        type: "setCarMechanic",
        val: data.car_mechanic,
      });

      dispatch({
        type: "setMiniMart",
        val: data.mini_mart,
      });

      dispatch({
        type: "setTotalClicks",
        val: data.total_clicks,
      });

      dispatch({
        type: "setTotalRating",
        val: data.rating,
      });

      dispatch({
        type: "setTotalReview",
        val: data.no_of_reviews,
      });

      dispatch({
        type: "setFavourites",
        val: data.no_of_favorites,
      });
      dispatch({
        type: "setLoading",
        val: false,
      });
      // console.log(data);
    });
  }, []);

  // const submitProfileForm = () => {

  // }

  // const submitFuelPetrolForm = () => {

  // }

  // const submitAmenitiesForm = () => {

  // }

  return (
    <>
      <section className="bg-gray-100/30 mini:h-screen overflow-hidden w-screen">
        {state.loading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 flex justify-center items-center z-50">
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
        )}
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
                      checked={state.isOpen == 1 ? true : false}
                      type="checkbox"
                      className="peer amenity-input appearance-none transition-colors cursor-pointer w-20 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gray-500"
                      onChange={(e) => {
                        dispatch({
                          type: "setClosed",
                          val: e.target.checked ? 1 : 0,
                        });
                        setStationOpenStatus(state.isOpen, user.user_id);
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
                        <p className="font-pt text-2xl">{state?.totalClicks}</p>
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
                        <p className="font-pt text-2xl">
                          {state.totalRating ? state.totalRating : 0}
                        </p>
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
                        <p className="font-pt text-2xl">{state?.totalReview}</p>
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
                        <p className="font-pt text-2xl">{state.favorites}</p>
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
                  <div className="dashboard_limiter mt-8 flex flex-col gap-y-9 mini:flex-row mini:justify-between mini:gap-x-16">
                    <form
                      className="mini:w-1/2 rounded-lg px-5 shadow-rounded-md mini:px-7 pt-6"
                    >
                      {/* Fuel Product update */}
                      <h3 className="font-pt text-lg mb-8">Fuel Product</h3>
                      {/* Petrol input */}
                      <div className="space-y-2 mb-7">
                        <label htmlFor="petrol_price" className="">
                          Petrol
                        </label>
                        <input
                          value={state.petrolPrice}
                          id="petrol_price"
                          type="text"
                          name="petrol_price"
                          className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                          onChange={(e) => {
                            dispatch({
                              type: "setPetrol",
                              val: e.target.value,
                            });
                          }}
                        />
                      </div>
                      {/* Diesel input */}
                      <div className="space-y-2 mb-7">
                        <label htmlFor="diesel_price" className="">
                          Diesel
                        </label>
                        <input
                          value={state.dieselPrice}
                          id="diesel_price"
                          type="text"
                          name="petrol_price"
                          className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                          onChange={(e) => {
                            dispatch({
                              type: "setDiesel",
                              val: e.target.value,
                            });
                          }}
                        />
                      </div>
                      {/* Kerosene input */}
                      <div className="space-y-2">
                        <label htmlFor="kerosene_price" className="">
                          Kerosene
                        </label>
                        <input
                          value={state.kerosenePrice}
                          id="kerosene_price"
                          type="text"
                          name="petrol_price"
                          className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                          onChange={(e) => {
                            dispatch({
                              type: "setKerosene",
                              val: e.target.value,
                            });
                          }}
                        />
                      </div>
                      {/* Submit button */}
                      <div className="px-3 mb-16 flex justify-end pt-5">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            updateFuelProducts(
                              state.petrolPrice,
                              state.kerosenePrice,
                              state.dieselPrice,
                              user.user_id
                            );
                          }}
                          className=" bg-primColor hover:bg-primColor/80 text-white border border-transparent w-max transition-colors rounded-full rounded-tl-none p-1 px-3 flex space-x-3 items-center cursor-point"
                        >
                          <p className="font-semibold font-open">
                            Save Changes
                          </p>
                        </button>
                      </div>
                    </form>
                    {/* Station amenities update */}
                    <form
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="mini:w-1/2 rounded-lg px-5 h-max shadow-rounded-md mini:px-7 py-6"
                    >
                      <div className="">
                        <h3 className="font-pt text-lg mb-8">
                          Station Amenities
                        </h3>

                        <div className="flex flex-col space-y-7">
                          {/*Station Amenities */}
                          <StationAmenities
                            amenityName={"Car Wash"}
                            amenityStatus={state.carWash}
                            icon={carWash}
                            dispatch={dispatch}
                            dispatchName={"setCarWash"}
                          />
                          <StationAmenities
                            amenityName={"POS Stand"}
                            amenityStatus={state.POS}
                            icon={pos}
                            dispatch={dispatch}
                            dispatchName={"setPOS"}
                          />
                          <StationAmenities
                            amenityName={"Car Mechanic"}
                            amenityStatus={state.carMechanic}
                            icon={repairs}
                            dispatch={dispatch}
                            dispatchName={"setCarMechanic"}
                          />
                          <StationAmenities
                            amenityName={"Mini Mart"}
                            amenityStatus={state.miniMart}
                            icon={miniMart}
                            dispatch={dispatch}
                            dispatchName={"setMiniMart"}
                          />
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
                    </form>
                  </div>
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
                          {state.name}
                        </p>
                        <p className="font-open pt-3">{state.address}</p>
                        <p className="font-open pt-3">{state.phone}</p>
                        <p className="font-open font-medium pt-2">
                          <span className="text-primColor font-semibold">
                            {state.isOpen === 1 ? "Open" : "Closed"}
                          </span>{" "}
                          | {state.operationTime}
                        </p>
                      </div>
                      {/* Right flex */}
                      <div className="w-full mini:w-1/2 mini:pl-4">
                        <h3 className="text-lg font-pt text-[#1B1B1B] text-center mini:text-left">
                          Update profile
                        </h3>
                        {/* Input fields */}
                        <form
                          className="pt-8"
                        >
                          {/* Station name */}
                          <div className="space-y-2 mb-7">
                            <label
                              htmlFor="station_name"
                              className="font-semibold"
                            >
                              Name
                            </label>
                            <input
                              value={state.name}
                              id="station_name"
                              type="text"
                              name="station_name"
                              className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                              onChange={(e) => {
                                dispatch({
                                  type: "setName",
                                  val: e.target.value,
                                });
                              }}
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
                              value={state.address}
                              id="station_name"
                              type="text"
                              name="station_name"
                              className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                              onChange={(e) => {
                                dispatch({
                                  type: "setAddress",
                                  val: e.target.value,
                                });
                              }}
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
                              value={state.phone}
                              id="station_name"
                              type="text"
                              name="station_name"
                              className="w-full outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                              onChange={(e) => {
                                dispatch({
                                  type: "setPhone",
                                  val: e.target.value,
                                });
                              }}
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
                              value={state.operationTime}
                              id="station_name"
                              type="text"
                              name="station_name"
                              placeholder="eg. 8am -8pm"
                              className="w-full outline-none placeholder:text-gray-400  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                              onChange={(e) => {
                                dispatch({
                                  type: "setOperationTime",
                                  val: e.target.value,
                                });
                              }}
                            />
                          </div>
                          {/* Submit button */}
                          <div className="mb-16 flex justify-end pt-5">
                            <button
                              className=" bg-primColor hover:bg-primColor/80 text-white border border-transparent w-max transition-colors rounded-full rounded-tl-none p-1 px-3 flex space-x-3 items-center cursor-point"
                              onClick={(e) => {
                                e.preventDefault();
                                updateStationProfile(
                                  state.name,
                                  state.operationTime,
                                  state.phone,
                                  user.user_id
                                );
                              }}
                            >
                              <p className="font-semibold font-open">
                                Save Changes
                              </p>
                            </button>
                          </div>
                        </form>
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
