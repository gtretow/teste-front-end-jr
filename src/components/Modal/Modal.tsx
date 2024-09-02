import React, { useState } from "react";
import "./Modal.scss";
import { ModalProps } from "../../types/ModalProps";

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button
          className="modal-close-button"
          aria-label="Fechar modal"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="modal-box">
          <figure className="modal-image">
            <img src={product.photo} alt={`Imagem de ${product.productName}`} />
            <figcaption className="visually-hidden">
              Imagem de {product.productName}
            </figcaption>
          </figure>
          <div className="modal-text">
            <h2 className="name">{product.productName}</h2>
            <p className="price">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <section>{product.descriptionShort}</section>
            <a href="#" aria-label="Ver mais detalhes do produto">
              Veja mais detalhes do produto {">"}
            </a>
            <div className="quantity-box">
              <button
                onClick={handleDecrement}
                className="quantity-button"
                aria-label="Diminuir quantidade"
              >
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="quantity-button"
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>

            <button className="modal-button">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
