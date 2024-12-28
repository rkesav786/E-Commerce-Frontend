import React from "react";
import { MobileCard } from "../MobileSection/MobileCard";
export const ElectronicsSection = () => {
  const productDetailsProps = {
    name: "NeckBand",
    description:
      "(Finish Color - American Espresso, Delivery Condition - Knock Down)",
    rating: 4.4,
    price: 999,
    originalPrice: 1280,
    imageUrl: "/headphones.webp",
  };
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <div
            className="m-4 card rounded-0 "
            style={{ width: "90%", height: "97%" }}
          >
            <h3 className="text-center mt-1 ">Filters</h3>
            <hr />
            <div className="filter-container mt-1">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      CATEGORIES
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul className="list-unstyled">
                        <li className="p-2">Home Furnishing</li>
                        <li className="p-2">Bed</li>
                        <li className="p-2">Sofa</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      PRICE
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul className="list-unstyled">
                        <li className="p-2">1000 above</li>
                        <li className="p-2">5000 above</li>
                        <li className="p-2">10000 above</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      CUSTOMER RATINGS
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rating4"
                        />
                        <label className="form-check-label" htmlFor="rating4">
                          4* & above
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rating3"
                        />
                        <label className="form-check-label" htmlFor="rating3">
                          3* & above
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rating2"
                        />
                        <label className="form-check-label" htmlFor="rating2">
                          2* & above
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      COLOR
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul className="list-unstyled">
                        <li className="p-2">Blue</li>
                        <li className="p-2">Red</li>
                        <li className="p-2">Gray</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      DISCOUNT
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="discount50"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="discount50"
                        >
                          50% & above.
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="discount60"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="discount60"
                        >
                          60% & above
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="discount70"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="discount70"
                        >
                          70% & above
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <MobileCard
            title={"Best Of Deal Furniture"}
            productDetailsProps={productDetailsProps}
          />
          <MobileCard />
          <MobileCard />
          <div className="mb-3">
            <MobileCard />
          </div>
        </div>
      </div>
    </div>
  );
};
