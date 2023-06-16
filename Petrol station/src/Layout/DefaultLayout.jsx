import React, { useRef, useState } from "react";
import DefaultHeader from "./DefaultHeader";
import { Outlet } from "react-router-dom";
import DefaultFooter from "./DefaultFooter";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DefaultLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[.2rem] w-7 my-1 rounded-full transition ease transform duration-300 bg-white`;

  const location = useLocation();
  const headerComponent = useRef();

  return (
    <>
      <div
        className=""
        ref={headerComponent}
        onClick={(e) => {
          if (e.target.classList.contains("mobile_toggler")) {
            setIsOpen(false);
          }
        }}
      >
        {/* Header section navigation */}
        <div className="bg-uniuyoGreen mini:bg-white sticky top-0 mini:relative z-50 mini:z-[1]">
          <div className="container_limiter py-4">
            <div className="flex justify-between items-center space-x-4 mini:space-x-0">
              {/* Left section */}
              <>
                <div className=""></div>
              </>
              {/* Right section */}
              <>
                <button
                  className="flex flex-col h-10 border-2 border-transparent rounded justify-center items-center group mini:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span
                    className={`${genericHamburgerLine} ${
                      isOpen
                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 w-7"
                        : "opacity-50 group-hover:opacity-100 w-7"
                    }`}
                  />
                  <span
                    className={`${genericHamburgerLine} ${
                      isOpen
                        ? "opacity-0 w-7"
                        : "opacity-50 group-hover:opacity-100 w-7"
                    }`}
                  />
                  <span
                    className={`${genericHamburgerLine} ${
                      isOpen
                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 w-7"
                        : "opacity-50 group-hover:opacity-100 w-7"
                    }`}
                  />
                </button>
              </>
            </div>
          </div>
        </div>
                
        <div className="hidden mini:block mini:sticky mini:top-0 mini:z-50">
          <DefaultHeader />
        </div>
        <>
          <Outlet />
        </>
        <DefaultFooter />
      </div>
    </>
  );
};

export default DefaultLayout;
