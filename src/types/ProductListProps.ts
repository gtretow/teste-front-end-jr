import { Product } from "./Product";

export interface ProductListProps {
    products: Product[];
    onProductClick: (product: Product) => void;
  }