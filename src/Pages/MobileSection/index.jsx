import React, { useEffect, useState } from "react";
import { MobileCard } from "./MobileCard";
import axios from "axios";

export const MobileSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/frontend/mobile-section"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  // Filter data for each brand
  const getBrandData = (brand) => {
    return items.find((item) => item.section_name === brand)?.items || [];
  };

  return (
    <div className="w-100">
      <div className="row">
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
      {/* Pass filtered data as props */}
      <div>
        <MobileCard
          title={"Samsung"}
          sectionbrandcollection={getBrandData("Samsung")}
        />
      </div>
      <div>
        <MobileCard
          title={"i Phone"}
          sectionbrandcollection={getBrandData("iphone")}
        />
      </div>
      <div>
        <MobileCard
          title={"Google Pixel"}
          sectionbrandcollection={getBrandData("Google Pixel")}
        />
      </div>
      <div>
        <MobileCard
          title={"Oneplus Mobiles"}
          sectionbrandcollection={getBrandData("Oneplus Mobiles")}
        />
      </div>
      <div>
        <MobileCard
          title={"Redmi Mobiles"}
          sectionbrandcollection={getBrandData("Redmi Mobiles")}
        />
      </div>
      <div>
        <MobileCard
          title={"Oppo Mobiles"}
          sectionbrandcollection={getBrandData("Oppo Mobiles")}
        />
      </div>
    </div>
  );
};
