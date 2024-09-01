import React, { useEffect, useState } from "react";
import "./RelatedProducts.scss";
import { Product } from "../../types/Product";
import { fetchProducts } from "../../services/api";
import ProductCarousell from "./ProductCarousell/ProductCarousell";
import Card from "./Card/Card";
import logo from "../../assets/grouplogo.png";
import Modal from "../Modal/Modal";

const RelatedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [productItem, setProductItem] = useState<Product>({} as Product);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products.products);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  const onProductClick = (productItem: Product) => {
    setOpenModal(!openModal);
    setProductItem(productItem);
  };

  const onModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="related-products-box">
      <div>
        <h1>Produtos relacionados</h1>
      </div>
      <div className="related-products-selection">
        <div className="related-products-item">
          <p>CELULAR</p>
        </div>
        <div className="related-products-item">
          <p>ACESSÓRIOS</p>
        </div>
        <div className="related-products-item">
          <p>TABLETS</p>
        </div>
        <div className="related-products-item">
          <p>NOTEBOOKS</p>
        </div>
        <div className="related-products-item">
          <p>TVS</p>
        </div>
        <div className="related-products-item">
          <p>VER TODOS</p>
        </div>
      </div>

      {openModal && (
        <Modal
          product={productItem}
          isOpen={openModal}
          onClose={onModalClose}
        />
      )}

      <ProductCarousell products={products} onProductClick={onProductClick} />

      <div className="related-products-partners">
        <Card variant={"primary"} />
        <Card variant={"primary"} />
      </div>

      <div className=" related-products-lettering">
        <h1>Produtos relacionados</h1>
        <h2>Ver todos</h2>
      </div>
      <div className="related-products-products">
        <Card variant={"secondary"} />
        <Card variant={"secondary"} />
      </div>

      <div className="related-products-by-brand">
        <div className="related-products-lettering">
          <h1>Navegue por marcas</h1>
        </div>
        <div className="item-box">
          <div className="rellated-products-by-brand-item">
            <img src={logo} alt="" />
          </div>
          <div className="rellated-products-by-brand-item">
            <img src={logo} alt="" />
          </div>{" "}
          <div className="rellated-products-by-brand-item">
            <img src={logo} alt="" />
          </div>{" "}
          <div className="rellated-products-by-brand-item">
            <img src={logo} alt="" />
          </div>{" "}
          <div className="rellated-products-by-brand-item">
            <img src={logo} alt="" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
