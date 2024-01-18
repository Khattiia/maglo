import React from "react";
import classes from "./Sidebar.module.css";
import OverviewImg from "../../assets/Img/SVG/OverviewMenu.svg";
import ExpensesIcon from "../../assets/Img/SVG/ExpensesIcon.svg";
import SettingsIcon from "../../assets/Img/SVG/SettingsIcon.svg";
import LogoutIcon from "../../assets/Img/SVG/LogoutIcon.svg";
import GoalIcon from "../../assets/Img/SVG/GoalIcons.svg";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";
import ProfileImage from "../../assets/Img/SVG/ProfileImage.svg";
import classNames from "classnames";

const Sidebar = () => {
  const name = localStorage.getItem('name')
  const uid = localStorage.getItem("uid");
  const location = useLocation();
  const activeItem = location.pathname.split("/")[1]
  const navigate = useNavigate();
  const image = localStorage.getItem('userImage')

  
  const sidebarData = [
    { path: "overview", label: "Overview", image: OverviewImg },
    { path: "expenses", label: "Expenses", image: ExpensesIcon },
    { path: "goals", label: "Goals", image: GoalIcon },
    { path: "settings" , label: "Settings", image: SettingsIcon },
  ];



  const LogOutHandler = () => {
    if (uid) {
      localStorage.removeItem(uid);
      localStorage.setItem("isAuthenticated", "false");
      localStorage.removeItem("name");
      localStorage.removeItem('userImage')
      navigate("/");
    } else {
      console.error("uid not found in local storage");
    }
  };

  return (
    <div className={classes.sidebar}>
      <header className={classes.header}>
        FINE<div className={classes.bank}>bank</div>.IO
      </header>
      <ul className={classes.menu}>
        {sidebarData.map((item) => (
          <NavLink
            key={item.path}
            to={`/${item.path}`}
            className={classNames({
              [classes.clicked]: activeItem === item.path,
            })}
          >
            <img alt={item.path} src={item.image} className={classes.img} />
            {item.label}
          </NavLink>
        ))}
        <Link onClick={LogOutHandler}>
          <img alt="logoutIcon" className={classes.img} src={LogoutIcon} />{" "}
          Logout
        </Link>
      </ul>

      <div className={classes.profile}>
        <img src={image} alt="profileimg" />
        <div className={classes.name}>
          <div>{name}</div>
          <Link> your profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
