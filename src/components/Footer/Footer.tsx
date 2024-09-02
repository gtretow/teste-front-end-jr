import React from "react";
import logo from "../../assets/econverselogo.png";

import "./Footer.scss";
import AboutUs from "../AboutUs/AboutUs";

const Footer: React.FC = () => {
  return (
    <>
      <AboutUs />
      <footer className="footer">
        <section className="footer-content">
          <p>
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
            suas imagens são de propriedade de seus respectivos donos.
            <br />É vedada a reprodução, total ou parcial, de qualquer conteúdo
            sem expressa autorização.
          </p>
        </section>
        <figure className="footer-logo">
          <img src={logo} alt="Logo da Empresa" />
          <figcaption className="visually-hidden">Logo da Empresa</figcaption>
        </figure>
      </footer>
    </>
  );
};

export default Footer;
