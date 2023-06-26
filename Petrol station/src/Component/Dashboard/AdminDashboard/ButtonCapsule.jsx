import React from "react";

const ButtonCapsule = ({ text, Icon, active, patch, actionType }) => {
  return (
    <button
      className={`focus:outline-[#384AAD] w-full transition-colors duration-300 rounded-tr-full rounded-br-full pl-4 py-4 flex space-x-3 items-center cursor-pointer ${
        active
          ? "bg-[#D7DBEF] text-[#384AAD] border border-[#384AAD]"
          : "bg-[#F6F6F6] text-[#1B1B1B] border border-transparent"
      }`}
      onClick={()=> {
        console.log(patch)
        patch({type: actionType})
      }}
    //   style={{borderBottomLeftRadius: "50px"}}
    >
      <img src={Icon} alt="" />
      <p className="font-semibold font-open">{text}</p>
    </button>
  );
};

export default ButtonCapsule;
