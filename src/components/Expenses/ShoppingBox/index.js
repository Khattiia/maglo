import upArrow from "../../../assets/Img/SVG/RedUpArrow.svg";
import classes from "../housing/housing.module.css";
import ShoppingIcon from "../../../assets/Img/SVG/ShoppingIcon.svg";

const Shopping = () => {
  return (
    <div className={classes.box}>
      <header className={classes.header}>
        <img
          alt="ShoppingIcon"
          src={ShoppingIcon}
          className={classes.houseImg}
        />
        <div className={classes.housing}>
          <div>Shopping</div>
          <div>$420.00</div>
        </div>
        <div className={classes.compare}>
          <div className={classes.flex}>
            25% <img src={upArrow} alt="increase" />
          </div>
          <div>Compare to last month</div>
        </div>
      </header>
      <div className={classes.section}>
        <div className={classes.smallGrayName}>Shirt</div>
        <div className={classes.datePrice}>
          <div>$230.00</div>
          <div>17 may 2023 </div>
        </div>
      </div>
      <div className={classes.secondSection}>
        <div className={classes.smallGrayName}>Jeans</div>
        <div className={classes.datePrice}>
          <div>$190.00</div>
          <div>17 may 2023 </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
