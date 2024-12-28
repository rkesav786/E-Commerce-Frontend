import React from "react";
import { ThumbCard } from "../../Component/HomePage/ThumbCard";
import { Carousel } from "../../Component/HomePage/Carousel";
import { HomeCards } from "../../Component/HomePage/HomeCards";

export const HomePage = () => {
  return (
    <>
      <div>
        <ThumbCard />
        <Carousel />
        <HomeCards title={"Mobile Phones"} />
        <HomeCards title={"Grocery"} />
        <HomeCards title={"Electronics"} />
        <HomeCards title={"Appliance"} />
        <HomeCards title={"Fashion"} />
      </div>
    </>
  );
};
