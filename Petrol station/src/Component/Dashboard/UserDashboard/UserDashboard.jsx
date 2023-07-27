import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../Common/Button";
import { useImmerReducer } from "use-immer";
import StationSearchCard from "../../Station/StationSearchCard";
import Avatar from "./Avatar";
import AuthContext from "../../../Context/AuthContext";
import DefaultHeader from "../../../Layout/DefaultHeader";

const reducerFunction = (draft, action) => {
  switch (action.type) {
    case "activePage":
      draft.activePage = action.val;
      break;
    case "activeProfile":
      console.log("Clicked");
      draft.activeProfileSection = action.val;
      break;
  }
};

const initialState = {
  activePage: "favorite",
  activeProfileSection: "edit",
};

const UserDashboard = () => {
  const [state, dispatch] = useImmerReducer(reducerFunction, initialState);
  const { logoutUser } = useContext(AuthContext);

  return (
    <section className="">
      <DefaultHeader/>
      {/* Current section displayed */}
      <div className="py-5 bg-primColor font-open">
        <div className="container_limiter">
          {state.activePage === "favorite" && (
            <p className="text-white text-2xl font-pt">My Favourite Stations</p>
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
          <div className="container_limiter ">
            <div className="grid mini:grid-cols-2 gap-5 mt-20">
              <StationSearchCard
                address={"A342 Oron Road, Opposite Uyo High School"}
                dieselPrice={""}
                distance={"3.8 km"}
                kerosinePrice={"345"}
                openingTime={"6am -6pm"}
                hide={true}
                name={"Mobile"}
                clickFunction={() => {}}
                petrolPrice={""}
                rating={"5"}
                favorite={true}
              />
              <StationSearchCard
                address={"A342 Oron Road, Opposite Uyo High School"}
                dieselPrice={""}
                distance={"3.8 km"}
                kerosinePrice={"345"}
                openingTime={"6am -6pm"}
                hide={true}
                name={"Mobile"}
                clickFunction={() => {}}
                petrolPrice={""}
                rating={"5"}
                favorite={true}
              />
              <StationSearchCard
                address={"A342 Oron Road, Opposite Uyo High School"}
                dieselPrice={""}
                distance={"3.8 km"}
                kerosinePrice={"345"}
                openingTime={"6am -6pm"}
                hide={true}
                name={"Mobile"}
                clickFunction={() => {}}
                petrolPrice={""}
                rating={"5"}
                favorite={true}
              />
              <StationSearchCard
                address={"A342 Oron Road, Opposite Uyo High School"}
                dieselPrice={""}
                distance={"3.8 km"}
                kerosinePrice={"345"}
                openingTime={"6am -6pm"}
                hide={true}
                name={"Mobile"}
                clickFunction={() => {}}
                petrolPrice={""}
                rating={"5"}
                favorite={true}
              />
              <StationSearchCard
                address={"A342 Oron Road, Opposite Uyo High School"}
                dieselPrice={""}
                distance={"3.8 km"}
                kerosinePrice={"345"}
                openingTime={"6am -6pm"}
                hide={true}
                name={"Mobile"}
                clickFunction={() => {}}
                petrolPrice={""}
                rating={"5"}
                favorite={true}
              />
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
                <p className="font-pt text-lg">Enzo Loki</p>
                <p className="pb-5">lawrencegideon@gmail.com</p>
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
                    <div className="flex space-x-4 items-center">
                      <label className="font-pt text-textColor text-lg  w-1/4">
                        Email
                      </label>
                      <input
                        id="petrol_price"
                        type="text"
                        name="petrol_price"
                        className="w-3/4 outline-none  focus:outline-none focus:ring-0 focus:border-primColor border border-gray-300 rounded-lg p-2 ring-0 relative after:absolute after:content-[Litre] after:top-0 after:right-2"
                      />
                    </div>
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
                    <Avatar img={"/defaultAvatar.svg"} id={"defaultAvatar"} />
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
                Lorrem ipsum dolor sit amet tu pur seit gi reuthi no berninue
                sae
              </p>
            </div>
            {/* Notify 2 */}
            <div className="shadow-rounded-md px-4 py-3 font-open flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full  bg-green-400 block"></span>
              <p>
                Lorrem ipsum dolor sit amet tu pur seit gi reuthi no berninue
                sae
              </p>
            </div>
            {/* Notify 3 */}
            <div className="shadow-rounded-md px-4 py-3 font-open flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full  bg-green-400 block"></span>
              <p>
                Lorrem ipsum dolor sit amet tu pur seit gi reuthi no berninue
                sae
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default UserDashboard;
