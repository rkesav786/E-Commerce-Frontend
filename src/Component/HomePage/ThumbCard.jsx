import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import style from "./styles.module.css";

export const ThumbCard = () => {
  const category = [
    { src: "grocery.webp", name: "Grocery", path: "grocery-section" },
    { src: "iphone_15.webp", name: "Mobiles", path: "mobile-section" },
    { src: "headphone.webp", name: "Electronics", path: "electronics-section" },
    {
      src: "electronicstvv.webp",
      name: "Home & Appliance",
      path: "appliance-section",
      width: "80",
    },
    { src: "demofurniture.webp", name: "Furniture", path: "furniture-section" },
    { src: "fashion.webp", name: "Fashion", path: "fashion-section" },
  ];

  return (
    <div className="ms-3 me-3" style={{ background: "white" }}>
      <div className="row m-2">
        {category.map((item, index) => (
          <div className="col-4 col-sm-2 text-center" key={index}>
            <Link
              to={`/${item.path}`} // Use the path dynamically
              className={`d-flex flex-column align-items-center h-100 ${style.catagory_item}`}
              style={{ textDecoration: "none", color: "inherit" }} // Optional: Preserve default styling
            >
              <div>
                <img
                  className="mt-2 img-fluid"
                  src={item.src}
                  alt={item.name}
                  width={item.width || 60}
                />
              </div>
              <div className="mt-auto">
                <p className="mt-1 fw-bold">{item.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
