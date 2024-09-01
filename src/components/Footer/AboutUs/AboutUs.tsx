import React from "react";
import paymentMethod from "../../../assets/formas_pagamento.png";
import "./AboutUs.scss";
import facebookLogo from "../../../assets/023-facebook.png";
import instagramLogo from "../../../assets/044-instagram.png";
import youtubeLogo from "../../../assets/116-youtube.png";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-box">
      <div className="about-us-container">
        <div className="text-box">
          <h3>Sobre nós</h3>
          <p>CONHEÇA</p>
          <p>COMO COMPRAR</p>
          <p>INDICAÇÃO E DESCONTO</p>
          <div className="icons">
            <img src={facebookLogo} />
            <img src={instagramLogo} />
            <img src={youtubeLogo} />
          </div>
        </div>
        <div className="text-box">
          <h3>INFORMAÇÕES ÚTEIS</h3>
          <p>FALE CONOSCO</p>
          <p>DÚVIDAS</p>
          <p>PRAZOS DE ENTREGA</p>
          <p>FORMAS DE PAGAMENTO</p>
          <p>POLÍTICA DE PRIVACIDADE</p>
          <p> TROCAS E DEVOLUÇÕES</p>
        </div>
        <div className="text-box">
          <h3>FORMAS DE PAGAMENTO</h3>
          <img className="payment" src={paymentMethod} />
        </div>
      </div>

      <div className="newsletter-box">
        <div className="newsletter-text">
          <h1>CADASTRE-SE E RECEBA NOSSAS</h1>
          <h1>NOVIDADES E PROMOÇÕES</h1>
          <p>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>

          <div className="input-box">
            <input placeholder="SEU E-MAIL" />
            <button>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
