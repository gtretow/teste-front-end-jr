import React from "react";
import "./ItemComponent.scss";

interface Card {
  img: string;
  title: string;
  selected?: boolean;
}

const ItemComponent: React.FC<Card> = ({ img, title, selected }) => {
  return (
    <div className="item-component-box">
      <div className="card">
        <img src={img} />
      </div>
      <p className={selected ? "selected" : ""}>{title}</p>
    </div>
  );
};

export default ItemComponent;
