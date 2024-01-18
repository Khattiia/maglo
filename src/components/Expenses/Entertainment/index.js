import MovieIcon from "../../../assets/Img/SVG/MovieIcon.svg";
import DownArrow from "../../../assets/Img/SVG/DownArrow.svg";
import classes from "../housing/housing.module.css";

const EntertainmentBox = () => {
  return (
    <div className={classes.box}>
      <header className={classes.header}>
        <img alt="MovieIcon" src={MovieIcon} className={classes.houseImg} />
        <div className={classes.housing}>
          <div>Entertainment</div>
          <div>$80.00</div>
        </div>
        <div className={classes.compare}>
          <div className={classes.flex}>
            15% <img src={DownArrow} alt="decrease" />
          </div>
          <div>Compare to last month</div>
        </div>
      </header>
      <div className={classes.section}>
        <div className={classes.smallGrayName}>Movie Ticket</div>
        <div className={classes.datePrice}>
          <div>$30.00</div>
          <div>17 may 2023 </div>
        </div>
      </div>
      <div className={classes.secondSection}>
        <div className={classes.smallGrayName}>iTunes</div>
        <div className={classes.datePrice}>
          <div>$50.00</div>
          <div>17 may 2023 </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentBox;
