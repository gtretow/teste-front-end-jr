import React from "react";
import "./Banner.scss";
import Button from "../../../components/Button/Button";

const Banner: React.FC = () => {
  return (
      <section className="promotion-banner">
        <div className="promotion-banner-content">
          <div className="promotion-banner-text">
            <h1>Venha conhecer nossas </h1>
            <h1>promoções</h1>
            <h2>50% Off nos produtos </h2>
            <Button
              className="banner"
              ariaLabel="Ver produtos em promoção"
              onClick={() => console.log("Ver produtos em promoção")}
              children="Ver produto"
            />
          </div>
        </div>
      </section>
  );
};

export default Banner;
