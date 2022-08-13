import React, { useEffect, useRef } from "react";
import * as Echarts from "echarts";
import "./ScatterChart.css";
import { scatterChartData } from "../data";

type Props = {};

const option: Echarts.EChartOption = {
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
  const scatterChartContainer = useRef(null);

  useEffect(() => {
    const sactterChart = Echarts.init(scatterChartContainer.current!);
    sactterChart.setOption(option);
    return () => {
      sactterChart.dispose();
    };
  }, []);
  return (
    <div>
      <div id="SCATTER_CHART" ref={scatterChartContainer}></div>
    </div>
  );
}
