import React, { useState } from "react";
import { Product } from "../../types/Product";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  product: Product;
  onClose: () => void;
}

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
        <button className="modal-close-button" onClick={onClose}>
          X
        </button>
        <div className="modal-box">
          <div className="modal-image">
            <img src={product.photo} />
          </div>
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
            <span className="see-more">
              Veja mais detalhes do produto {">"}
            </span>
            <div className="quantity-box">
              <button onClick={handleDecrement} className="quantity-button">
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button onClick={handleIncrement} className="quantity-button">
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
