import React from "react";
import MultiRowCarousel from "./MultiRowCarousel";

const MainPortfolio = () => {
  const images = [
    "/portfolio/1.jpg",
    "/portfolio/2.jpg",
    "/portfolio/3.jpg",
    "/portfolio/design1.jpg",
    "/portfolio/design2.jpg",
    "/portfolio/design3.jpg",
    "/portfolio/design4.jpg",
    "/portfolio/design5.jpeg",
    "/portfolio/design6.jpg",
    "/portfolio/design7.jpeg",
    "/portfolio/design8.jpg",
    "/portfolio/design9.jpg",
    "/portfolio/design10.jpg",
    "/portfolio/design11.jpg"
  ];

  return <MultiRowCarousel images={images} rows={3} />;
};

export default MainPortfolio;
