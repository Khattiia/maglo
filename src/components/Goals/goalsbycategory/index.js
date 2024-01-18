import React, { useState, useEffect } from "react";
import classes from "./goalsByCategory.module.css";
import useUserData from "../../../helpers/fetchdata/FetchData";

import HouseIcon from "../../../assets/Img/SVG/Housing.svg";
import EditIcon from "../../../assets/Img/SVG/EditIcon.svg";
import FoodIcon from "../../../assets/Img/SVG/FoodIcon.svg";
import TransportIcon from "../../../assets/Img/SVG/TransportIcon.svg";
import ShoppingIcon from "../../../assets/Img/SVG/ShoppingIcon.svg";
import Others from "../../../assets/Img/SVG/OthersIcon.svg";
import Entertainment from "../../../assets/Img/SVG/MovieIcon.svg";

import Popup from "../../popup";

const categoryData = [
  { name: "Housing", icon: HouseIcon,},
  { name: "Food", icon: FoodIcon },
  { name: "Transportation", icon: TransportIcon },
  { name: "Entertainment", icon: Entertainment },
  { name: "Shopping", icon: ShoppingIcon },
  { name: "Others", icon: Others },
];



const GoalsByCategory = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userGoals, setUserGoals] = useState({}); 

  const userData = useUserData();


  useEffect(() => {
    const uid = localStorage.getItem("uid");

    if (uid) {
      if (userData) {
        setUserGoals(userData.goals  || {}); 
      }
    }
  }, [userData]);

  const adjustHandler = (category) => {
    setSelectedCategory(category);
    setPopupOpen(true);
  };

  const handleGoalChange = (newGoal) => {
    setUserGoals((prevUserGoals) => ({
      ...prevUserGoals,
      [selectedCategory.name]: newGoal,
    }));
  };

  const closePopup = () => {
    setSelectedCategory(null);
    setPopupOpen(false);
  };

  return (
    <div className={classes.box}>
      <header className={classes.grayName}>Expenses Goals by Category</header>
      <div className={classes.categories}>
        <div className={classes.line}>
          {categoryData.slice(0, 3).map((category, index) => (
            <div className={classes.category} key={index}>
              <img
                src={category.icon}
                alt={category.name}
                className={classes.icon}
              />
              <div className={classes.namePrice}>
                <div className={classes.name}>{category.name}</div>
                <div className={classes.goalNumber}>${userGoals[category.name]}</div>
              </div>
              <button
                className={classes.smallButton}
                onClick={() => adjustHandler(category)}
              >
                Adjust <img src={EditIcon} alt="edit" />
              </button>
            </div>
          ))}
        </div>
        <div className={classes.line}>
          {categoryData.slice(3).map((category, index) => (
            <div className={classes.category} key={index}>
              <img
                src={category.icon}
                alt={category.name}
                className={classes.icon}
              />
              <div className={classes.namePrice}>
                <div className={classes.name}>{category.name}</div>
                <div className={classes.goalNumber}>${userGoals[category.name]}</div>
              </div>
              <button
                className={classes.smallButton}
                onClick={() => adjustHandler(category)}
              >
                Adjust <img src={EditIcon} alt="edit" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {isPopupOpen && (
        <Popup
          category={selectedCategory}
          currentGoal={userGoals[selectedCategory.name] || 250.00}
          onGoalChange={handleGoalChange}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default GoalsByCategory;