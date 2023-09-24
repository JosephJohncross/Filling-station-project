import React from "react";

// image import
import defaultImg from "../../assets/images/default-user.svg";

const ReviewCard = ({ img, review, date, author }) => {
  return (
    <div className="shadow-rounded-xl-soft rounded-xl p-3 h-40 flex flex-col space-y-3 justify-center hover:shadow-rounded-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full border-gray-300 border-2 flex justify-center items-center">
          <img src={img ? img : defaultImg} alt="" className="" />
        </div>
        <div className="">
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-700">{date}</p>
        </div>
      </div>
      <p className="font-open text-gray-700 text-sm font-normal">{review}</p>
    </div>
  );
};

export default ReviewCard;
