import React from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <Link to="laptop" className={styles.laptop}></Link>
        <Link to="cellphone" className={styles.cellphone}></Link>
        <Link to="headphone" className={styles.headphone}></Link>
        <Link to="smartwatch" className={styles.smartWatch}></Link>
      </div>
    </div>
  );
};

export default Category;
