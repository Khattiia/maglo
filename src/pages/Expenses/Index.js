import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./Expenses.module.css";
import Arrows from "../../assets/Img/SVG/Arrows.svg";
import date from "date-and-time";
import NotificationIcon from "../../assets/Img/SVG/NotificationIcon.svg";
import SearchBar from "../../components/SearchBar/SearchBar";
import ExpensesChart from "../../components/echarts/ExpensesChart";
import ExpensesBreakdown from "../../components/Expenses";

const Expenses = () => {
  const now = new Date();

  return (
    <div>
      <Sidebar />
      <div className={classes.root}>
        <header className={classes.header}>
          <img src={Arrows} alt="Arrows" className={classes.arrows} />
          <div className={classes.date}>{date.format(now, "MMM DD, YYYY")}</div>
          <div className={classes.search}>
            <img alt="notification" src={NotificationIcon} />
            <SearchBar />
          </div>
        </header>
        <div className={classes.chartBox}>
          <ExpensesChart />
        </div>
        <div>
          <ExpensesBreakdown />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
