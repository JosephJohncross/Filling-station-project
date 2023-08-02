import React, { useState, useRef, useEffect } from "react";



const TextInput = ({
  label,
  name,
  placeholder,
  dispatch,
  dispatchType,
  preValue,
  type = "text",
}) => {
  const inputRef = useRef(null);

  // Focus the input field after state update
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [preValue]);

  return (
    <div className="flex flex-col space-y-3">
      <label htmlFor={name} className="font-medium text-[#575757]">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={preValue}
          id={name}
          // name={name}
          className="w-full border border-gray-400/70 h-10 rounded-md font-mont text-sm focus:border-uniuyoGreen focus:ring-0 focus:outline-none py-3 text-[#4E4E4E] px-5"
          placeholder={placeholder}
          ref={inputRef}
          onChange={(e) => {
            dispatch({
              type: dispatchType,
              val: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default TextInput;
