import React from "react";
// import classes from "./FoodBox.module.css";
import Food from "../../../assets/Img/SVG/FoodIcon.svg";
import DownArrow from "../../../assets/Img/SVG/DownArrow.svg";
import classes from "../housing/housing.module.css";

const FoodBox = () => {
  return (
    <div className={classes.box}>
      <header className={classes.header}>
        <img alt="food" src={Food} className={classes.houseImg} />
        <div className={classes.housing}>
          <div>Food</div>
          <div>$350.000</div>
        </div>
        <div className={classes.compare}>
          <div className={classes.flex}>
            08% <img src={DownArrow} alt="decrease" />
          </div>
          <div>Compare to last month</div>
        </div>
      </header>
      <div className={classes.section}>
        <div className={classes.smallGrayName}>Grocery</div>
        <div className={classes.datePrice}>
          <div>$230.00</div>
          <div>17 may 2023 </div>
        </div>
      </div>
      <div className={classes.secondSection}>
        <div className={classes.smallGrayName}>Restaurant Bill</div>
        <div className={classes.datePrice}>
          <div>$120.00</div>
          <div>17 may 2023 </div>
        </div>
      </div>
    </div>
  );
};

export default FoodBox;
