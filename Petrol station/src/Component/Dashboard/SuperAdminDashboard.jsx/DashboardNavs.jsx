import React from "react";

const DashboardNavs = ({
  navTarget,
  navBtnContent,
  navContent,
  dispatch,
  activeTab,
  dropdown,
  dispatchEvent,
}) => {
  return (
    <>
      <div className="font-open">
        <div className="flex space-x-1">
          <button
            class={`w-full py-4 text-sm font-semibold leading-7 ${
              activeTab
                ? "text-primColor focus:outline-primary-600 bg-highlightBlue"
                : "text-textColor bg-dashboardAsh hover:bg-[#eae8e8] focus:outline-gray-400"
            } transition duration-150 ease-in-out focus:ring-0`}
            type="button"
            data-te-collapse-init
            data-te-ripple-init
            data-te-ripple-color="light"
            data-te-target={`#${navTarget}`}
            aria-expanded="false"
            aria-controls={`${navTarget}`}
            onClick={() =>
              dispatch({
                type: dispatchEvent,
              })
            }
          >
            <div className="text-start flex items-center px-4 space-x-3">
              {navBtnContent}
            </div>
          </button>
          <div
            className={`h-full py-6 w-1 ${
              activeTab ? "bg-primColor" : "bg-transparent"
            } rounded-tl-full rounded-br-full`}
          ></div>
        </div>
        {dropdown && (
          <div
            class="!visible hidden"
            id={`${navTarget}`}
            data-te-collapse-item
          >
            <div class="block  bg-white p-5 pb-0">{navContent}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardNavs;
