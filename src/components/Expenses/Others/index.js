import upArrow from "../../../assets/Img/SVG/RedUpArrow.svg";
import classes from "../housing/housing.module.css";
import OthersIcon from "../../../assets/Img/SVG/OthersIcon.svg";

const Others = () => {
  return (
    <div className={classes.box}>
      <header className={classes.header}>
        <img alt="others" src={OthersIcon} className={classes.houseImg} />
        <div className={classes.housing}>
          <div>Others</div>
          <div>$50.00</div>
        </div>
        <div className={classes.compare}>
          <div className={classes.flex}>
            23% <img src={upArrow} alt="increase" />
          </div>
          <div>Compare to last month</div>
        </div>
      </header>
      <div className={classes.section}>
        <div className={classes.smallGrayName}>Donation</div>
        <div className={classes.datePrice}>
          <div>$30.00</div>
          <div>17 may 2023 </div>
        </div>
      </div>
      <div className={classes.secondSection}>
        <div className={classes.smallGrayName}>Gift</div>
        <div className={classes.datePrice}>
          <div>$20.00</div>
          <div>17 may 2023 </div>
        </div>
      </div>
    </div>
  );
};

export default Others;
