import React, { useEffect } from "react";
import StationSearchCard from "../Component/Station/StationSearchCard";
import Button from "../Component/Common/Button";
import DefaultHeader from "../Layout/DefaultHeader";
import { setSearchResult } from "../Services/station-request";
import { useImmerReducer } from "use-immer";

const initalState = {
  searchStations: [],
  loading: true,
};

const reducerFunction = (draft, action) => {
  switch (action.type) {
    case "searchedStations":
      draft.searchStations = action.val;
      break;
    case "setLoading":
      draft.loading = action.val;
      break;
  }
};

const Search = () => {
  const [state, dispatch] = useImmerReducer(reducerFunction, initalState);

  useEffect(() => {
    console.log("Hello");
    setSearchResult(localStorage.getItem("searchTerm")).then((data) => {
      dispatch({
        type: "searchedStations",
        val: data,
      });
      dispatch({
        type: "setLoading",
        val: false,
      });
    });
  }, []);

  return (
    <section className="bg-[#E9E9E9]">
      <div className="sticky top-0 z-50">
        <DefaultHeader dispatch={dispatch} />
      </div>
      {state.loading ? (
        <>
          <div className="h-screen flex items-center justify-center">
            <div
              class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-10 bg-white pt-10">
          <div className="container_limiter flex flex-col font-open">
            <div className="">
              {/* <form className="my-5 grid gap-7">
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
            </form> */}
            </div>
            <div className="mt-5 overflow-y-hidden flex flex-col gap-y-4 p-3">
              {/* <h1 className="text-3xl font-bold font-pt">
                All Filling Stations along Oron Road
              </h1> */}
              <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
                {
                  state.searchStations.length > 0 ?  state.searchStations.map(station => {
                    return (
                      <StationSearchCard
                        address={station.address}
                        dieselPrice={station.diesel_price}
                        // distance={"1.1 mi"}
                        kerosinePrice={station.kerosene_price}
                        name={station.name}
                        // openingTime={"8am-9pm"}
                        petrolPrice={station.petrol_price}
                        rating={station.rating}
                        clickFunction={()=> {}}
                        dispatch={dispatch}
                        stationId={station.user}
                        stationSlug={station.filling_station_slug}

                      />
                    )
                  }) : <>
                  <div className="items-center w-full flex justify-center  mini:col-span-2">
                    <p className="">No result to found in search</p>
                  </div>
                  </>
                }
              </div>
              {/* <div className="flex flex-row justify-between">
                <Button
                  clickFunction={() => {}}
                  shade="blue"
                  content="See More"
                />
              </div> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Search;
