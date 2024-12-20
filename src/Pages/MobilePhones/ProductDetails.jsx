import React from "react";
import { CiStar } from "react-icons/ci";

export const ProductDetails = () => {
  return (
    <>
      <div>ProductDetails</div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="m-3 p-3 border img-fluid">
              <img src="/samsungs23ultra.webp" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-7">
            <p className="mt-3  blockquote h4">
              SAMSUNG Galaxy S24 Ultra 5G (Titanium Black, 256 GB) (12 GB RAM)
            </p>
            <p>
              <span className="badge bg-success ">
                4.5 <CiStar />
              </span>
              <span className={`text-success ms-2`}>25 % off</span>
            </p>
            <p className={`mb-2 p-0 fw-bold h4`}>
              ₹ 1,25,000
              <del>
                <span className="text-muted ms-2">₹ 1,49,000</span>
              </del>
            </p>
            <p>Available offers</p>
            <u className="text-decoration-none">
              <li>
                Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
                CardT&C
              </li>
              <li>
                Bank OfferFlat ₹450 off on HDFC Bank Credit Card EMI Txns on 3
                months tenure, Min. Txn Value: ₹5000T&C
              </li>
              <li>
                Bank OfferFlat ₹675 off on HDFC Bank Pixel Credit Card EMI on 3
                months tenure, Min. Txn Value: ₹7,500T&C
              </li>
              <li>
                Special PriceGet extra ₹35161 off (price inclusive of
                cashback/coupon)T&C
              </li>
            </u>
            <div className="row mt-4">
              <div className="col-3">
                <p className="text-muted"> Highlight</p>
              </div>
              <div className="col-7">
                <ul>
                  <li>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</li>
                  <li>16.76 cm (6.6 inch) Full HD+ Display</li>
                  <li>50MP + 2MP + 2MP | 13MP Front Camera</li>
                  <li>5000 mAh Lithium Ion Battery</li>
                  <li>Exynos 1330 Processor</li>
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
                    <td>SM-A146BDRHINS</td>
                  </tr>
                  <tr>
                    <th>Model Name</th>
                    <td>Galaxy A14 5G</td>
                  </tr>
                  <tr>
                    <th>Color</th>
                    <td>Dark Red</td>
                  </tr>
                  <tr>
                    <th>Browse Type</th>
                    <td>Smartphones</td>
                  </tr>
                  <tr>
                    <th>SIM Type</th>
                    <td>Dual Sim</td>
                  </tr>
                  <tr>
                    <th>Hybrid Sim Slot</th>
                    <td>Yes</td>
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
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th>SAR Value</th>
                    <td>0.442W/Kg</td>
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
