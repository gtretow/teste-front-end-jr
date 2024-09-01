import React from "react";
import "./CategorySelection.scss";
import ItemComponent from "./ItemComponent/ItemComponent";
import whiskey from "../../assets/whiskey.png";
import runner from "../../assets/corrida.png";
import healthy from "../../assets/healthy.png";
import fashion from "../../assets/moda.png";
import technology from "../../assets/tech.png";
import market from "../../assets/supermercados.png";
import tools from "../../assets/ferramentas.png";

const CategorySelection: React.FC = () => {
  return (
    <div className="category-selection-box">
      <ItemComponent img={technology} title={"Tecnologia"} />
      <ItemComponent img={market} title={"Supermercado"} />
      <ItemComponent img={whiskey} title={"Bebidas"} />
      <ItemComponent img={tools} title={"Ferramentas"} />
      <ItemComponent img={healthy} title={"Saúde"} />
      <ItemComponent img={runner} title={"Esportes e Fitness"} />
      <ItemComponent img={fashion} title={"Moda"} />
    </div>
  );
};

export default CategorySelection;
