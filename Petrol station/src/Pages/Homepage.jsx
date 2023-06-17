import React, { useState, useEffect } from "react";
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

const Homepage = () => {
  const [latitude, setLatitude] = useState(51.505);
  const [longitude, setLongitude] = useState(-0.09);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

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
            <div className="container_limiter mt-14">
              <div className="w-max">
                <div className="bg-primColor px-6 py-4 rounded-tr-md rounded-tl-md ">
                  <div className="flex items-center space-x-3">                                    
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
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <div class="relative z-0">
                      <input
                        type="text"
                        id="default_standard"
                        className="block placeholder:text-white/50 placeholder:font-medium py-2 px-0 w-full mini:min-w-[300px] text-sm bg-transparent border-0 border-gray-300 appearance-none text-white dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                        placeholder="Search by Location, Town, Filling Station or Brand"
                        onChange={() => {}}
                      />
                      {/* <label
                        for="default_standard"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Default standard
                      </label> */}
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
                {/* Lower filter */}
                <div className="bg-white px-6 py-4 rounded-br-md rounded-bl-md flex justify-end items-center">
                
                  <div className="flex items-center  space-x-2">
                    <p className="text-primColor font-semibold text-sm">
                      Filter
                    </p>
                    <img src={filter} alt="" className="cursor-pointer" />
                  </div>
                </div>
              </div>
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
                riseOnHover={true}
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
                    <button className="w-full rounded-full px-3 py-2 bg-sky-400 hover:bg-sky-500 font-medium">
                      Visit
                    </button>
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
