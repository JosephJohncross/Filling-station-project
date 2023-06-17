import React from "react";

// image import
import logo from "../assets/images/logo.svg";
import Button from "../Component/Common/Button";

const DefaultHeader = ({ page }) => {
  return (
    <>
      {page === "home" && (
        <div className="flex justify-between items-center">
          <div className="">
            <img src={logo} alt="" className="w-24" />
          </div>
          {/* Login and signup */}
          <div className="flex space-x-4 items-center">
            <Button
              shade={"white"}
              content={"Sign up"}
            />
            <Button
              shade={"blue"}
              content={"Login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DefaultHeader;
