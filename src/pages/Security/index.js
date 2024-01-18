import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./Security.module.css";
import Arrows from "../../assets/Img/SVG/Arrows.svg";
import NotificationIcon from "../../assets/Img/SVG/NotificationIcon.svg";
import SearchBar from "../../components/SearchBar/SearchBar";
import date from "date-and-time";
import SettingsHeader from "../../components/settingsComponent/settingsHeader";
import { Form } from "react-router-dom";
import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { useState } from "react";

const Security = () => {
  const now = new Date();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const formHandler = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      console.error("New password and confirm password do not match");
      return;
    }

    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const number = localStorage.getItem("phoneNumber");
      console.log(number);
      if (phoneNumber !== number) {
        return alert("Phone number is incorrect");
      }

      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, newPassword).then(() => {
        console.log("Password updated successfully!");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      });
    } catch (error) {
      console.error("Error updating password", error.message);
    }
  };

  return (
    <div className={classes.root}>
      <Sidebar />
      <header className={classes.header}>
        <img src={Arrows} alt="Arrows" className={classes.arrows} />
        <div className={classes.date}>{date.format(now, "MMM DD, YYYY")}</div>
        <div className={classes.search}>
          <img alt="notification" src={NotificationIcon} />
          <SearchBar />
        </div>
      </header>
      <div className={classes.box}>
        <SettingsHeader />
        <Form onSubmit={formHandler}>
          <div className={classes.leftSide}>
            <div className={classes.inputBox}>
              <div className={classes.inputs}>
                <div className={classes.description}>
                  Old Password
                  <input
                    type="password"
                    placeholder="********"
                    className={classes.input}
                    required
                  />
                </div>
                <div className={classes.description}>
                  New Password
                  <input
                    type="password"
                    placeholder="********"
                    className={classes.input}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div className={classes.description}>
                  Retype Password{" "}
                  <input
                    type="password"
                    placeholder="*******"
                    className={classes.input}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <div className={classes.description}>
                  Phone Number
                  <input
                    type="text"
                    placeholder="+995 --- --- ---"
                    className={classes.input}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button className={classes.button}>Update Password</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Security;
