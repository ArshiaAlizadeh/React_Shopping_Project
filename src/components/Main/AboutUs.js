import React from "react";

// styles
import styles from "./AboutUs.module.css";

// image
import aboutUsImage from "../../images/Arshia_about_us_image.jpg";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h4 className={styles.infoTitle}>Introduction</h4>
            <p className={styles.infoText}>
              Hello! I’m Arshia Alizadeh, a Computer Engineering student. Born
              on August 18, 2002, in Tehran, I have been passionate about
              technology and electronics from a young age. This passion led me
              to pursue a degree in Computer Engineering and eventually to
              develop my personal project.
            </p>
          </div>
          <div className={styles.info}>
            <h4 className={styles.infoTitle}>About Arshia Tech</h4>
            <p className={styles.infoText}>
              Arshia Tech is an online store specializing in electronic devices,
              including smartphones, laptops, tablets, headphones, and
              smartwatches. My goal with Arshia Tech is to provide a reliable
              and user-friendly platform for purchasing high-quality products at
              competitive prices.
            </p>
          </div>
          <div className={styles.info}>
            <h4 className={styles.infoTitle}>Mission and Values</h4>
            <p className={styles.infoText}>
              At Arshia Tech, our mission is to deliver the best online shopping
              experience for our customers. We are committed to values such as
              integrity, quality, and customer satisfaction. We continually
              strive to meet our customers' needs and expectations by offering a
              diverse range of products and customer-centric services.
            </p>
          </div>
          <div className={styles.info}>
            <h4 className={styles.infoTitle}>Vision</h4>
            <p className={styles.infoText}>
              Our vision is for Arshia Tech to become one of the leading and
              most reputable online electronics stores in Iran. Through ongoing
              efforts to enhance our services and expand our product offerings,
              we aim to be by your side and bring you the best in technology.
            </p>
          </div>
        </div>
        <div className={styles.photoContainer}>
          <div className={styles.photoDiv}>
            <img src={aboutUsImage} className={styles.photo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
