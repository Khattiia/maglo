import React from "react";
import classes from "./ForgotPassword.module.css";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const formHandler = (form) => {
    form.preventDefault();
  };

  const navigate = useNavigate();

  const backToLogin = () => {
    navigate("/");
  };
  return (
    <div className={classes.auth}>
      <header className={classes.header}>
        FINE<div>bank</div>.IO
      </header>
      <div className={classes.forgot}> Forgot Password? </div>
      <div className={classes.smallgray}>
        Enter your email address to get the password reset link.
      </div>
      <Form className={classes.form}>
        <label className={classes.label}>Email Address</label>
        <input className={classes.input} />
        <button className={classes.button}>Password Reset</button>
      </Form>

      <div className={classes.smallgray} onClick={backToLogin}>
        Back to login
      </div>
    </div>
  );
};

export default ForgotPassword;
