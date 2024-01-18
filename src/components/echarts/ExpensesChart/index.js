import React from "react";
import classes from "./ExpensesChart.module.css";
import ArrowDown from "../../../assets/Img/SVG/ArrowDown.svg";

const ExpensesChart = () => {
  const monthData = [
    { name: "Jan", whiteHeight: 107, greenHeight: 137 },
    { name: "Feb", whiteHeight: 81, greenHeight: 92 },
    { name: "Mar", whiteHeight: 107, greenHeight: 64 },
    { name: "Apr", whiteHeight: 107, greenHeight: 128 },
    { name: "May", whiteHeight: 107, greenHeight: 114 },
    { name: "Jun", whiteHeight: 107, greenHeight: 64 },
    { name: "Jul", whiteHeight: 107, greenHeight: 64 },
    { name: "Aug", whiteHeight: 53, greenHeight: 131 },
    { name: "Sep", whiteHeight: 107, greenHeight: 64 },
    { name: "Oct", whiteHeight: 107, greenHeight: 114 },
    { name: "Nov", whiteHeight: 87, greenHeight: 60 },
    { name: "Dec", whiteHeight: 87, greenHeight: 108 },
  ];

  const Column = ({ name, whiteHeight, greenHeight }) => (
    <div className={classes.column}>
      <div className={classes.lines}>
        <div
          style={{ height: `${whiteHeight}px` }}
          className={classes.white}
        ></div>
        <div
          style={{ height: `${greenHeight}px` }}
          className={classes.green}
        ></div>
      </div>
      <div className={classes.month}>{name}</div>
    </div>
  );

  return (
    <div className={classes.chartBox}>
      <div className={classes.grayName}>Expenses Comparison</div>
      <div className={classes.box}>
        <div className={classes.header}>
          <div className={classes.monthlyComparison}>
            <div>Monthly Comparison</div>
            <img alt="arrowdown" src={ArrowDown} />
          </div>
          <div className={classes.weeks}>
            <div className={classes.week}>
              <div className={classes.rectangleGreen}> </div>
              <div>This Week</div>
            </div>
            <div className={classes.week}>
              <div className={classes.rectangleGray}> </div>
              <div>Last Week</div>
            </div>
          </div>
        </div>
        <div className={classes.chart}>
          <div className={classes.horizontal}>
            <li>$250k</li>
            <li>$50k</li>
            <li>$10k</li>
            <li>$2k</li>
            <li>$0k</li>
          </div>
          <div className={classes.vertical}>
            {monthData.map((month) => (
              <Column key={month.name} {...month} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesChart;
