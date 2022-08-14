import React from "react";
import ReactECharts from "echarts-for-react";
import { EChartOption } from "echarts";
import { getBarData } from "../data";

type Props = {};

const option: EChartOption = {
  xAxis: {
    type: "category",
    name: "Alchohol",
    nameLocation: "center",
    nameTextStyle: {
      padding: [30, 0, 0, 0],
      fontWeight: "bold",
    },
  },
  yAxis: {
    type: "value",
    name: "Malic Acid (avg.)",
    nameLocation: "center",
    nameTextStyle: {
      padding: [0, 0, 40, 0],
      fontWeight: "bolder",
    },
  },
  series: [
    {
      data: getBarData(),
      type: "bar",
    },
  ],
};

const BarChart = (props: Props) => {
  return <ReactECharts option={option} />;
};

export default BarChart;
