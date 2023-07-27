import React from "react";
import StationSearchCard from "../Component/Station/StationSearchCard";
import Button from "../Component/Common/Button";

const Search = () => {
  return (
    <div className="container_limiter flex flex-col font-open">
      <div className="">
        <form className="my-5 grid gap-7">
          <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
            <div class="relative">
              <select
                id="selectField"
                name="selectField"
                class="w-full px-3 py-3 border-1 rounded-md focus:outline-none focus:border-blue-600 border-blue-600 text-blue-600 text-sm"
              >
                <option value="option1" default>
                  Any Types
                </option>
                <option value="option1">Petrol</option>
                <option value="option2">Diesel</option>
                <option value="option3">Kerosene</option>
              </select>
              <label
                for="outlined_success"
                class="absolute text-sm text-blue-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Commodity
              </label>
            </div>
            <div class="relative">
              <select
                id="selectField"
                name="selectField"
                class="w-full px-3 py-3 border-1 rounded-md focus:outline-none focus:border-blue-600 border-blue-600 text-blue-600 text-sm"
              >
                <option value="option1" default>
                  Random
                </option>
                <option value="option1">Cheapest-Expensive</option>
                <option value="option2">Expensive-Cheapest</option>
              </select>
              <label
                for="outlined_success"
                class="absolute text-sm text-blue-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Price
              </label>
            </div>
            <div class="relative">
              <select
                id="selectField"
                name="selectField"
                class="w-full px-3 py-3 border-1 rounded-md focus:outline-none focus:border-blue-600 border-blue-600 text-blue-600 text-sm"
              >
                <option value="option1" default>
                  Any Time
                </option>
                <option value="option1">Open Now</option>
                <option value="option2">Open 24 Hours</option>
              </select>
              <label
                for="outlined_success"
                class="absolute text-sm text-blue-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Opening Hours
              </label>
            </div>
            <div class="relative">
              <select
                id="selectField"
                name="selectField"
                class="w-full px-3 py-3 border-1 rounded-md focus:outline-none focus:border-blue-600 border-blue-600 text-blue-600 text-sm"
              >
                <option value="option1" default>
                  Random
                </option>
                <option value="option1">Highest-lowest</option>
                <option value="option2">Lowest-Highest</option>
              </select>
              <label
                for="outlined_success"
                class="absolute text-sm text-blue-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Ratings
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-5 overflow-y-hidden flex flex-col gap-y-4 p-3">
        <h1 className="text-3xl font-bold font-pt">
          All Filling Stations along Oron Road
        </h1>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
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
        <div className="flex flex-row justify-between">
          <Button clickFunction={() => {}} shade="white" content="Go Back" />
          <Button clickFunction={() => {}} shade="blue" content="See More" />
        </div>
      </div>
    </div>
  );
};

export default Search;
