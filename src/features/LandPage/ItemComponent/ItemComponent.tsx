import React from "react";
import "./ItemComponent.scss";
import { CardProps } from "../../../types/CardProps";

const ItemComponent: React.FC<CardProps> = ({
  title,
  selected,
  SvgComponent,
}) => {
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
