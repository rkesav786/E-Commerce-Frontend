import React from "react";
import { CiStar } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import style from "./style.module.css";

export const ProductDetails = () => {
  const location = useLocation();
  const { state } = location;
  const catalogue = state;

  const calculateDiscount = () => {
    const price = parseFloat(
      catalogue?.price?.toString().replace(/[^\d.]/g, "")
    );
    const offerPrice = parseFloat(
      catalogue?.offer_price?.toString().replace(/[^\d.]/g, "")
    );
    return price && offerPrice
      ? Math.round(((price - offerPrice) / price) * 100)
      : 0;
  };

  return (
    <div className="container">
      <div className={`row ${style.details_container}`}>
        {/* Image Section */}
        {catalogue?.image?.preview && (
          <div className="col-12 col-md-5">
            <div className="m-3 p-3 border img-fluid">
              <img
                src={catalogue.image.preview}
                alt={catalogue.name || "Product"}
                className="img-fluid w-100"
              />
            </div>
          </div>
        )}

        {/* Product Info Section */}
        <div className="col-12 col-md-7">
          {catalogue?.name && (
            <p className="mt-3 blockquote h4">{catalogue.name}</p>
          )}

          {/* Badge and Discount */}
          {(catalogue?.tag || calculateDiscount() > 0) && (
            <p>
              {catalogue?.tag && (
                <span className="badge bg-success">
                  {catalogue.tag} <CiStar />
                </span>
              )}
              {calculateDiscount() > 0 && (
                <span className={`text-success ms-2`}>
                  {calculateDiscount()}% off
                </span>
              )}
            </p>
          )}

          {/* Price Section */}
          {catalogue?.offer_price && (
            <p className={`mb-2 p-0 fw-bold h4`}>
              ₹ {catalogue.offer_price}
              {catalogue?.price && (
                <del>
                  <span className="text-muted ms-2">₹ {catalogue.price}</span>
                </del>
              )}
            </p>
          )}

          {/* Offers Section */}
          {catalogue?.offer_texts?.length > 0 && (
            <>
              <p>Available offers</p>
              <u className="text-decoration-none">
                <ul>
                  {catalogue.offer_texts.map((item, index) => (
                    <li key={index}>{item.offer_text}</li>
                  ))}
                </ul>
              </u>
            </>
          )}

          {/* Highlights Section */}
          {catalogue?.highlight_texts?.length > 0 && (
            <div className="row mt-4">
              <div className="col-3">
                <p className="text-muted">Highlights</p>
              </div>
              <div className="col-7">
                <ul>
                  {catalogue.highlight_texts.map((item, index) => (
                    <li key={index}>{item.highlight_text}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Specifications Section */}
          <div className="mt-3">
            <h2>Specifications</h2>
            <table className="table table-striped table-bordered">
              <tbody>
                {catalogue?.model_number && (
                  <tr>
                    <th>Model Number</th>
                    <td>{catalogue.model_number}</td>
                  </tr>
                )}
                {catalogue?.model_name && (
                  <tr>
                    <th>Model Name</th>
                    <td>{catalogue.model_name}</td>
                  </tr>
                )}
                {catalogue?.product_color && (
                  <tr>
                    <th>Color</th>
                    <td>{catalogue.product_color}</td>
                  </tr>
                )}
                {catalogue?.sim_type && (
                  <tr>
                    <th>SIM Type</th>
                    <td>{catalogue.sim_type}</td>
                  </tr>
                )}
                {catalogue?.hybrid_sim_slot && (
                  <tr>
                    <th>Hybrid Sim Slot</th>
                    <td>{catalogue.hybrid_sim_slot}</td>
                  </tr>
                )}
                {catalogue?.quick_charging && (
                  <tr>
                    <th>Quick Charging</th>
                    <td>{catalogue.quick_charging}</td>
                  </tr>
                )}
                {catalogue?.sar_value && (
                  <tr>
                    <th>SAR Value</th>
                    <td>{catalogue.sar_value}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
