import React, { useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { Form, useNavigate } from "react-router-dom";
import classes from "./Auth.module.css";
import Gmail from "../../assets/Img/SVG/Gmail.svg";
import Checkmark from "../../assets/Img/SVG/Checkmark.svg";
import { signInWithGoogle } from "../../helpers/auth/signInWithGoogle";
import { SignInHandler } from "../../helpers/auth/SignInHandler";
import classNames from "classnames";


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const auth = getAuth();


  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const optionClass = classNames({
    [classes.checkmark]: keepSignedIn,
    [classes.checkmarkClick]: !keepSignedIn,
  });

  const handleEmail = (email) => {
    setEmail(email.target.value);
  };

  const handlePassoword = (password) => {
    setPassword(password.target.value);
  };

  const createHandler = () => {
    navigate("/signup");
  };

  const keepSignedInHandler = () => {
    setKeepSignedIn(true);
  };

  const keepSignedInHandlerSwitch = () => {
    setKeepSignedIn(false);
  };

  const forgotPasswordHandler = () => {
    navigate("/forgotPassword");
  };

  const signInHandler = async (form) => {
     await SignInHandler(form, email, password, auth, ) ;
    navigate("/overview");
  };

  const signInWithGoogle1 = () => {
    signInWithGoogle(auth, provider);
    navigate("/overview");
  };

  return (
    <div className={classes.auth}>
      <header className={classes.header}>
        FINE<div>bank</div>.IO
      </header>

      <div>
        <Form method="post" onSubmit={signInHandler}>
          <div>
            <label className={classes.label}>Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleEmail}
              required
              className={classes.input}
            ></input>
          </div>
          <div>
            <div className={classes.passwordForgot}>
              <label className={classes.label}>Password</label>
              <div className={classes.forgot} onClick={forgotPasswordHandler}>
                Forgot Password?
              </div>
            </div>

            <input
              id="password"
              type="password"
              name="password"
              onChange={handlePassoword}
              required
              className={classes.input}
            ></input>
          </div>
          <div className={classes.option}>
            <img
              alt="option"
              src={Checkmark}
              className={optionClass}
              onClick={
                keepSignedIn ? keepSignedInHandlerSwitch : keepSignedInHandler
              }
            ></img>
            Keep me signed in
          </div>

          <button className={classes.loginButton}> Login</button>
        </Form>
        <div
          className={classes.midGray}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              flex: "0.5px",
              backgroundColor: "#4B5768",
              height: "1px",
              opacity: 0.25,
            }}
          />

          <p style={{ margin: "0 10px" }}>or sign in with</p>

          <div
            style={{
              flex: "0.5px",
              backgroundColor: "#4B5768",
              height: "1px",
              opacity: 0.25,
            }}
          />
        </div>
        <button className={classes.google} onClick={signInWithGoogle1}>
          <img alt="gmail" src={Gmail} className={classes.gmail}></img>{" "}
          Contintue with Google
        </button>

        <button className={classes.create} onClick={createHandler}>
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Auth;
