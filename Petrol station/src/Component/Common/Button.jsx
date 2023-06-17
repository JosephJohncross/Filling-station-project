import React from "react";

const Button = ({ shade, content, icon}) => {
  const buttonStyle = (shade) => {
    var classStyle = "";

    switch (shade) {
      case "blue":
        classStyle =
          "rounded-md px-6 py-2 font-semibold font-pt text-base focus:outline-primColor  text-[#F2F2F2] bg-primColor shadow-md hover:bg-primColor/80 hover:shadow-sm flex justify-center items-center";
        break;
      case "white":
        classStyle = `rounded-md px-6 py-2 font-semibold font-pt focus:outline-white bg-white/70 text-base border border-white text-primColor hover:bg-white hover:shadow-sm transition-colors flex justify-center items-center`;
        break;
      case "bordered-white":
        classStyle = `rounded-md px-6 py-2 bg-transparent font-mont text-lg border border-[#F2F2F2] text-[#F2F2F2] hover:text-uniuyoGreen hover:bg-[#F2F2F2] hover:shadow-sm transition-colors text-sm md:text-sm flex justify-center items-center`;
        break;
      default:
        classStyle = "";
    }
    return classStyle;
  };

  return (
    <button className={buttonStyle(shade)}>
      {icon ? (
        <div className="flex justify-center items-center space-x-3">
          <span>{content}</span>
          <svg
            className="w-2"
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.22559 16.8285L7.74559 10.3085C8.51559 9.53853 8.51559 8.27853 7.74559 7.50853L1.22559 0.988525"
              stroke="#329868"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : (
        <>{content}</>
      )}
    </button>
  );
};

export default Button;
