import React, { useEffect } from "react";
import * as echarts from "echarts";
import classes from "./chart.module.css";

const Chart = () => {
  useEffect(() => {
    const chartContainer = document.getElementById("chart-container");

    const myChart = echarts.init(chartContainer);

    const option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "0%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Food" },
            { value: 735, name: "Subscriptions" },
            { value: 580, name: "Uber" },
            { value: 484, name: "Transactions" },
            { value: 300, name: "Gadget" },
          ],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div
      id="chart-container"
      style={{
        width: "500px",
        height: "500px",
        marginTop: "10px",
      }}
      className={classes.chart}
    />
  );
};

export default Chart;
