import React, { useEffect, useState } from "react";
import { ThumbCard } from "../../Component/HomePage/ThumbCard";
import { Carousel } from "../../Component/HomePage/Carousel";
import { HomeCards } from "../../Component/HomePage/HomeCards";
import axios from "axios";

export const HomePage = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/frontend/home-page"
        );
        // Since HomePage.find() returns an array, we take the first document
        setItems(response.data[0] || null);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const getBrandData = (brandType) => {
    return items?.[brandType] || [];
  };

  return (
    <div>
      <ThumbCard />
      <Carousel />
      <HomeCards
        title="Mobile Phones"
        data={getBrandData("mobile_items")}
        path={"/mobile-section"}
      />
      <HomeCards
        title="Electronics Phones"
        data={getBrandData("electronics_items")}
        path={"/electronics-section"}
      />
      <HomeCards
        title="Appliance Phones"
        data={getBrandData("appliance_items")}
        path={"/appliance-section"}
      />
      <HomeCards
        title="Fashion Phones"
        data={getBrandData("fashion_items")}
        path={"/fashion-section"}
      />
      <HomeCards
        title="Furniture Phones"
        data={getBrandData("furniture_items")}
        path={"/furniture-section"}
      />
      <HomeCards
        title="Grocery Phones"
        data={getBrandData("grocery_items")}
        path={"/grocery-section"}
      />

      {/* <HomeCards title="Electronics" data={getBrandData("electronics_items")} /> */}
    </div>
  );
};