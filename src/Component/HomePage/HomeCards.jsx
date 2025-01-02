import React, { useRef } from "react";
import { Link } from "react-router-dom";

export const HomeCards = ({ title, data }) => {
  const scrollRef = useRef(null);
  console.log("data :", data);

  // Scroll handler functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <>
      <div
        className="ms-3 me-3"
        style={{ background: "#F8FAFC", position: "relative" }}
      >
        <div className="h4 mb-3 mt-3 text-center">{title}</div>
        <div className="position-relative">
          {/* Left Arrow */}
          <button
            className="btn rounded-0 position-absolute"
            style={{
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              opacity: 0.8,
              zIndex: 1,
              background: "#D8D2C2",
              height: "60px",
            }}
            onClick={scrollLeft}
          >
            &#8592; {/* Left arrow icon */}
          </button>

          {/* Cards Wrapper */}
          <div
            className="d-flex gap-4 mb-3 ms-4 p-2"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              scrollBehavior: "smooth",
            }}
            ref={scrollRef}
          >
            {data.map((item, index) => (
              <div key={index} style={{ display: "inline-block" }}>
                <Link
                  to="/mobile-section"
                  className="card border-0 rounded-0 mt-2 mx-2 mb-3 mt-1"
                  style={{ width: 190, flexShrink: 0, textDecoration: "none" }}
                >
                  <div
                    className="card border-0 rounded-0 text-center p-3"
                    style={{ width: 190 }}
                  >
                    <div className="card-img-top">
                      <img src={item.brand_img.preview} width={160} alt="" />
                    </div>
                    <div className="card-title mt-3 mb-0 p-0 h6">
                      {item.brand_name}
                    </div>
                    <div className="card-text m-0 p-0 fw-bold">
                      {item.starting_from}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="btn rounded-0 position-absolute"
            style={{
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              opacity: 0.9,
              zIndex: 1,
              background: "#D8D2C2",
              height: "60px",
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
