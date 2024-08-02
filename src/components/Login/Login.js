import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

// react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// styles
import styles from "./Login.module.css";

// images
import loginImage from "../../images/login_image.png";

// functions
import { validation } from "../../helper/validation";
import { notify } from "../../helper/toast";

// contexts
import { CartContext } from "../../contexts/CartContextProvider";
import { UserContext } from "../../contexts/UserContextProvider";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [focused, setFocused] = useState({});

  const { dispatch } = useContext(CartContext);
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

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
      email: false,
      password: false,
      [event.target.name]: true,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
        const user = userCredential.user;

        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          setUser(data);
          dispatch({ type: "FIREBASE", payload: userDoc.data().data });
          notify("You login successfully!", "success");
          navigate("/main");
        } else {
          notify("User does not exist!", "error");
        }
      } catch (error) {
        notify("Error logging in!", "error");
        console.error("Error logging in:", error);
      }
    } else {
      notify("Invalid data!", "error");
      setTouched({
        email: true,
        password: true,
      });
      setFocused({
        email: false,
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
                errors.email && touched.email && !focused.email
                  ? styles.uncomplete
                  : styles.inputContainer
              }
            >
              <input
                type="email"
                placeholder="E-Mail"
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
