import React, { useRef } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { CiStar } from "react-icons/ci";

export const MobileCard = ({ title, productDetailsProps }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const productDetails = productDetailsProps || {
    name: "Samsung S23 Ultra Max",
    description: "(Titanium Yellow, 256GB)",
    rating: 4.5,
    price: 125000,
    originalPrice: 149000,
    imageUrl: "/samsungs23ultra.webp",
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
          &#8592;
        </button>

        {/* Card Container */}
        <div className="d-flex overflow-hidden" ref={scrollRef}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Link
              to="/product-details"
              state={productDetailsProps ? productDetailsProps : productDetails} // Passing product details through state
              key={index}
              className="card border-0 mx-2 mb-3 mt-1"
              style={{ width: 190, flexShrink: 0, textDecoration: "none" }}
            >
              <img
                className="card-img-top p-3"
                src={productDetails.imageUrl}
                alt="Card image"
              />
              <div className="card-body text-center m-0 p-0">
                <h4 className={`card-title m-0 p-0 ${style.card_title}`}>
                  {productDetails.name}
                </h4>
                <p className={`card-text m-0 p-0 ${style.card_title}`}>
                  {productDetails.description}
                </p>
                <p className="m-0 p-0">
                  <span className="badge bg-success">
                    {productDetails.rating} <CiStar />
                  </span>
                  <span className={`text-success ms-2 ${style.card_title}`}>
                    25 % off
                  </span>
                </p>
                <div className="m-0 p-0">
                  <p className={`m-0 p-0 fw-bold ${style.card_title}`}>
                    ₹ {productDetails.price}
                    <del>
                      <span className="text-muted ms-2">
                        ₹ {productDetails.originalPrice}
                      </span>
                    </del>
                  </p>
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
          }}
          onClick={scrollRight}
        >
          &#8594;
        </button>
      </div>
    </>
  );
};