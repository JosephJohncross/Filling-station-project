import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";

// image import
import Button from "../../Common/Button";
import { Link, Navigate } from "react-router-dom";
import Drawer from "../../Common/Drawer";
import { Collapse, initTE, Sidenav } from "tw-elements";

const StationHeader = ({ hasBg = true, dispatch }) => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    initTE({ Collapse, Sidenav });
  }, []);

  return (
    <>
      {/* Navigation bar */}
      <div className={`${hasBg ? "bg-white" : "bg-transparent"} z-10`}>
        <div className="container_limiter py-4 flex items-center justify-between">
          <Link to={"/"}>
            <img src="/logo.svg" alt="" className="w-36" />
          </Link>
          <div className="items-center space-x-3 font-open hidden ipad:flex">
            {/* Account */}
            {user ? (
              <></>
            ) : (
              <div className="flex space-x-6 items-center">
                <Button
                  shade={"blue"}
                  clickFunction={() => {
                    navigate("/signup");
                  }}
                  content={"Signup"}
                  icon={false}
                />
                <Button
                  clickFunction={() => {
                    navigate("/login");
                  }}
                  content={"Login"}
                  shade={"white"}
                />
              </div>
            )}
          </div>
          <div className="mini:hidden">
            <Drawer
              content={
                <>
                  <ul className="space-y-3">
                    <li>
                      <button
                        className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md"
                        onClick={() => {
                          dispatch({
                            type: "switchDashboard",
                          });
                        }}
                      >
                        Dashboard
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md"
                        onClick={() => {
                          dispatch({
                            type: "switchUpdates",
                          });
                        }}
                      >
                        Make Updates
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md"
                        onClick={() => {
                          dispatch({
                            type: "switchProfile",
                            val: "notif",
                          });
                        }}
                      >
                        Station Profile
                      </button>
                    </li>
                    <li>
                      <button
                        className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md"
                        onClick={() => {
                          logoutUser();
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StationHeader;
