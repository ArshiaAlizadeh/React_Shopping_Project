import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// styles
import styles from "./SignUp.module.css";

// images
import signUpImage from "../images/signup_image.png";

// functions
import { validation } from "../helper/validation";
import { notify } from "../helper/toast";

const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validation(userData, "signup"));
  }, [userData, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setUserData({
        ...userData,
        [event.target.name]: event.target.checked,
      });
    } else {
      setUserData({
        ...userData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const touchHandler = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You sign up successfully!", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h1 className={styles.signup}>Sign Up</h1>
      <div className={styles.boxContainer}>
        <div className={styles.formContainer}>
          <form onSubmit={submitHandler}>
            <div
              className={
                errors.username && touched.username
                  ? styles.uncomplete
                  : styles.inputContainer
              }
            >
              <input
                type="text"
                placeholder="Username"
                name="username"
                autoComplete="off"
                value={userData.username}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              {errors.username && touched.username ? (
                <span className={styles.error}>{errors.username}</span>
              ) : undefined}
            </div>
            <div
              className={
                errors.email && touched.email
                  ? styles.uncomplete
                  : styles.inputContainer
              }
            >
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                autoComplete="off"
                value={userData.email}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              {errors.email && touched.email ? (
                <span className={styles.error}>{errors.email}</span>
              ) : undefined}
            </div>
            <div
              className={
                errors.password && touched.password
                  ? styles.uncomplete
                  : styles.inputContainer
              }
            >
              <input
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="off"
                value={userData.password}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              {errors.password && touched.password ? (
                <span className={styles.error}>{errors.password}</span>
              ) : undefined}
            </div>
            <div
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? styles.uncomplete
                  : styles.inputContainer
              }
            >
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                autoComplete="off"
                value={userData.confirmPassword}
                onChange={changeHandler}
                onFocus={touchHandler}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <span className={styles.error}>{errors.confirmPassword}</span>
              ) : undefined}
            </div>
            <div className={styles.checkboxContainer}>
              <div className={styles.checkboxField}>
                <label htmlFor="isAccepted">
                  I accept terms of privacy policy
                </label>
                <input
                  type="checkbox"
                  name="isAccepted"
                  id="isAccepted"
                  autoComplete="off"
                  value={userData.isAccepted}
                  onChange={changeHandler}
                  onClick={touchHandler}
                />
              </div>
              {errors.isAccepted && touched.isAccepted ? (
                <span className={styles.error}>{errors.isAccepted}</span>
              ) : undefined}
            </div>
            <button type="submit" className={styles.signupBtn}>
              Sign Up
            </button>
            <div className={styles.loginBtnContainer}>
              <Link to="/login" className={styles.loginBtn}>
                Login
              </Link>
            </div>
          </form>
        </div>
        <div className={styles.sideBox}>
          <div className={styles.formShape}></div>
          <img src={signUpImage} alt="signup_image" />
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Made with ❤️ by Arshia Alizadeh</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
