import React from "react";
import "./Banner.scss";

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="text-box">
          <h1>Venha conhecer nossas </h1>
          <h1>promoções</h1>
          <h2>50% Off nos produtos </h2>
          <button
            className="banner-button"
            aria-label="Ver produtos em promoção"
          >
            Ver produto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
