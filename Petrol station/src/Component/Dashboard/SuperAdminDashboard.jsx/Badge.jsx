import React from "react";

const Badge = ({ shade }) => {
  return (
    <>
      {shade === "open" && (
        <div className={`bg-[#0FC63733] font-medium font-pt text-[#0FC637] px-2 py-1 text-center text-sm rounded-md`}>
          Open
        </div>
      )}
      {shade === "closed" && (
        <div className={`bg-[#EBAE3933] font-medium font-pt text-[#EBAE39] px-2 py-1 rounded-md text-sm text-center`}>
          Closed
        </div>
      )}
    </>
  );
};

export default Badge;
