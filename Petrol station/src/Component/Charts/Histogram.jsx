import React, { useEffect } from "react";
import AnyChart from "anychart-react"
import anychart from "anychart"

const getData = () => {
  return [
    ["Jan", "12"],
    ["Feb", "5"],
    ["Mar", "13"],
    ["Apr", "4"],
    ["May", "19"],
    ["Jun", "10"],
    ["July", "11"],
    ["Aug", "10"],
    ["Sep", "3"],
    ["Oct", "9"],
    ["Nov", "13"],
    ["Dec", "1"],
  ];
};

const complexSettings = {
    width: "50%",
    height: 800,
    type: 'column',
    data: getData(),
    title: '',
    yAxis: [0, {
    //   orientation: 'right',
      enabled: true,
      labels: {
        format: '{%Value}{decimalPoint:\\,}',
        fontColor: 'red'
      },
      
    }],
    legend: false,
    color: "#FFF"
    
  };

const Histogram = ({data}) => {
  
  return (
    <>
        <AnyChart {...complexSettings}/>
    </>
  )
};

export default Histogram;
