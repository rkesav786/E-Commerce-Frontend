import React, { useRef } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { CiStar } from "react-icons/ci";

export const MobileCard = ({ title, sectionbrandcollection }) => {
  const scrollRef = useRef(null);

  // sectionbrandcollection.forEach((item) => {
  //   console.log("Image name:", item.image.name);
  //   console.log("Image preview:", item.image.preview);
  // });

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <>
      <div className="mb-2 mt-3 ms-2 lead fw-bold">{title}</div>
      <div className="position-relative border m-3">
        {/* Left Arrow */}
        <button
          className="btn btn-primary position-absolute"
          style={{
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            opacity: 0.5,
            zIndex: 1,
            background: "#D8D2C2",
            height: "60px",
          }}
          onClick={scrollLeft}
        >
          &#8592;
        </button>

        {/* Card Container */}
        <div
          className="d-flex overflow-hidden m-2  position-relative "
          ref={scrollRef}
        >
          {sectionbrandcollection.map((item, index) => (
            <Link
              to="/product-details"
              state={item} // Passing product details through state
              key={index}
              className={`card border-0 rounded-0 mt-2 mx-2 mb-3 mt-1 ${style.cataloguewrapcard}`}
              style={{
                width: 190,
                flexShrink: 0,
                textDecoration: "none",
                height: 340,
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: "250px", // Set a fixed height for the image container
                  overflow: "hidden", // Prevent large images from spilling out
                }}
              >
                <img
                  className="img-fluid p-3"
                  src={item.image.preview}
                  style={{
                    width: "auto", // Maintain aspect ratio
                    maxHeight: "90%", // Scale the image proportionally
                    maxWidth: "90%", // Prevent the image from overflowing
                  }}
                  alt="Card image"
                />
              </div>

              <div>
                <div
                  className="card-body rounded-0 border0 text-center position-absolute  p-3"
                  style={{ bottom: "0px" }}
                >
                  <h4 className={`card-title m-0 p-0 ${style.card_title}`}>
                    {item.name} {/* Access name from the item object */}
                  </h4>
                  <p className="m-0 p-0">
                    <span className="badge bg-success">
                      {item.tag} <CiStar />
                    </span>
                    <span className={`text-success ms-2 ${style.card_title}`}>
                      25 % off
                    </span>
                  </p>
                  <div className="m-0 p-0">
                    <p className={`m-0 p-0 fw-bold ${style.card_title}`}>
                      ₹ {item.offer_price} {/* Access offer_price */}
                      <del>
                        <span className="text-muted ms-2">
                          ₹ {item.price} {/* Access price */}
                        </span>
                      </del>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
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
            background: "#D8D2C2",
            height: "60px",
          }}
          onClick={scrollRight}
        >
          &#8594;
        </button>
      </div>
    </>
  );
};
