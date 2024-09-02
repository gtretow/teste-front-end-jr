import React from "react";
import "./ProductCard.scss";
import { ProductCardProps } from "../../../types/ProductCardProps";

const ProductCard: React.FC<ProductCardProps> = ({ productItem, onClick }) => (
  <article className="product-card-box">
    <div className="product-card">
      <figure className="product-image">
        <img src={productItem.photo} alt={productItem.productName} />
        <figcaption className="visually-hidden">
          {productItem.productName}
        </figcaption>
      </figure>
      <h2>{productItem.productName}</h2>
      <p className="old-price" aria-label="Preço anterior">
        {productItem.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
      <p className="price" aria-label="Preço atual com desconto">
        {(productItem.price - productItem.price * 0.1).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
      <p className="credit" aria-label="Opção de parcelamento">
        ou 2x de R$
        {(productItem.price - productItem.price / 2).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}{" "}
        sem juros
      </p>
      <span>Frete grátis</span>
      <button onClick={() => onClick(productItem)}>COMPRAR</button>
    </div>
  </article>
);

export default ProductCard;
