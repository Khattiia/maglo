import classes from "./housing.module.css";
import housing from "../../../assets/Img/SVG/Housing.svg";
import upArrow from "../../../assets/Img/SVG/RedUpArrow.svg";

const Housing = () => {
  return (
    <div className={classes.box}>
      <header className={classes.header}>
        <img alt="housing" src={housing} className={classes.houseImg} />
        <div className={classes.housing}>
          <div>Housing</div>
          <div>$250.000</div>
        </div>
        <div className={classes.compare}>
          <div className={classes.flex}>
            15% <img src={upArrow} alt="increase" />
          </div>
          <div>Compare to last month</div>
        </div>
      </header>
      <div className={classes.section}>
        <div className={classes.smallGrayName}>House Rent</div>
        <div className={classes.datePrice}>
          <div>$230.00</div>
          <div>17 may 2023 </div>
        </div>
      </div>
      <div className={classes.secondSection}>
        <div className={classes.smallGrayName}>Parking</div>
        <div className={classes.datePrice}>
          <div>$20.00</div>
          <div>17 may 2023 </div>
        </div>
      </div>
    </div>
  );
};

export default Housing;
