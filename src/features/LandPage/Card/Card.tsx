import React from "react";
import "./Card.scss";
import { ProductCardColorProps } from "../../../types/ProductCardColorProps";
import Button from "../../../components/Button/Button";

const Card: React.FC<ProductCardColorProps> = ({ variant }) => {
  return (
    <>
      {variant == "primary" && (
        <div className="card-box">
          <div className="content-box">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <Button
              className="medium"
              ariaLabel="Ver rodutos parceiros em promoção"
              onClick={() => console.log("Ver produtos parceiros em promoção")}
              children="CONFIRA"
            />
          </div>
        </div>
      )}
      {variant == "secondary" && (
        <div className="card-box2">
          <div className="content-box2">
            <h2>Produtos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <Button
              className="medium"
              ariaLabel="Ver outros produtos em promoção"
              onClick={() => console.log("Ver outros produtos em promoção")}
              children="CONFIRA"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
