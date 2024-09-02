import React from "react";
import "./CategorySelection.scss";
import ItemComponent from "./ItemComponent/ItemComponent";
import Drink from "../Icons/drink";
import Market from "../Icons/market";
import Technology from "../Icons/tech";
import Tools from "../Icons/tool";
import Health from "../Icons/health";
import Fashion from "../Icons/fashion";
import Runner from "../Icons/runner";

const CategorySelection: React.FC = () => {
  return (
    <div className="category-selection-box">
      <ItemComponent selected SvgComponent={Technology} title={"Tecnologia"} />
      <ItemComponent SvgComponent={Market} title={"Supermercado"} />
      <ItemComponent SvgComponent={Drink} title={"Bebidas"} />
      <ItemComponent SvgComponent={Tools} title={"Ferramentas"} />
      <ItemComponent SvgComponent={Health} title={"Saúde"} />
      <ItemComponent SvgComponent={Runner} title={"Esportes e Fitness"} />
      <ItemComponent SvgComponent={Fashion} title={"Moda"} />
    </div>
  );
};

export default CategorySelection;
