import React from "react";
import { CiStar } from "react-icons/ci";
import { useLocation } from "react-router-dom";

export const ProductDetails = () => {
  const location = useLocation();
  const { state } = location;
  const catalogue = state;

  const calculateDiscount = () => {
    const price = parseFloat(
      catalogue.price?.toString().replace(/[^\d.]/g, "")
    );
    const offerPrice = parseFloat(
      catalogue.offer_price?.toString().replace(/[^\d.]/g, "")
    );
    return price && offerPrice
      ? Math.round(((price - offerPrice) / price) * 100)
      : 0;
  };

  return (
    <>
      {/* <div>ProductDetails</div> */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="m-3 p-3 border img-fluid">
              <img src={catalogue.image.preview} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-7">
            <p className="mt-3  blockquote h4">{catalogue.name}</p>
            <p>
              <span className="badge bg-success ">
                {catalogue.tag} <CiStar />
              </span>
              <span className={`text-success ms-2`}>
                {calculateDiscount()} % off
              </span>
            </p>
            <p className={`mb-2 p-0 fw-bold h4`}>
              ₹ {catalogue.offer_price}
              <del>
                <span className="text-muted ms-2">₹ {catalogue.price}</span>
              </del>
            </p>
            <p>Available offers</p>
            <u className="text-decoration-none">
              <ul>
                {catalogue.offer_texts?.map((item, index) => (
                  <li key={index}>{item.offer_text}</li>
                ))}
              </ul>
            </u>

            <div className="row mt-4">
              <div className="col-3">
                <p className="text-muted"> Highlight</p>
              </div>
              <div className="col-7">
                <ul>
                  {catalogue.highlight_texts.map((item, index) => (
                    <li key={index}>{item.highlight_text}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div class=" mt-3">
              <h2>Specifications</h2>
              <table class="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <th>General</th>
                    <td>
                      Handset, Type-C Data Cable, Travel Adapter (To Be
                      Purchased Separately), Quick Start Guide, SIM Ejection Pin
                    </td>
                  </tr>
                  <tr>
                    <th>Model Number</th>
                    <td>{catalogue.model_number}</td>
                  </tr>
                  <tr>
                    <th>Model Name</th>
                    <td>{catalogue.model_name}</td>
                  </tr>
                  <tr>
                    <th>Color</th>
                    <td>{catalogue.product_color}</td>
                  </tr>
                  <tr>
                    <th>Browse Type</th>
                    <td>Smartphones</td>
                  </tr>
                  <tr>
                    <th>SIM Type</th>
                    <td>{catalogue.sim_type}</td>
                  </tr>
                  <tr>
                    <th>Hybrid Sim Slot</th>
                    <td>{catalogue.hybrid_sim_slot}</td>
                  </tr>
                  <tr>
                    <th>Touchscreen</th>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th>OTG Compatible</th>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th>Quick Charging</th>
                    <td>{catalogue.quick_charging}</td>
                  </tr>
                  <tr>
                    <th>SAR Value</th>
                    <td>{catalogue.sar_value}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
