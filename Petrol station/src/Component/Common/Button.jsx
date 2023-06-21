import React from "react";


// image import
import directionIcon from "../../assets/images/directionIcon.svg"

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
      case "blueBig":
        classStyle = `rounded-md mini:px-6 py-2 bg-primColor font-open text-lg border border-[#F2F2F2] text-[#F2F2F2] hover:text-uniuyoGreen hover:bg-primColor/80 w-max hover:shadow-sm transition-colors text-sm md:text-sm flex space-x-20 items-center`;
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
          <img src={directionIcon} alt=""/>
        </div>
      ) : (
        <>{content}</>
      )}
    </button>
  );
};

export default Button;
