import React from "react";
import "./ItemComponent.scss";

interface Card {
  img: string;
  title: string;
}

const ItemComponent: React.FC<Card> = ({ img, title }) => {
  return (
    <div className="item-component-box">
      <div className="card">
        <img src={img} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default ItemComponent;
