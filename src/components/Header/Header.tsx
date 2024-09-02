/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../assets/grouplogo.png";
import heart from "../../assets/heart.svg";
import box from "../../assets/Group.svg";
import userCircle from "../../assets/userCircle.svg";
import shoppingCart from "../../assets/shoppingCart.svg";
import magnifyingGlass from "../../assets/magnifyingGlass.png";
import creaditCard from "../../assets/CreditCard.png";
import shieldCheck from "../../assets/ShieldCheck.png";
import creditCard from "../../assets/CreditCard.png";
import styles from "./Header.module.scss";
import Crown from "../Icons/crown";

const Header: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");

  const categories = [
    "TODAS CATEGORIAS",
    "SUPERMERCADO",
    "LIVROS",
    "MODA",
    "LANÇAMENTOS",
    "OFERTAS DO DIA",
    "ASSINATURA",
  ];
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, []);

  return (
    <header className="header">
      <div className="header-box">
        <div className="header-top">
          <span>
            <img src={shieldCheck} />
            Compra <p className="special-character"> &nbsp; 100% segura </p>
          </span>
          <span>
            <img src={creditCard} />
            <p className="special-character">Frete grátis &nbsp;</p>
            acima de R$ 200
          </span>
          <span>
            <img src={creaditCard} />
            <p className="special-character">Parcele &nbsp;</p> suas compras
          </span>
        </div>
      </div>
      <div className="header-middle">
        <img className="header-logo" src={logo} />{" "}
        <div className="header-search-box">
          <input
            type="text"
            className="header-search"
            placeholder="O que você está buscando?"
            value={searchValue}
            onChange={handleInputChange}
          />
          <img src={magnifyingGlass} alt="Buscar" role="button" tabIndex={0} />
        </div>
        <div className="header-icons">
          <img src={box} alt="Box" />
          <img src={heart} alt="Favoritos" />
          <img src={userCircle} alt="Usuário" />
          <img src={shoppingCart} alt="Carrinho de compras" />
        </div>
      </div>

      <nav className={styles["category-nav"]}>
        <ul className={styles["category-list"]}>
          {categories.slice(0, -1).map((category) => (
            <li
              role="button"
              tabIndex={0}
              key={category}
              className={`${styles["category-item"]} ${
                selectedCategory === category ? styles["selected"] : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
          <div className={styles["category-premium"]}>
            <div className={styles["icon"]}>
              <Crown color={selectedCategory === "ASSINATURA" ? true : false} />
            </div>
            <li
              role="button"
              tabIndex={0}
              className={`${styles["category-item"]} ${
                selectedCategory === "ASSINATURA" ? styles["selected"] : ""
              }`}
              onClick={() => handleCategoryClick("ASSINATURA")}
            >
              ASSINATURA
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
