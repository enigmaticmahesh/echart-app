import React from "react";
import ReactECharts from "echarts-for-react";
import { EChartOption } from "echarts";
import { scatterChartData } from "../data";

type Props = {};

const option: EChartOption = {
  xAxis: {
    name: "Color Intensity",
    nameLocation: "center",
    nameTextStyle: {
      padding: [30, 0, 0, 0],
      fontWeight: "bold",
    },
  },
  yAxis: {
    name: "Hue",
    nameLocation: "center",
    nameTextStyle: {
      padding: [0, 0, 40, 0],
      fontWeight: "bold",
    },
  },
  series: [
    {
      symbolSize: 20,
      data: scatterChartData,
      type: "scatter",
    },
  ],
};

export default function ScatterChart(props: Props) {
  return <ReactECharts option={option} />;
}
