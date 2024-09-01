import React from "react";
import { Product } from "../../../../types/Product";
import "./ProductCard.scss";

interface ProductCardProps {
  productItem: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ productItem, onClick }) => (
  <div className="product-card-box">
    <div className="product-card">
      <img src={productItem.photo} alt={productItem.productName} />
      <h2>{productItem.productName}</h2>
      <p className="old-price">
        {productItem.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
      <p className="price">
        {(productItem.price - productItem.price * 0.1).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
      <p className="credit">
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
  </div>
);

export default ProductCard;
