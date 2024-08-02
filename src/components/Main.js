import React, { useEffect, useContext, useState, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

// styles
import styles from "./Main.module.css";

// contexts
import { UserContext } from "../contexts/UserContextProvider";
import { CartContext } from "../contexts/CartContextProvider";

// components
import Header from "./Main/Header";
import Products from "./Main/Products";
import Category from "./Main/Category";
import ContactUs from "./Main/ContactUs";
import AboutUs from "./Main/AboutUs";
import Cart from "./Main/Cart";
import Profile from "./Main/Profile";
import Footer from "./Main/Footer";

const Main = () => {
  const { setUser, setLoading } = useContext(UserContext);
  const { state, dispatch } = useContext(CartContext);

  const location = useLocation();
  const prevLocationRef = useRef(location.pathname);

  const [prevLocation, setPrevLocation] = useState(location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPrevLocation(prevLocationRef.current);
      prevLocationRef.current = location.pathname;
    };

    handleLocationChange();
  }, [location.pathname]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const db = getFirestore();
        const userDoc = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userDoc);

        if (userSnap.exists()) {
          setUser(userSnap.data());
          dispatch({ type: "FIREBASE", payload: userSnap.data().data });
        } else {
          console.log("No such document!");
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const saveStateToFirebase = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, {
          data: state,
        });
      }
    };

    saveStateToFirebase();
  }, [state]);

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
      <Header />
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="category" element={<Category />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="products" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
