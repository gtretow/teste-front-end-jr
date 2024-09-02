import React from "react";
import "./ItemComponent.scss";

interface Card {
  title: string;
  selected?: boolean;
  SvgComponent: React.FC;
}

const ItemComponent: React.FC<Card> = ({ title, selected, SvgComponent }) => {
  return (
    <div className="item-component-box">
      <div className="card">
        <SvgComponent />
      </div>
      <p className={selected ? "selected" : ""}>{title}</p>
    </div>
  );
};

export default ItemComponent;
