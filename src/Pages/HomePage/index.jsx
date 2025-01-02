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
      <HomeCards title="Mobile Phones" data={getBrandData("mobile_items")} />
      <HomeCards
        title="Mobile Phones"
        data={getBrandData("electronics_items")}
      />
      <HomeCards title="Mobile Phones" data={getBrandData("appliance_items")} />
      <HomeCards title="Mobile Phones" data={getBrandData("fashion_items")} />
      <HomeCards title="Mobile Phones" data={getBrandData("furniture_items")} />
      <HomeCards title="Mobile Phones" data={getBrandData("grocery_items")} />

      {/* <HomeCards title="Electronics" data={getBrandData("electronics_items")} /> */}
    </div>
  );
};