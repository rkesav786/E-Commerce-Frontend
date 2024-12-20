import React from "react";
import { MobileCard } from "./MobileCard";

export const MobilePhones = () => {
  return (
    <div className="w-100">
      <div className="row">
        {/* <div className="col-12 mb-3">
          <img
            className="img-fluid w-100"
            src="/mobileimage1.webp"
            alt="mobileimage1"
          />
        </div> */}
        <div className="col-12 mb-1 mt-1">
          <img
            className="img-fluid w-100"
            src="/mobileimage2.webp"
            alt="mobileimage2"
          />
        </div>
        <div className="col-12 mb-1">
          <img
            className="img-fluid w-100"
            src="/mobileimage3.webp"
            alt="mobileimage3"
          />
        </div>
        {/* <div className="col-12 mb-3">
          <img
            className="img-fluid w-100"
            src="/mobileimage4.webp"
            alt="mobileimage4"
          />
        </div> */}
        <div className="col-12 mb-1">
          <img
            className="img-fluid w-100"
            src="/mobileimage5.webp"
            alt="mobileimage5"
          />
        </div>
        <div className="col-12 mb-1">
          <img
            className="img-fluid w-100"
            src="/mobileimage6.webp"
            alt="mobileimage6"
          />
        </div>
      </div>
      <div>
        <MobileCard title={"Samsung"} />
      </div>
      <div>
        <MobileCard title={"i Phone"} />
      </div>
      <div>
        <MobileCard title={"Redmi"} />
      </div>
      <div>
        <MobileCard title={"Vivo"} />
      </div>
      <div>
        <MobileCard title={"One Plus"} />
      </div>
    </div>
  );
};
