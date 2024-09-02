import React from "react";
import "./ProductCarousell.scss";
import ProductCard from "../ProductCard/ProductCard";
import { ProductListProps } from "../../../types/ProductListProps";

const ProductCarousell: React.FC<ProductListProps> = ({
  products,
  onProductClick,
}) => (
  <div className="product-Carousell-box">
    {products.map(
      (product, index) =>
        index < 4 && (
          <ProductCard
            key={index}
            productItem={product}
            onClick={onProductClick}
          />
        )
    )}
  </div>
);

export default ProductCarousell;
