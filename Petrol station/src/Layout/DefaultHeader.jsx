import React from "react";

// image import
import Button from "../Component/Common/Button";
import { Link, Navigate } from "react-router-dom";

const DefaultHeader = ({ page }) => {
  return (
    <>
      {page === "home" && (
        <div className="flex justify-between items-center">
          <div className="">
            <img src={"/logo.svg"} alt="" className="w-32" />
          </div>
          {/* Login and signup */}
          <div className="flex space-x-4 items-center">
            <Link to={"/signup"}>
              <Button shade={"white"} content={"Sign up"} />
            </Link>
            <Link to={"/login"}>
              <Button
                shade={"blue"}
                content={"Login"}
                clickFunction={() => {Navigate("/login")}}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default DefaultHeader;
