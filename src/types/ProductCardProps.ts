import { Product } from "./Product";

export interface ProductCardProps {
  productItem: Product;
  onClick: (product: Product) => void;
}
