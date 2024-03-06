/* eslint-disable @typescript-eslint/no-explicit-any */
// ApexChart.tsx
import React from "react";
import ReactApexChart from "react-apexcharts";

type TApexChartProps = {
  data: {
    name: string;
    data: number[];
  }[];
  chartType:
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "radialBar";
  className: string;
  height: any;
  series: any;
};

const ApexChart: React.FC<TApexChartProps> = ({
  data,
  chartType,
  className,
  height,
  series,
}) => {
  const chartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: data.map((item) => item.x),
    },
  };

  return (
    <ReactApexChart
      options={chartOptions}
      series={series}
      type={chartType}
      height={height}
      className={className}
    />
  );
};

export default ApexChart;
