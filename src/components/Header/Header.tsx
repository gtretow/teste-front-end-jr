import React from "react";
import "./Header.scss";
import logo from "../../assets/grouplogo.png";
import heart from "../../assets/heart.png";
import box from "../../assets/Group.png";
import userCircle from "../../assets/userCircle.png";
import shoppingCart from "../../assets/shoppingCart.png";
import crown from "../../assets/CrownSimple.png";

const Header: React.FC = () => (
  <header className="header">
    <div className="header-box">
      <div className="header-top">
        <span>
          Compra <span className="special-character">100% segura</span>
        </span>
        <span>
          <span className="special-character">Frete grátis</span> acima de R$
          200
        </span>
        <span>
          <span className="special-character">parcele</span> suas compras
        </span>
      </div>
    </div>
    <div className="header-middle">
      <img className="header-logo" src={logo} />{" "}
      <input
        type="text"
        className="header-search"
        placeholder="O que você está buscando?"
      />{" "}
      <div className="header-icons">
        <img src={box} />
        <img src={heart} />
        <img src={userCircle} />
        <img src={shoppingCart} />
      </div>
    </div>

    <nav className="category-nav">
      <ul className="category-list">
        <li className="category-item">TODAS CATEGORIAS</li>
        <li className="category-item">SUPERMERCADO</li>
        <li className="category-item">LIVRPS</li>
        <li className="category-item">MODA</li>
        <li className="category-item">LANÇAMENTOS</li>
        <li className="category-item">OFERTAS DO DIA</li>
        <div className="category-premium">
          <img className="icon" src={crown} />
          <li className="category-item">ASSINATURA</li>
        </div>
      </ul>
    </nav>
  </header>
);

export default Header;
