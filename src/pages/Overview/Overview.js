import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./Overview.module.css";
import Arrows from "../../assets/Img/SVG/Arrows.svg";
import date from "date-and-time";
import NotificationIcon from "../../assets/Img/SVG/NotificationIcon.svg";
import Chart from "../../components/echarts";
import SearchBar from "../../components/SearchBar/SearchBar";
import TotalBalanceBox from "../../components/overviewBoxes/totalBalanceBox";
import GoalsBox from "../../components/overviewBoxes/GoalsBox";
import BillBox from "../../components/overviewBoxes/BillBox";
import TransactionBox from "../../components/overviewBoxes/TransactionBox";
import Mastercard from "../../assets/Img/SVG/Mastercard.png";

const data = {
  balance: {
    total: "$240,399",
    cardNumber: "**** **** **** 2598",
    cardBalance: "$25000",
    img: { Mastercard },
    accountType: "Credit Card",
  },
  goals: {
    total: "$240,399",
    target: "target achieved",
    targetAmount: "$12,500",
    monthTarget: "This Month Target",
    monthAmount: "$20.000",
    vs: "Target vs Achievement",
    minGoal: "$0",
    presGoal: "$12k",
    maxGoal: "$20k",
  },
  bill: {
    figma: "Figma - Monthly",
    figmaCharge: "Last Charge - 14 May, 2022",
    figmaAmount: "$150",
    adobe: "Adobe - Yearly",
    adobeCharge: "Last Charge - 17 jun, 2023",
    adobeAmount: "$559",
  },
  transaction: {
    gadget: "Gadget & Gear",
    gadgetGTR: "GTR 5",
    gadgetPrice: "$160.00",
    date: "17 May 2023",
    gadgetPolo: "Polo Shirt",
    uber: "uber",
    poloPrice: "$20",
    uberPrice: "$12",
    uberTaxi: "Taxi Fare",
    food: "fast food",
    foodWendy: "Wendy's",
    foodPrice: "$10",
  },
};

const Overview = () => {
  const name = localStorage.getItem("name");

  const now = new Date();

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className={classes.root}>
        <header className={classes.header}>
          <div className={classes.name}>Hello {name} </div>
          <img src={Arrows} alt="Arrows" className={classes.arrows} />
          <div className={classes.date}>{date.format(now, "MMM DD, YYYY")}</div>
          <div className={classes.search}>
            <img alt="notification" src={NotificationIcon} />
            <SearchBar />
          </div>
        </header>
        <div className={classes.grid}>
          <div className={classes.section}>
            <TotalBalanceBox data={data.balance} />
          </div>
          <div className={classes.section}>
            <GoalsBox data={data.goals} />
          </div>
          <div className={classes.section}>
            <BillBox data={data.bill} />
          </div>
        </div>

        <div className={classes.section2}>
          <div className={classes.lowerleft}>
            <TransactionBox data={data.transaction} />
          </div>
          <div>{<Chart />}</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
