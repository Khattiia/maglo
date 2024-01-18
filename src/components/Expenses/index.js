import React from "react";
import classes from "./Expenses.module.css";
import Housing from "./housing";
import FoodBox from "./Food";
import TransportationBox from "./transportation";
import EntertainmentBox from "./Entertainment";
import Shopping from "./ShoppingBox";
import Others from "./Others";


const ExpensesBreakdown = () => {
  return (
    <div className={classes.box}>
      <div className={classes.grayName}>Expenses Breakdown</div>
      <div className={classes.grid}>
        <div>
          <Housing />
        </div>
        <div>
          <FoodBox />
        </div>
        <div>
          <TransportationBox />
        </div>
      </div>
      <div className={classes.grid}>
        <EntertainmentBox />
        <Shopping/>
        <Others/>
      </div>
    </div>
  );
};

export default ExpensesBreakdown;
