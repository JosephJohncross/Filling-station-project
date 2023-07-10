import React from "react";

const DashboardCard = ({ shade, valueText, icon, info, borderS }) => {
  return (
    <>
      <div
        className={`rounded-lg flex flex-col justify-center items-center bg-[${shade}] space-y-3 h-48 border-2 border-[${borderS}]`}
      >
        {console.log(shade)}
          <img src={icon} alt="" className="w-6"/>
        <p className="font-pt text-2xl">{valueText}</p>
        <p className="text-base font-open font-medium">{info}</p>
      </div>
    </>
  );
};

export default DashboardCard;
