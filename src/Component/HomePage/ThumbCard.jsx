import React from "react";
import thumbimage from "/thumbimage.webp";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const ThumbCard = () => {
  return (
    <div className={styles.thumbContainer}>
      {/* Card 1 */}
      <Link to="/grocery">
        <div className={styles.thumbCard}>
          <img className={styles.thumbImage} src={thumbimage} alt="Grocery" />
          <h4 className={styles.thumbTitle}>Grocery</h4>
        </div>
      </Link>
      {/* Card 2 */}
      <Link to="mobile-phones">
        <div className={styles.thumbCard}>
          <img
            className={styles.thumbImage}
            src={thumbimage}
            alt="Mobile Phone"
          />
          <h4 className={styles.thumbTitle}>Mobile Phone</h4>
        </div>
      </Link>
      {/* Card 3 */}
      <Link to="electronics">
        <div className={styles.thumbCard}>
          <img
            className={styles.thumbImage}
            src={thumbimage}
            alt="Electronics"
          />
          <h4 className={styles.thumbTitle}>Electronics</h4>
        </div>
      </Link>
      {/* Card 4 */}
      <Link to="appliance">
        <div className={styles.thumbCard}>
          <img className={styles.thumbImage} src={thumbimage} alt="Appliance" />
          <h4 className={styles.thumbTitle}>Appliance</h4>
        </div>
      </Link>
      {/* Card 5 */}
      <Link to="furnitures">
        <div className={styles.thumbCard}>
          <img
            className={styles.thumbImage}
            src={thumbimage}
            alt="Furnitures"
          />
          <h4 className={styles.thumbTitle}>Furnitures</h4>
        </div>
      </Link>
      {/* Card 6 */}
      <Link to="fashion">
        <div className={styles.thumbCard}>
          <img className={styles.thumbImage} src={thumbimage} alt="Fashion" />
          <h4 className={styles.thumbTitle}>Fashion</h4>
        </div>
      </Link>
    </div>
  );
};
