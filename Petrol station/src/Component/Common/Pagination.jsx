import React from "react";

export default function Pagination({
  postsPerPage,
  totalPages,
  currentPage,
  dispatch,
}) {
  // One page in front
  //   const paginateFront =

  return (
    <div className="py-2 font-mont mt-9">
      <div>
        <p className="text-sm">
          Showing{" "}
          <span className="font-medium">{currentPage * postsPerPage - 10}</span>{" "}
          to
          <span className="font-medium"> {currentPage * postsPerPage} </span>
          of
          <span className="font-medium"> {totalPages} </span>
          results
        </p>
      </div>
      {/* <nav className="block"></nav> */}
      <div className="mt-3">
        <nav
          className="relative z-0 inline-flex rounded-sm shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          {/* Previous */}
          <button
            onClick={() => {
              dispatch({
                type: "setCurrentPage",
                pageNumber: currentPage >= 2 ? currentPage - 1 : 1,
              });
            }}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-uniuyoGreen hover:text-white transition-colors outline-uniuyoGreen"
          >
            <span>Previous</span>
          </button>
          {/* Next */}
          <button
            onClick={() => {
              dispatch({
                type: "setCurrentPage",
                pageNumber: totalPages < postsPerPage ? currentPage : currentPage + 1,
              });
            }}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-uniuyoGreen hover:text-white transition-colors  outline-uniuyoGreen"
          >
            <span>Next</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
