import React from "react";
import paymentMethod from "../../assets/formas_pagamento.png";
import "./AboutUs.scss";
import facebookLogo from "../../assets/023-facebook.png";
import instagramLogo from "../../assets/044-instagram.png";
import youtubeLogo from "../../assets/116-youtube.png";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-box">
      <div className="about-us-container">
        <div className="text-box">
          <h2>Sobre nós</h2>
          <ul>
            <li>
              <a href="#conheca">Conheça</a>
            </li>
            <li>
              <a href="#como-comprar">Como Comprar</a>
            </li>
            <li>
              <a href="#indicacao-desconto">Indicação e Desconto</a>
            </li>
          </ul>
          <div className="icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <img src={youtubeLogo} alt="YouTube" />
            </a>
          </div>
        </div>
        <div className="text-box">
          <h2>INFORMAÇÕES ÚTEIS</h2>
          <ul>
            <li>
              <a href="#fale-conosco">Fale Conosco</a>
            </li>
            <li>
              <a href="#duvidas">Dúvidas</a>
            </li>
            <li>
              <a href="#prazos-entrega">Prazos de Entrega</a>
            </li>
            <li>
              <a href="#formas-pagamento">Formas de Pagamento</a>
            </li>
            <li>
              <a href="#politica-privacidade">Política de Privacidade</a>
            </li>
            <li>
              <a href="#trocas-devolucoes">Trocas e Devoluções</a>
            </li>
          </ul>
        </div>
        <div className="text-box">
          <h2>FORMAS DE PAGAMENTO</h2>
          <img className="payment" src={paymentMethod} />
        </div>
      </div>

      <div className="newsletter-box">
        <div className="newsletter-text">
          <h1>CADASTRE-SE E RECEBA NOSSAS</h1>
          <h2>NOVIDADES E PROMOÇÕES</h2>
          <p>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>

          <form className="input-box">
            <label htmlFor="newsletter-email" className="visually-hidden">
              Seu E-mail
            </label>
            <div>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Seu E-mail"
                required
              />
              <button type="submit">OK</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
