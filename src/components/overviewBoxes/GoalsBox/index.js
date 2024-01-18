import classes from "./GoalsBox.module.css";
import date from "date-and-time";
import Award from "../../../assets/Img/SVG/Award.svg";
import Dart from "../../../assets/Img/SVG/Dart.svg";
import EclipseGreen from "../../../assets/Img/SVG/EclipseGreen.svg";
import EclipseWhite from "../../../assets/Img/SVG/EclipseWhite.svg";
import EclipseArrow from "../../../assets/Img/SVG/EclipseArrow.svg";

const GoalsBox = (props) => {
  const now = new Date();

  return (
    <div>
      <div className={classes.grayName}>Goals</div>
      <div className={classes.box}>
        <div className={classes.balance}>
          <div>{props.data.total}</div>
          <div>{date.format(now, "MMM, YYYY")}</div>
        </div>
        <div className={classes.goalsGrid}>
          <div className={classes.goalsLeft}>
            <div className={classes.target}>
              <img src={Award} alt="awardIcon" />
              <div>
                <div className={classes.targetGray}>{props.data.target}</div>
                <div className={classes.blackMoney}>
                  {props.data.targetAmount}
                </div>
              </div>
            </div>

            <div className={classes.target}>
              <img src={Dart} alt="dart" />
              <div>
                <div className={classes.targetGray}>
                  {props.data.monthTarget}
                </div>
                <div className={classes.blackMoney}>
                  {props.data.monthAmount}
                </div>
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
                <div className={classes.grayNumbers}>{props.data.minGoal}</div>
                <div className={classes.blackNumbers}>
                  {props.data.presGoal}
                </div>
                <div className={classes.grayNumbers}>{props.data.maxGoal}</div>
              </div>
              <div className={classes.target}>{props.data.vs}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsBox;
