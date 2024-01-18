import date from "date-and-time";
import Award from "../../../assets/Img/SVG/Award.svg";
import Dart from "../../../assets/Img/SVG/Dart.svg";
import EclipseGreen from "../../../assets/Img/SVG/EclipseGreen.svg";
import EclipseWhite from "../../../assets/Img/SVG/EclipseWhite.svg";
import EclipseArrow from "../../../assets/Img/SVG/EclipseArrow.svg";
import classes from "./savings.module.css";
import EditIcon from "../../../assets/Img/SVG/EditIcon.svg";
import { useEffect, useState } from "react";
import SavingsGoalPopup from "../../popup/savingsGoalPopUp";
import useUserData from "../../../helpers/fetchdata/FetchData";


const SavingsGoal = () => {
  const [popup, isPopupOpen] = useState(false)
  const [savingsGoal, setSavingsGoal] = useState(20.000)
  const now = new Date();
  const userData = useUserData()

  useEffect(() => {
    const uid = localStorage.getItem("uid");

    if (uid) {
      if (userData) {
        setSavingsGoal(userData.savingsGoal  || 20.000); 
      }
    }
  }, [userData]);


  const handleGoalChange = (newGoal) => {
    setSavingsGoal(newGoal)
  }

  const popupHandler = () => {
    isPopupOpen(true)
  } 

  const popupClose =() => {
    isPopupOpen(false)
  }

  const formatNumber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'k';
    }
    return number.toString();
  };

  return (
    <div className={classes.section}>
      <div className={classes.grayName}>Goals</div>
      <div className={classes.box}>
        <div className={classes.balance}>
          <div>Savings Goal</div>
          <div>{date.format(now, "MMM, YYYY")}</div>
        </div>
        <div className={classes.goalsGrid}>
          <div className={classes.goalsLeft}>
            <div className={classes.target}>
              <img src={Award} alt="awardIcon" />
              <div>
                <div className={classes.targetGray}>Target Achieved</div>
                <div className={classes.blackMoney}>$12,500</div>
              </div>
            </div>

            <div className={classes.target}>
              <img src={Dart} alt="dart" />
              <div>
                <div className={classes.targetGray}>This month Target </div>
                <div className={classes.blackMoney}>${savingsGoal}</div>
              </div>
            </div>
          </div>
          <div className={classes.goalsRight}>
            <div className={classes.eclipse}>
              <div className={classes.eclipseDiagram}>
                <div className={classes.eclipsePart}>
                  <img
                    alt="eclipsegreen"
                    src={EclipseGreen}
                    className={classes.eclipseGreen}
                  />
                  <img
                    alt="eclipsewhite"
                    src={EclipseWhite}
                    className={classes.eclipseWhite}
                  />
                </div>

                <img
                  alt="eclipseArrow"
                  src={EclipseArrow}
                  className={classes.eclipseArrow}
                />
              </div>
              <div className={classes.goalNumbers}>
                <div className={classes.grayNumbers}>$0</div>
                <div className={classes.blackNumbers}>12K$</div>
                <div className={classes.grayNumbers}>{formatNumber(savingsGoal)}</div>
              </div>
              <div className={classes.target}>Target vs Achievement</div>
            </div>
          </div>
        </div>
        <button onClick={popupHandler}>
          Adjust Goal <img src={EditIcon} alt="EDIT" />
        </button>
      </div>
      {popup && ( <SavingsGoalPopup 
      onClose={popupClose}
      savingsGoal={savingsGoal}
      onGoalChange={handleGoalChange}

      />)
      }
    </div>
  );
};

export default SavingsGoal;
