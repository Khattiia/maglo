import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./Goals.module.css";
import Arrows from "../../assets/Img/SVG/Arrows.svg";
import NotificationIcon from "../../assets/Img/SVG/NotificationIcon.svg";
import SearchBar from "../../components/SearchBar/SearchBar";
import date from "date-and-time";
import SavingsChart from "../../components/echarts/savingschart";
import SavingsGoal from "../../components/Goals/savingsGoal";
import GoalsByCategory from "../../components/Goals/goalsbycategory";

const Goals = () => {
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
        <div className={classes.grid}>
          <SavingsGoal />
          <SavingsChart />
        </div>
        <GoalsByCategory />
      </div>
    </div>
  );
};

export default Goals;
