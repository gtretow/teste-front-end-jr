import React, { useState } from "react";
import "./ProductCarousell.scss";
import ProductCard from "../ProductCard/ProductCard";
import { ProductListProps } from "../../../types/ProductListProps";

const ProductCarousell: React.FC<ProductListProps> = ({
  products,
  onProductClick,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const isNextDisabled = startIndex + itemsPerPage >= products.length;
  const isPrevDisabled = startIndex === 0;

  return (
    <div className="carousell-component">
      <button
        disabled={isPrevDisabled}
        className="arrow left-arrow"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <div className="product-Carousell-box">
        <div
          className="product-carousel-content"
          style={{
            transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productItem={product}
              onClick={onProductClick}
            />
          ))}
        </div>
      </div>
      <button
        disabled={isNextDisabled}
        className="arrow right-arrow"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default ProductCarousell;
