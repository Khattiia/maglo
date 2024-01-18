import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./Settings.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotificationIcon from "../../assets/Img/SVG/NotificationIcon.svg";
import Arrows from "../../assets/Img/SVG/Arrows.svg";
import date from "date-and-time";
import { Link, useLocation } from "react-router-dom";
import Account from "../../components/settingsComponent";
import classNames from "classnames";
import { useState } from "react";
import settingsHeader from "../../components/settingsComponent/settingsHeader";
import SettingsHeader from "../../components/settingsComponent/settingsHeader";

const data = [
  { path: "settings", label: "Account" },
  { path: "security", label: "Security" },
];

const Settings = () => {
  const location = useLocation();

  const activeItem = location.pathname.split("/")[1];

  const [security, onSecurity] = useState(false);

  const now = new Date();

  const optionClass = classNames({
    [classes.switch]: security,
    [classes.switchActive]: !security,
  });

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
        <div className={classes.box}>
          <SettingsHeader />
          <Account />
        </div>
      </div>
    </div>
  );
};

export default Settings;
