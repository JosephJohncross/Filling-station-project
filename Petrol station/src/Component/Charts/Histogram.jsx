import React, { useEffect, useState } from "react";
import AnyChart from "anychart-react";
import anychart from "anychart";

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
  width: "100%",
  height: "300px",
  type: "column",
  data: getData(),
  title: "",
  yAxis: [
    0,
    {
      //   orientation: 'right',
      enabled: true,
      labels: {
        format: "{%Value}{decimalPoint:\\,}",
        fontColor: "red",
      },
    },
  ],
  legend: false,
  color: "#FFF",
};

const Histogram = ({ timeout, keyProp }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);

      return () => clearTimeout(timer);
    }, timeout);
  }, []);

  const chartData = getData();
  const chartSettings = { ...complexSettings };

  return shouldRender ? (
    <ChartContainer chartData={chartData} chartSettings={chartSettings} />
  ) : null;

  // return shouldRender ? <AnyChart {...complexSettings} /> : null;
};

// Chart container
const ChartContainer = ({ chartData, chartSettings }) => {
  return <AnyChart {...chartSettings} data={chartData} />;
};

export default Histogram;
