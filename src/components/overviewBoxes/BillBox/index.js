import classes from "./BillBox.module.css";
import FigmaLogo from "../../../assets/Img/SVG/FigmaLogo.svg";
import AdobeLogo from "../../../assets/Img/SVG/AdobeLogo.svg";

const BillBox = (props) => {
  return (
    <div>
      <div className={classes.grayName}>Upcomming Bill</div>
      <div className={classes.BillBox}>
        <div className={classes.billFirst}>
          <div className={classes.billDate}>
            <div>May</div>
            <div>15</div>
          </div>
          <div className={classes.description}>
            <img alt="figma" src={FigmaLogo} />
            <div>{props.data.figma}</div>
            <div className={classes.targetGray}>{props.data.figmaCharge}</div>
          </div>
          <div className={classes.price}>{props.data.figmaAmount}</div>
        </div>
        <div className={classes.billSecond}>
          <div className={classes.billDate}>
            <div>Jun</div>
            <div>16</div>
          </div>
          <div className={classes.description}>
            <img alt="adobe" src={AdobeLogo} />
            <div>{props.data.adobe}</div>
            <div className={classes.targetGray}>{props.data.adobeCharge}</div>
          </div>
          <div className={classes.price}>{props.data.adobeAmount}</div>
        </div>
      </div>
    </div>
  );
};

export default BillBox;
