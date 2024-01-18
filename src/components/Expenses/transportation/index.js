import DownArrow from "../../../assets/Img/SVG/DownArrow.svg";
import classes from "../housing/housing.module.css";
import transportationIcon from "../../../assets/Img/SVG/TransportIcon.svg";

const TransportationBox = () => {
  return (
    <div className={classes.box}>
      <header className={classes.header}>
        <img
          alt="transportation"
          src={transportationIcon}
          className={classes.houseImg}
        />
        <div className={classes.housing}>
          <div>transportation</div>
          <div>$50.000</div>
        </div>
        <div className={classes.compare}>
          <div className={classes.flex}>
            12% <img src={DownArrow} alt="decrease" />
          </div>
          <div>Compare to last month</div>
        </div>
      </header>
      <div className={classes.section}>
        <div className={classes.smallGrayName}>Taxi fare</div>
        <div className={classes.datePrice}>
          <div>$30.00</div>
          <div>17 may 2023 </div>
        </div>
      </div>
      <div className={classes.secondSection}>
        <div className={classes.smallGrayName}>Metro Card bill</div>
        <div className={classes.datePrice}>
          <div>$20.00</div>
          <div>17 may 2023 </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationBox;
