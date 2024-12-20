import React, { useRef } from "react";
import { Link } from "react-router-dom";

export const HomeCards = ({ title }) => {
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
      <div style={{ background: "#F8FAFC", position: "relative" }}>
        <div className="h4 mb-3 mt-3 text-center">{title}</div>
        <div className="position-relative">
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

          {/* Cards Wrapper */}
          <div
            className="d-flex gap-4 mb-3 ms-2"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              scrollBehavior: "smooth",
            }}
            ref={scrollRef}
          >
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={index} style={{ display: "inline-block" }}>
                <Link to="/mobile-phones">
                  <div className="card text-center p-3" style={{ width: 190 }}>
                    <div className="card-img-top">
                      <img src="/samsungs23ultra.webp" width={160} alt="" />
                    </div>
                    <div className="card-title mt-3 mb-0 p-0 h6">
                      Samsung Phones
                    </div>
                    <div className="card-text m-0 p-0 fw-bold">
                      Starting from ₹7999
                    </div>
                  </div>
                </Link>
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
      </div>
    </>
  );
};
