import React, { useEffect, useState } from "react";
import { ThumbCard } from "../../Component/HomePage/ThumbCard";
import { Carousel } from "../../Component/HomePage/Carousel";
import { HomeCards } from "../../Component/HomePage/HomeCards";
import axios from "axios";

export const HomePage = () => {
  const [items, setItems] = useState({}); // Initialize as an object since your data is structured as key-value pairs

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/frontend/home-page"
        );
        setItems(response.data);
        console.log("home-page :", response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  // Get data by brand
  const getBrandData = (brand) => {
    return items[brand] || []; // Safely return an empty array if the key is undefined
  };

  return (
    <>
      <div>
        <ThumbCard />
        <Carousel />
        <HomeCards
          title={"Mobile Phones"}
          data={getBrandData("mobile_items")} // Pass brand data correctly
        />
        {/* <HomeCards
          title={"Grocery"}
          data={getBrandData("grocery_items")}
        />
        <HomeCards
          title={"Electronics"}
          data={getBrandData("electronics_items")}
        />
        <HomeCards
          title={"Appliance"}
          data={getBrandData("appliance_items")}
        />
        <HomeCards
          title={"Fashion"}
          data={getBrandData("fashion_items")}
        /> */}
      </div>
    </>
  );
};
