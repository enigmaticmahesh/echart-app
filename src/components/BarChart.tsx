import React, { useEffect, useRef } from "react";
import * as Echarts from "echarts";
import "./BarChart.css";

type Props = {};

const option: Echarts.EChartOption = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

const BarChart = (props: Props) => {
  const barChartContainer = useRef(null);

  useEffect(() => {
    const barChart = Echarts.init(barChartContainer.current!);
    barChart.setOption(option);
    return () => {
      barChart.dispose();
    };
  }, []);

  return (
    <div>
      <div id="BAR_CHART" ref={barChartContainer}></div>
    </div>
  );
};

export default BarChart;
