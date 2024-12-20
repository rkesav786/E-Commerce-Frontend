import React from "react";
import carousel1 from "/carousel1.webp";
import carousel2 from "/carousel2.webp";
import carousel3 from "/carousel3.webp";
import styles from "./styles.module.css";

export const Carousel = () => {
  return (
    <div>
      {/* <!-- Carousel --> */}
      <div id="demo" className={`carousel slide `} data-bs-ride="carousel">
        {/* <!-- Indicators/dots --> */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carousel1}
              alt="Los Angeles"
              className={`d-block ${styles.carousel_container}`}
            />
          </div>
          <div className="carousel-item">
            <img
              src={carousel2}
              alt="Chicago"
              className={`d-block ${styles.carousel_container}`}
            />
          </div>
          <div className="carousel-item">
            <img
              src={carousel3}
              alt="New York"
              className={`d-block ${styles.carousel_container}`}
            />
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};
