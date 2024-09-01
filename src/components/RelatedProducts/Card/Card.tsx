import React from "react";
import "./Card.scss";

interface ProductCardProps {
  variant?: "primary" | "secondary" | "highlight"; // Definindo as variantes possíveis como props
}

const Card: React.FC<ProductCardProps> = ({ variant }) => {
  return (
    <>
      {variant == "primary" && (
        <div className="card-box">
          <div className="content-box">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </div>
        </div>
      )}
      {variant == "secondary" && (
        <div className="card-box2">
          <div className="content-box2">
            <h2>Produtos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
