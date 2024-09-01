import React from "react";
import { Product } from "../../../types/Product";
import ProductCard from "../ProductCarousell/ProductCard/ProductCard";
import "./ProductCarousell.scss";

interface ProductListProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

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
