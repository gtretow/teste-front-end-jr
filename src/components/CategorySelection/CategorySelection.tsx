import React from "react";
import "./CategorySelection.scss";
import ItemComponent from "./ItemComponent/ItemComponent";
import whiskey from "../../assets/whiskey.svg";
import runner from "../../assets/corrida.svg";
import healthy from "../../assets/cuidados-de-saude.svg";
import fashion from "../../assets/moda.svg";
import technology from "../../assets/monitorar-tablet-e-smartohone.svg";
import market from "../../assets/supermercados.svg";
import tools from "../../assets/ferramentas.svg";

const CategorySelection: React.FC = () => {
  return (
    <div className="category-selection-box">
      <ItemComponent selected img={technology} title={"Tecnologia"} />
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
