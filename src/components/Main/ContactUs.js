import React from "react";

// styles
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.conactUsContainer}>
        <div className={styles.photo}></div>
        <div className={styles.fieldContainer}>
          <p className={styles.fieldTitle}>Full Name</p>
          <p className={styles.fiedlValue}>Arshia Alizadeh</p>
        </div>
        <div className={styles.fieldContainer}>
          <p className={styles.fieldTitle}>E-Mail</p>
          <p className={styles.fiedlValue}>arshiaalizadehhh@gmail.com</p>
        </div>
        <div className={styles.fieldContainer}>
          <p className={styles.fieldTitle}>Telegram Id</p>
          <p className={styles.fiedlValue}>@ArshiaAzh</p>
        </div>
        <div className={styles.fieldContainer}>
          <p className={styles.fieldTitle}>Phone Number</p>
          <p className={styles.fiedlValue}>+98-9357583856</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
