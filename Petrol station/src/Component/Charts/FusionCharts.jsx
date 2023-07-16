import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const dataSource = {
  chart: {
    caption: "",
    subCaption: "",
    xAxisName: "Days",
    yAxisName: "",
    // numberSuffix: 'K',
    theme: "fusion",
  },
  data: [
    { label: "Mon", value: "170" },
    { label: "Tue", value: "120" },
    { label: "Wed", value: "180" },
    { label: "Thur", value: "40" },
    { label: "Fri", value: "115" },
    { label: "Sat", value: "90" },
    { label: "Sun", value: "30" },
  ],
};

const chartConfigs = {
  type: "column2d",
  width: "100%",
  height: 400,
  dataFormat: "json",
  dataSource: dataSource,
  canvasPadding: "30",
};

const FusinChart = ({}) => {
  return <ReactFC {...chartConfigs} />;
};

export default FusinChart;
