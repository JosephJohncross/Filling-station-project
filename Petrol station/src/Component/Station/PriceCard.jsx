import React, { useEffect, useState } from "react";

const PriceCard = ({ diesel, petrol, kerosene }) => {
  const [petrolSplit, setPetrolSplit] = useState([]);
  const [dieselSplit, setDieselSplit] = useState([]);
  const [keroseneSplit, setKeroseneSplit] = useState([]);

  const splitNumberIntoDigits = (number) => {
    // Convert the number to a string
    const numString = number.toString();
    // Use the spread operator to split the string into individual digits
    const digits = [...numString];
    return digits;
  };

  useEffect(() => {
    diesel != null
      ? setDieselSplit(splitNumberIntoDigits(diesel))
      : setDieselSplit(["-", "-", "-"]);
    petrol != null
      ? setPetrolSplit(splitNumberIntoDigits(petrol))
      : setPetrolSplit(["-", "-", "-"]);
    kerosene != null
      ? setKeroseneSplit(splitNumberIntoDigits(kerosene))
      : setKeroseneSplit(["-", "-", "-"]);
  }, []);

  return (
    <div className="">
      <div className="h-max w-max p-7 rounded-md relative bg-secColor shadow-rounded-xl">
        <span className="w-2 h-2 rounded-full bg-white absolute top-2 right-2"></span>
        <span className="w-2 h-2 rounded-full bg-white absolute top-2 left-2"></span>
        <span className="w-2 h-2 rounded-full bg-white absolute bottom-2 right-2"></span>
        <span className="w-2 h-2 rounded-full bg-white absolute bottom-2 left-2"></span>
        <div className="flex flex-col space-y-3">
          {/* Petrol */}
          <div className="flex justify-between space-x-4 items-center">
            <p className="text-sm font-semibold font-pt">Petrol</p>
            <div className="bg-white flex items-center divide-x divide-slate-500 font-open text-slate-600">
              <p className="px-2">{petrolSplit[0]}</p>
              <p className="px-2">{petrolSplit[1]}</p>
              <p className="px-2">{petrolSplit[2]}</p>
            </div>
          </div>
          {/* Diesel */}
          <div className="flex justify-between space-x-4 items-center">
            <p className="text-sm font-semibold font-pt">Diesel</p>
            <div className="bg-white flex items-center divide-x divide-slate-500 font-open text-slate-600">
              <p className="px-2">{dieselSplit[0]}</p>
              <p className="px-2">{dieselSplit[1]}</p>
              <p className="px-2">{dieselSplit[2]}</p>
            </div>
          </div>
          {/* Kerosene */}
          <div className="flex justify-between space-x-4 items-center">
            <p className="text-sm font-semibold font-pt">Kerosene</p>
            <div className="bg-white flex items-center divide-x divide-slate-500 font-open text-slate-600">
              <p className="px-2">{keroseneSplit[0]}</p>
              <p className="px-2">{keroseneSplit[1]}</p>
              <p className="px-2">{keroseneSplit[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
