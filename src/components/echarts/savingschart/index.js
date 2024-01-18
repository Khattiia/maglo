import React from "react";
import * as echarts from "echarts";
import { useEffect } from "react";
import classes from "./savingsChart.module.css";

const YourReactComponent = () => {
  useEffect(() => {
    const chartContainer = document.getElementById("chart-container");

    const myChart = echarts.init(chartContainer);

    const option = {
      title: {
        text: "Saving Summary",
        subtext: "2023",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "May 1",
          "May 5",
          "May 10",
          "May 15",
          "May 20",
          "May 25",
          "May 30",
        ],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "$ {value}",
        },
        axisPointer: {
          snap: true,
        },
      },
      visualMap: {
        show: false,
        dimension: 0,
        pieces: [
          {
            lte: 6,
            color: "#299D91",
          },

          {
            gt: 6,
            lte: 14,
            color: "#299D91",
          },
          {
            gt: 14,
            lte: 17,
            color: "red",
          },
          {
            gt: 17,
            color: "#299D91",
          },
        ],
      },
      series: [
        {
          name: "Bills",
          type: "line",
          smooth: true,
          data: [
            100, 300, 280, 600, 260, 270, 300, 550, 500, 400, 390, 380, 390,
          ],
          markArea: {
            itemStyle: {
              color: "rgba(255, 173, 177, 0.4)",
            },
            data: [
              [
                {
                  name: "Morning Peak",
                  xAxis: "600",
                },
                {
                  xAxis: "600",
                },
              ],
              [
                {
                  name: "Evening Peak",
                  xAxis: "600",
                },
                {
                  xAxis: "600",
                },
              ],
            ],
          },
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
        width: "1000px",
        height: "350px",
        marginTop: "10px",
      }}
      className={classes.chart}
    />
  );
};

export default YourReactComponent;
