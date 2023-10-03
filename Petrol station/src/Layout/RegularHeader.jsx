import React from "react";
import { Link } from "react-router-dom";
import Drawer from "../Component/Common/Drawer";

const RegularHeader = () => {
  return (
    <>
      <Drawer
        content={
          <>
            <ul className="space-y-3">
              <li>
                <Link className="" to={"/"}>
                  <button className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link className="" to={"/signup"}>
                  <button className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md">
                    Sign Up
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"login"}>
                  <button className="flex items-center w-full gap-x-3.5 py-2 px-2.5 text-2xl font-semibold font-pt text-white rounded-md">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default RegularHeader;
