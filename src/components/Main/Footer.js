import React from "react";

// styles
import styles from "./Footer.module.css";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <button className={styles.btn}>
          <span className={styles.svgContainer}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={styles.svgIcon + " " + styles.svgIconInstagram}
            />
          </span>
          <span className={styles.bgInstagram}></span>
        </button>
        <button className={styles.btn}>
          <span className={styles.svgContainer}>
            <FontAwesomeIcon icon={faTelegram} className={styles.svgIcon} />
          </span>
          <span className={styles.bgTelegram}></span>
        </button>
        <button className={styles.btn}>
          <span className={styles.svgContainer}>
            <FontAwesomeIcon icon={faXTwitter} className={styles.svgIcon} />
          </span>
          <span className={styles.bgXTwitter}></span>
        </button>
      </div>
      <p className={styles.coperight}>
        Made with ❤️ by Arshia Alizadeh &#169; 2024
      </p>
    </footer>
  );
};

export default Footer;
