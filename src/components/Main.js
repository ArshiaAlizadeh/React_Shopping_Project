import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// styles
import styles from "./Main.module.css";

// components
import Header from "./Main/Header";
import Products from "./Main/Products";
import Category from "./Main/Category";
import ContactUs from "./Main/ContactUs";
import AboutUs from "./Main/AboutUs";
import Cart from "./Main/Cart";

const Main = () => {
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
        <Route path="*" element={<Navigate to="products" replace />} />
      </Routes>
    </div>
  );
};

export default Main;
