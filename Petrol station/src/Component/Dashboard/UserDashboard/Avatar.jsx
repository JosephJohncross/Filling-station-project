import React from "react";

const Avatar = ({ img, id }) => {
  return (
    <div className="">
      <input
        type="radio"
        id={id}
        value=""
        class="hidden peer"
        required=""
        name="avatar"
        onClick={()=> {
            
        }}
      />
      <label
        for={id}
        class="inline-flex items-center rounded-full justify-between w-28 h-28 bg-white border-4 border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-gray-600"
      >
        <div className="">
            <img src={img} className="w-full"/>
        </div>
      </label>
    </div>
  );
};

export default Avatar;
