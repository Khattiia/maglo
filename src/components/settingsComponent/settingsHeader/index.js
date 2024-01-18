import React from "react";
import classes from "./settingsHeader.module.css";
import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";

const data = [
  { path: "/settings", label: "Account" },
  { path: "/settings/security", label: "Security" },
];

const SettingsHeader = () => {
  const location = useLocation();
  const activeItem = location.pathname;

  return (
    <div className={classes.switch}>
      {data.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={classNames({
            [classes.switchActive]: activeItem === item.path,
          })}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}; 



export default SettingsHeader;
