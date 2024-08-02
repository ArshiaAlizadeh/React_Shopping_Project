import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// styles
import styles from "./SignUp.module.css";

// images
import signUpImage from "../../images/signup_image.png";

// functions
import { validation } from "../../helper/validation";
import { notify } from "../../helper/toast";

// context
import { UserContext } from "../../contexts/UserContextProvider";

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
  const [focused, setFocused] = useState({});

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

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
    setFocused({
      username: false,
      email: false,
      password: false,
      confirmPassword: false,
      [event.target.name]: true,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          username: userData.username,
          email: userData.email,
          password: userData.password,
        });
        setUser({
          uid: user.uid,
          username: userData.username,
          email: userData.email,
          password: userData.password,
        });
        notify("You sign up successfully!", "success");
        navigate("/main");
      } catch (error) {
        notify("Error signing up!", "error");
        console.error("Error signing up:", error);
      }
    } else {
      notify("Invalid data!", "error");
      setTouched({
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      setFocused({
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
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
                errors.email && touched.email && !focused.email
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
              {errors.email && touched.email && !focused.email ? (
                <span className={styles.error}>{errors.email}</span>
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
            <div
              className={
                errors.confirmPassword &&
                touched.confirmPassword &&
                !focused.confirmPassword
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
              {errors.confirmPassword &&
              touched.confirmPassword &&
              !focused.confirmPassword ? (
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
