import React, { useState, useEffect, useContext } from "react";
const { VITE_USERNAME, VITE_STYLE_ID, VITE_ACCESS_TOKEN } = import.meta.env;

// image import
import map from "../../src/assets/images/map.svg";
import logo from "../../src/assets/images/logo.svg";
import houseListing from "../../src/assets/images/house-listing.jpg";
import search from "../assets/images/search.svg";
import mylocation from "../assets/images/mylocation.svg";
import filter from "../assets/images/filter.svg";

// React Spinner
import FadeLoader from "react-spinners/FadeLoader";
//Spinner styling
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

// React Leaflet
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { Icon } from "leaflet";
import DefaultHeader from "../Layout/DefaultHeader";
import StationSearchCard from "../Component/Station/StationSearchCard";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Homepage = () => {
  const [latitude, setLatitude] = useState(51.505);
  const [longitude, setLongitude] = useState(-0.09);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  let { user } = useContext(AuthContext);

  const petrolIcon = new Icon({
    iconUrl: "/src/assets/images/mapicons/petrol-station.png",
    iconSize: [35, 35],
  });

  useEffect(() => {
    const controller = new AbortController();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className=" absolute top-0 left-0 right-0 bottom-0  flex justify-center items-center">
          <div className="sweet-loading">
            <FadeLoader
              cssOverride={override}
              size={70}
              color={"#004002"}
              loading={loading}
              speedMultiplier={1.5}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        <section className="bg-white h-screen font-nunito relative">
          <div className="absolute top-0 left-0 right-0 border h-12 w-full z-[1000]">
            <div className="container_limiter pt-3">
              <DefaultHeader page="home" />
            </div>
            <div className="mini:container w-full  mini:w-[40rem] px-5 sm:px-6 ipad:px-8 desktop:px-10 mt-14 ">
              {/* Dropdown for filling station */}
              <div class="hs-dropdown relative inline-flex">
                {/* Drop down button */}
                <button
                  id="hs-dropdown-custom-icon-trigger"
                  type="button"
                  class="hs-dropdown-toggle p-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  <svg
                    class="w-4 h-4 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden rounded-lg mt-2 w-full mini:w-max mx-3 mini:mx-0"
                  aria-labelledby="hs-dropdown-custom-icon-trigger"
                >
                  <div className="bg-primColor px-6 py-4 rounded-tr-md rounded-tl-md text-white font-semibold font-pt">
                    Filling stations by lowest petrol prices
                  </div>
                  {/* Filling station filter */}
                  <div className="max-w-xl mt-5 h-[70vh] overflow-y-auto flex flex-col gap-y-4 dashboard_scroll">
                    <StationSearchCard
                      address={"Opposite Timber market Mbierebe."}
                      dieselPrice={""}
                      distance={"1.1 mi"}
                      kerosinePrice={""}
                      name={"Earthwell Filling Station"}
                      openingTime={"8am-9pm"}
                      petrolPrice={""}
                      rating={"4"}
                    />
                    <StationSearchCard
                      address={"Opposite Timber market Mbierebe."}
                      dieselPrice={""}
                      distance={"1.1 mi"}
                      kerosinePrice={""}
                      name={"Earthwell Filling Station"}
                      openingTime={"8am-9pm"}
                      petrolPrice={""}
                      rating={"4"}
                    />
                    <StationSearchCard
                      address={"Opposite Timber market Mbierebe."}
                      dieselPrice={""}
                      distance={"1.1 mi"}
                      kerosinePrice={""}
                      name={"Earthwell Filling Station"}
                      openingTime={"8am-9pm"}
                      petrolPrice={""}
                      rating={"4"}
                    />
                  </div>
                </div>
              </div>

              {/* <div className="max-w-xl shadow-rounded-xl">
               
                Upper filter
                <div className="bg-primColor px-6 py-4 rounded-tr-md rounded-tl-md ">
                  <div className="flex items-center space-x-3 justify-between">
                    <img
                      src={mylocation}
                      alt=""
                      className="w-5 cursor-pointer"
                      onClick={() => {}}
                      data-tooltip-target="tooltip-bottom"
                      data-tooltip-placement="bottom"
                    />
                    <div
                      id="tooltip-bottom"
                      role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-medium text-white bg-gray-900/80 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Get my location
                      <div class="tooltip-arrow" data-popper-arrow>
                        {" "}
                      </div>
                    </div>
                    <div class="relative z-0">
                      <input
                        type="text"
                        id="default_standard"
                        className="block placeholder:text-white/50 placeholder:font-medium py-2 px-0 w-full mini:min-w-[400px] text-sm bg-transparent border-0 border-gray-300 appearance-none text-white dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                        placeholder="Search by Location, Town, Filling Station or Brand"
                        onChange={() => {}}
                      />        
                    </div>
                    <img
                      src={search}
                      alt=""
                      className="w-5 cursor-pointer"
                      onClick={() => {}}
                    />
                  </div>
                  <div className="w-full h-[0.05rem] rounded-md bg-white"></div>
                </div>


                Lower filter
                <div className="bg-white px-6 py-4 flex justify-end items-center">
                  <div className="flex items-center  space-x-2">
                    <p className="text-primColor font-semibold text-sm">
                      Filter
                    </p>
                    <img src={filter} alt="" className="cursor-pointer" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="map-scroll rounded-lg h-screen ">
            <MapContainer
              center={[5.0377, 7.9128]}
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
              >
                <Popup>
                  <div className="font-didact w-44">
                    <p className="font-semibold">{"Piranha"}</p>
                    <img
                      src={houseListing}
                      alt="propert-image"
                      className="w-full h-28"
                    />
                    <p className=""></p>
                    <Link to={user ? "/login" : "login"}>
                      <button className="w-full text-white rounded-full px-3 py-2 bg-sky-400 hover:bg-sky-500 font-medium">
                        Visit
                      </button>
                    </Link>
                  </div>
                </Popup>
              </Marker>
              <Marker
                icon={petrolIcon}
                position={[5.0109127438901, 7.912567831854677]}
                key={1}
                title="First"
              >
                <Popup>
                  <div className="font-didact w-44">
                    <p className="font-semibold">{"First"}</p>
                    <img
                      src={houseListing}
                      alt="propert-image"
                      className="w-full h-28"
                    />
                    <p className=""></p>
                    <Link to={"/login"}>
                      <button className="w-full text-white rounded-full px-3 py-2 bg-sky-400 hover:bg-sky-500 font-medium">
                        Visit
                      </button>
                    </Link>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>
      )}
    </>
  );
};

export default Homepage;
