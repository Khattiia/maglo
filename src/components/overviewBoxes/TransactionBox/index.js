import classes from "./TransactionBox.module.css";
import GameIcon from "../../../assets/Img/SVG/GamePad.svg";
import ShoppingIcon from "../../../assets/Img/SVG/ShoppingIcon.svg";
import FoodIcon from "../../../assets/Img/SVG/FoodIcon.svg";
import TransportIcon from "../../../assets/Img/SVG/TransportIcon.svg";

const TransactionBox = (props) => {
  return (
    <div>
      <div className={classes.grayName}>Recent Transaction</div>
      <div className={classes.transitionbox}>
        <div className={classes.menutab}>
          <div> All </div>
          <div className={classes.menutext}>Revenue</div>
          <div className={classes.menutext}>Expenses</div>
        </div>
        <div className={classes.transactions}>
          <div className={classes.transaction}>
            <img src={GameIcon} alt="game" />
            <div className={classes.transdescription}>
              <div className={classes.tranblacknam}>{props.data.gadgetGTR}</div>
              <div className={classes.trangraynam}>{props.data.gadget}</div>
            </div>
            <div className={classes.tranright}>
              <div className={classes.tranprice}>{props.data.gadgetPrice}</div>
              <div className={classes.trandate}>{props.data.date}</div>
            </div>
          </div>
          <div className={classes.transaction}>
            <img src={ShoppingIcon} alt="shopping" />
            <div className={classes.transdescription}>
              <div className={classes.tranblacknam}>
                {props.data.gadgetPolo}
              </div>
              <div className={classes.trangraynam}>{props.data.gadget}</div>
            </div>
            <div className={classes.tranright}>
              <div className={classes.tranprice}>{props.data.poloPrice}</div>
              <div className={classes.trandate}>{props.data.date}</div>
            </div>
          </div>
          <div className={classes.transaction}>
            <img src={FoodIcon} alt="food" />
            <div className={classes.transdescription}>
              <div className={classes.tranblacknam}>{props.data.foodWendy}</div>
              <div className={classes.trangraynam}>{props.data.food}</div>
            </div>
            <div className={classes.tranright}>
              <div className={classes.tranprice}>{props.data.foodPrice}</div>
              <div className={classes.trandate}>{props.data.date}</div>
            </div>
          </div>
          <div className={classes.transaction}>
            <img src={TransportIcon} alt="transport" />
            <div className={classes.transdescription}>
              <div className={classes.tranblacknam}>{props.data.uberTaxi}</div>
              <div className={classes.trangraynam}>{props.data.uber}</div>
            </div>
            <div className={classes.tranright}>
              <div className={classes.tranprice}>{props.data.uberPrice}</div>
              <div className={classes.trandate}>{props.data.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionBox;
