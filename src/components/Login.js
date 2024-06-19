import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// styles
import styles from "./Login.module.css";

// images
import loginImage from "../images/login_image.png";

// functions
import { validation } from "../helper/validation";
import { notify } from "../helper/toast";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [focused, setFocused] = useState({});

  useEffect(() => {
    setErrors(validation(userData, "login"));
  }, [userData, touched]);

  const changeHandler = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const touchHandler = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
    setFocused({
      username: false,
      password: false,
      [event.target.name]: true,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You login successfully!", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        username: true,
        password: true,
      });
      setFocused({
        username: false,
        password: false,
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
      <h1 className={styles.login}>Login</h1>
      <div className={styles.boxContainer}>
        <div className={styles.sideBox}>
          <div className={styles.formShape}></div>
          <img src={loginImage} alt="login_image" />
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={submitHandler}>
            <div
              className={
                errors.username && touched.username && !focused.username
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
              {errors.username && touched.username && !focused.username ? (
                <span className={styles.error}>{errors.username}</span>
              ) : undefined}
            </div>
            <div
              className={
                errors.password && touched.password && !focused.password
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
              {errors.password && touched.password && !focused.password ? (
                <span className={styles.error}>{errors.password}</span>
              ) : undefined}
            </div>
            <button type="submit" className={styles.loginBtn}>
              Login
            </button>
            <div className={styles.signupBtnContainer}>
              <Link to="/signup" className={styles.signupBtn}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Made with ❤️ by Arshia Alizadeh</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
