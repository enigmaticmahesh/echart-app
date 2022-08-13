import React, { useEffect, useRef } from "react";
import * as Echarts from "echarts";
import "./BarChart.css";

type Props = {};

const option: Echarts.EChartOption = {
  xAxis: {
    type: "category",
    // data: [
    //   14.23, 13.2, 13.16, 14.37, 13.24, 14.2, 14.39, 14.06, 14.83, 13.86, 14.1,
    //   14.12, 13.75, 14.75, 14.38, 13.63, 14.3, 13.83, 14.19, 13.64, 14.06,
    //   12.93, 13.71, 12.85, 13.5, 13.05, 13.39, 13.3, 13.87, 14.02, 13.73, 13.58,
    //   13.68, 13.76, 13.51, 13.48, 13.28, 13.05, 13.07, 14.22, 13.56, 13.41,
    //   13.88, 13.24, 13.05, 14.21, 14.38, 13.9, 14.1, 13.94, 13.05, 13.83, 13.82,
    //   13.77, 13.74, 13.56, 14.22, 13.29, 13.72, 12.37, 12.33, 12.64, 13.67,
    //   12.37, 12.17, 12.37, 13.11, 12.37, 13.34, 12.21, 12.29, 13.86, 13.49,
    //   12.99, 11.96, 11.66, 13.03, 11.84, 12.33, 12.7, 12, 12.72, 12.08, 13.05,
    //   11.84, 12.67, 12.16, 11.65, 11.64, 12.08, 12.08, 12, 12.69, 12.29, 11.62,
    //   12.47, 11.81, 12.29, 12.37, 12.29, 12.08, 12.6, 12.34, 11.82, 12.51,
    //   12.42, 12.25, 12.72, 12.22, 11.61, 11.46, 12.52, 11.76, 11.41, 12.08,
    //   11.03, 11.82, 12.42, 12.77, 12, 11.45, 11.56, 12.42, 13.05, 11.87, 12.07,
    //   12.43, 11.79, 12.37, 12.04, 12.86, 12.88, 12.81, 12.7, 12.51, 12.6, 12.25,
    //   12.53, 13.49, 12.84, 12.93, 13.36, 13.52, 13.62, 12.25, 13.16, 13.88,
    //   12.87, 13.32, 13.08, 13.5, 12.79, 13.11, 13.23, 12.58, 13.17, 13.84,
    //   12.45, 14.34, 13.48, 12.36, 13.69, 12.85, 12.96, 13.78, 13.73, 13.45,
    //   12.82, 13.58, 13.4, 12.2, 12.77, 14.16, 13.71, 13.4, 13.27, 13.17, 14.13,
    // ],
    name: "Alchohol",
    nameLocation: "center",
    nameTextStyle: {
      padding: [30, 0, 0, 0],
      fontWeight: "bold",
    },
  },
  yAxis: {
    type: "value",
    name: "Malic Acid",
    nameLocation: "center",
    nameTextStyle: {
      padding: [0, 0, 40, 0],
      fontWeight: "bolder",
    },
  },
  series: [
    {
      data: [
        ["Mon", 120],
        ["Tue", 200],
        ["Wed", 150],
        ["Thu", 80],
        ["Fri", 70],
        ["Sat", 110],
        ["Sun", 130],
      ],
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
