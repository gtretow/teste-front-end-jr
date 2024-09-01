import React from "react";
import "./Banner.scss";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="text-box">
          <h1>Venha conhecer nossas </h1>
          <h1>promoções</h1>
          <h2>50% Off nos produtos </h2>
          <button className="banner-button"> ver produto </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
