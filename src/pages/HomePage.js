import React from "react";
import "../Assets/css/home.css";
import Carousel from "../components/Carousel";

function HomePage() {
  return (
    <>
      <div className="fullscreen-container">
        <div className="fullscreen-content">
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default HomePage;
