import React, { useState } from "react";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { Form, Link, useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";
import Gmail from "../../../assets/Img/SVG/Gmail.svg";
import { signInWithGoogle } from "../../../helpers/auth/signInWithGoogle";
import { signUpHandler } from "../../../helpers/auth/SignUpHandler";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleEmail = (email) => {
    setEmail(email.target.value);
  };

  const handlePassoword = (password) => {
    setPassword(password.target.value);
  };

  const handleName = (name) => {
    setName(name.target.value);
  };

  const switchHandler = () => {
    navigate("/");
  };

  const signUpHandler1 = async (form) => {
    await signUpHandler(form, auth, email, password, name);
    navigate("/overview");
  };

  const signInWithGoogle1 = () => {
    signInWithGoogle(auth, provider);
    navigate("/overview");
  };

  return (
    <div>
      <div className={classes.auth}>
        <header className={classes.header}>
          FINE<div>bank</div>.IO
        </header>

        <header className={classes.createHeader}> Create an account</header>
        <Form method="post" onSubmit={signUpHandler1}>
          <div>
            <label className={classes.label}>Name</label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleName}
              required
              className={classes.input}
            ></input>
          </div>
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
          <div className={classes.continue}>
            By Contintuing, you agree to our{" "}
            <Link className={classes.terms}>terms of service.</Link>
          </div>
          <button className={classes.loginButton}> Sign up</button>
        </Form>
      </div>
      <div
        className={classes.line}
        style={{ display: "flex", alignItems: "center" }}
      >
        <div
          style={{
            flex: "0.5px",
            backgroundColor: "#4B5768",
            height: "1px",
            opacity: 0.25,
            justifyContent: "left",
          }}
        />

        <p style={{ margin: "0 10px" }}>or sign up with</p>

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
        <img alt="gmail" src={Gmail} className={classes.gmail}></img> Contintue
        with Google
      </button>
      <div className={classes.midGray}>
        Already have an account?
        <button onClick={switchHandler} className={classes.signinHere}>
          Sign in here
        </button>
      </div>
    </div>
  );
};

export default SignUp;
