import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sidenav, Collapse, initTE } from "tw-elements";

const Drawer = ({ content }) => {
  useEffect(() => {
    initTE({ Sidenav, Collapse });
  }, []);

  return (
    <>
      {/* Navigation Toggle  */}
      <button
        type="button"
        className="text-primColor hover:text-primColor/80 pr-2"
        // data-hs-overlay="#docs-sidebar"
        // aria-controls="docs-sidebar"
        // aria-label="Toggle navigation"
        data-te-sidenav-toggle-ref
        data-te-target="#sidenav-1"
        aria-controls="#sidenav-1"
        aria-haspopup="true"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          className="w-5 h-5"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      {/* End Navigation Toggle  */}
      <div
        id="docs-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-primColor font-open border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="px-6 pb-10">
          <Link to="/">
            <img src="/logoLight.svg" alt="" className="w-36" />
          </Link>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        ></nav>

        <nav
          id="sidenav-1"
          class="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
          data-te-sidenav-init
          data-te-sidenav-hidden="false"
          data-te-sidenav-position="absolute"
        >
          <ul
            class="relative m-0 list-none px-[0.2rem]"
            data-te-sidenav-menu-ref
          >
            {content}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Drawer;
