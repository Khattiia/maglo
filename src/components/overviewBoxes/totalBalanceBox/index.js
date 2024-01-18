import classes from "./totalBalance.module.css";
import MasterCard from "../../../assets/Img/SVG/Mastercard.png";
import ArrowUpRight from "../../../assets/Img/SVG/ArrowUpRight.svg";
import PreviousButton from "../../../assets/Img/SVG/PreviousButton.svg";
import Dots from "../../../assets/Img/SVG/Dots.svg";
import NextButton from "../../../assets/Img/SVG/PreviousButton.svg";

const TotalBalanceBox = (props) => {
  return (
    <div>
      <div className={classes.grayName}>Total Balance</div>
      <div className={classes.box}>
        <div className={classes.balance}>
          <div>{props.data.total}</div>
          <div>all accounts</div>
        </div>
        <div className={classes.cart}>
          <div className={classes.cartLeft}>
            <div>account type</div>
            <div className={classes.bigWhite}>{props.data.accountType}</div>
            <div>{props.data.cardNumber}</div>
          </div>
          <div className={classes.cartRight}>
            <img
              src={MasterCard}
              alt="mastercard"
              className={classes.mastercart}
            />
            <div className={classes.masterBalance}>
              <div className={classes.bigWhite}>{props.data.cardBalance}</div>
              <img src={ArrowUpRight} alt="arrowupright" />
            </div>
          </div>
        </div>
        <div className={classes.balanceFooter}>
          <div className={classes.previous}>
            <img src={PreviousButton} alt="previousButton" />
            previous
          </div>
          <div className={classes.dots}>
            <img src={Dots} alt="dots" />
            <img src={Dots} alt="dots" />
            <img src={Dots} alt="dots" />
          </div>
          <div className={classes.next}>
            Next
            <img
              className={classes.nextButton}
              src={NextButton}
              alt="nextButton"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBalanceBox;
