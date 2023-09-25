import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../Common/Button";
import { useImmerReducer } from "use-immer";
import StationSearchCard from "../../Station/StationSearchCard";
import Avatar from "./Avatar";
import AuthContext from "../../../Context/AuthContext";
import DefaultHeader from "../../../Layout/DefaultHeader";
import {
  getUserFavouriteStation,
  getUserProfile,
} from "../../../Services/user-request";

const reducerFunction = (draft, action) => {
  switch (action.type) {
    case "activePage":
      draft.activePage = action.val;
      break;
    case "activeProfile":
      console.log("Clicked");
      draft.activeProfileSection = action.val;
      break;
    case "setLoading":
      draft.loading = action.val;
      break;
    case "setUserProfile":
      draft.userProfile = action.val;
      break;
    case "setFavourite":
      draft.favourite = action.val;
      break;
  }
};

const initialState = {
  activePage: "favorite",
  activeProfileSection: "edit",
  loading: true,
  userProfile: {},
  favourite: [],
};

const UserDashboard = () => {
  const [state, dispatch] = useImmerReducer(reducerFunction, initialState);
  const { logoutUser, user } = useContext(AuthContext);

  useEffect(() => {
    if (state.favourite == []) {
      getUserFavouriteStation(user.user_id).then((data) => {
        console.log(data);
        dispatch({
          type: "setFavourite",
          val: data,
        });
      });
    }
  }, []);

  useEffect(() => {
    // Gets user favourite stations
    getUserFavouriteStation(user.user_id).then((data) => {
      console.log(data);
      dispatch({
        type: "setFavourite",
        val: data,
      });
    });

    // Gets user profile
    getUserProfile(user.user_id).then((response) => {
      dispatch({
        type: "setUserProfile",
        val: response,
      });
      dispatch({
        type: "setLoading",
        val: false,
      });
    });
  }, []);

  return (
    <section className="">
      <DefaultHeader dispatch={dispatch} />
      {state.loading ? (
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
      ) : (
        <>
          {/* Current section displayed */}
          <div className="py-5 bg-primColor font-open">
            <div className="container_limiter">
              {state.activePage === "favorite" && (
                <p className="text-white text-2xl font-pt">
                  My Favourite Stations
                </p>
              )}
              {state.activePage === "profile" && (
                <p className="text-white text-2xl font-pt">My Profile</p>
              )}
              {state.activePage === "notif" && (
                <p className="text-white text-2xl font-pt">Notifications</p>
              )}
            </div>
          </div>
          {/* Main Page */}
          {state.activePage === "favorite" && (
            <>
              <div className="container_limiter">
                <div className="grid mini:grid-cols-2 gap-5 mt-20">
                  {state.favourite?.length > 0 ? (
                    state.favourite.map((f) => {
                      return (
                        <StationSearchCard
                          address={f.address}
                          dieselPrice={f.diesel_price}
                          // distance={"3.8 km"}
                          kerosinePrice={f.kerosene_price}
                          openingTime={
                            f.operation_time
                              ? `Open from ${f.operation_time}`
                              : "---"
                          }
                          hide={true}
                          name={f.name}
                          clickFunction={() => {}}
                          petrolPrice={f.petrol_price}
                          rating={f.rating}
                          favorite={true}
                          dispatch={dispatch}
                          stationSlug={f.user}
                          stationId={f.station_id}
                        />
                      );
                    })
                  ) : (
                    <div className="h-40 col-span-2 font-pt text-2xl flex justify-center items-center w-full">
                      No favorite station added
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          {state.activePage === "profile" && (
            <>
              <div className="container_limiter mt-20 font-open flex flex-col space-y-6 mini:flex-row items-start mini:space-x-12">
                {/* Avatar section */}
                <div className="flex items-center flex-col space-y-3 ipad:space-y-0 ipad:flex-row space-x-6 mini:w-2/5">
                  <img src="/defaultAvatar.svg" />
                  <div className="">
                    <p className="font-pt text-lg">{state.userProfile?.name}</p>
                    <p className="pb-5"></p>
                    <Button
                      shade={"blue"}
                      content={
                        state.activeProfileSection === "avatar"
                          ? "Edit profile"
                          : "Change Avatar"
                      }
                      icon={false}
                      clickFunction={() => {
                        console.log(state.activeProfileSection);
                        if (state.activeProfileSection === "edit") {
                          dispatch({
                            type: "activeProfile",
                            val: "avatar",
                          });
                        } else if (state.activeProfileSection === "avatar") {
                          dispatch({
                            type: "activeProfile",
                            val: "edit",
                          });
                        }
                        console.log("Clicked hello world");
                      }}
                    />
                  </div>
                </div>
                <div className="shadow-lg mini:mt-10 px-5 mini:px-8 py-10 w-full mt-20 mini:w-3/5 rounded-md">
                  {state.activeProfileSection === "edit" && (
                    <>
                      <div className="fles flex-col space-y-5">
                        {/* Name */}
                        <div className="flex space-x-4 items-center">
                          <label className="font-pt text-textColor text-lg  w-1/4">
                            Name
                          </label>
                          <input
                            id="petrol_price"
                            type="text"
                            name="petrol_price"
                            className="w-3/4 outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                          />
                        </div>
                        {/* Email */}
                        {/* <div className="flex space-x-4 items-center">
                          <label className="font-pt text-textColor text-lg  w-1/4">
                            Email
                          </label>
                          <input
                            id="petrol_price"
                            type="text"
                            name="petrol_price"
                            className="w-3/4 outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                          />
                        </div> */}
                        {/* Phone Number */}
                        <div className="flex space-x-4 items-center">
                          <label className="font-pt text-textColor text-lg  w-1/4">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="petrol_price"
                            className="w-3/4 outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                          />
                        </div>
                        <div className="pt-8 flex justify-end space-x-2">
                          <Button
                            clickFunction={() => {}}
                            content={"Update"}
                            shade={"blue"}
                            icon={false}
                          />
                          <Button
                            clickFunction={() => {}}
                            content={"Change password"}
                            shade={"blue"}
                            icon={false}
                          />
                        </div>
                      </div>
                    </>
                  )}
                  {state.activeProfileSection === "avatar" && (
                    <>
                      <p className="font-pt text-lg">Choose your avatar</p>
                      <div className="grid mini:grid-cols-4 ipad:grid-cols-3 grid-cols-2 mt-4 gap-y-5">
                        <Avatar
                          img={"/defaultAvatar.svg"}
                          id={"defaultAvatar"}
                        />
                        <Avatar img={"/avatar1.svg"} id={"avatar1"} />
                        <Avatar img={"/avatar2.svg"} id={"avatar2"} />
                        <Avatar img={"/avatar3.svg"} id={"avatar3"} />
                        <Avatar img={"/avatar4.svg"} id={"avatar4"} />
                        <Avatar img={"/avatar5.svg"} id={"avatar5"} />
                        <Avatar img={"/avatar6.svg"} id={"avatar6"} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
          {state.activePage === "notif" && (
            <>
              <div className="flex flex-col gap-y-5 py-9 px-4">
                {/* Notify 1 */}
                <div className="shadow-rounded-md px-4 py-3 font-open flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full  bg-green-400 block"></span>
                  <p>
                    Lorrem ipsum dolor sit amet tu pur seit gi reuthi no
                    berninue sae
                  </p>
                </div>
                {/* Notify 2 */}
                <div className="shadow-rounded-md px-4 py-3 font-open flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full  bg-green-400 block"></span>
                  <p>
                    Lorrem ipsum dolor sit amet tu pur seit gi reuthi no
                    berninue sae
                  </p>
                </div>
                {/* Notify 3 */}
                <div className="shadow-rounded-md px-4 py-3 font-open flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full  bg-green-400 block"></span>
                  <p>
                    Lorrem ipsum dolor sit amet tu pur seit gi reuthi no
                    berninue sae
                  </p>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default UserDashboard;
