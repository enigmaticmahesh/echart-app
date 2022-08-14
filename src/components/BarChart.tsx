import React, { useEffect, useRef } from "react";
import * as Echarts from "echarts";
import "./BarChart.css";
import { getBarData } from "../data";

type Props = {};

const option: Echarts.EChartOption = {
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
  // useRef is used to get the element where we can render the chart
  const barChartContainer = useRef(null);

  useEffect(() => {
    // Non-null assertion operator is used to let ts know that it won't be null
    const barChart = Echarts.init(barChartContainer.current!);
    barChart.setOption(option);
    // As page reloads, the Echart instance should dispose
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
