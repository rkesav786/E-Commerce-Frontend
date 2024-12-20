import React, { useRef } from "react";
import style from "./style.module.css";
import { CiStar } from "react-icons/ci";

export const MobileCard = ({ title }) => {
  const scrollRef = useRef(null);

  // Scroll handler functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <>
      <div className="mb-2 mt-3 ms-2 lead fw-bold">{title}</div>
      <div className="position-relative border">
        {/* Left Arrow */}
        <button
          className="btn btn-primary position-absolute"
          style={{
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            opacity: 0.5,
            zIndex: 1,
          }}
          onClick={scrollLeft}
        >
          &#8592; {/* Left arrow icon */}
        </button>

        {/* Card Container */}
        <div
          className="d-flex overflow-hidden"
          style={{ scrollBehavior: "smooth" }}
          ref={scrollRef}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="card border-0 mx-2 mb-3 mt-1"
              style={{ width: 190, flexShrink: 0 }}
            >
              <img
                className="card-img-top p-3"
                src="/samsungs23ultra.webp"
                alt="Card image"
              />
              <div className="card-body text-center m-0 p-0">
                <h4 className={`card-title m-0 p-0 ${style.card_title}`}>
                  Samsung S23 Ultra Max
                </h4>
                <p className={`card-text m-0 p-0 ${style.card_title}`}>
                  ( Titanium Yellow, 265GP )
                </p>
                <p className="m-0 p-0">
                  <span className="badge bg-success">
                    4.5 <CiStar />
                  </span>
                  <span className={`text-success ms-2 ${style.card_title}`}>
                    25 % off
                  </span>
                </p>
                <div className="m-0 p-0">
                  <p className={`m-0 p-0 fw-bold ${style.card_title}`}>
                    ₹ 1,25,000
                    <del>
                      <span className="text-muted ms-2">₹ 1,49,000</span>
                    </del>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="btn btn-primary position-absolute"
          style={{
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            opacity: 0.5,
            zIndex: 1,
          }}
          onClick={scrollRight}
        >
          &#8594; {/* Right arrow icon */}
        </button>
      </div>
    </>
  );
};
