import { Product } from "./Product";

export interface ModalProps {
  isOpen: boolean;
  product: Product;
  onClose: () => void;
}
