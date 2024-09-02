/* eslint-disable react-hooks/exhaustive-deps */
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
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

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
    setSelectedItem(items[0]);
  }, []);

  const onProductClick = (productItem: Product) => {
    setOpenModal(!openModal);
    setProductItem(productItem);
  };

  const onModalClose = () => {
    setOpenModal(false);
  };

  const items = [
    "CELULAR",
    "ACESSÓRIOS",
    "TABLETS",
    "NOTEBOOKS",
    "TVS",
    "VER TODOS",
  ];

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="related-products-box">
      <div className="line-box">
        <div className="section-end-line"></div>
        <h1>Produtos relacionados</h1>
        <div className="section-end-line"></div>
      </div>
      <div className="related-products-selection">
        {items.map((item) => (
          <div
            key={item}
            className={`related-products-item ${
              selectedItem === item ? "selected" : ""
            }`}
            onClick={() => handleItemClick(item)}
          >
            <p>{item}</p>
          </div>
        ))}
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
        <div className="line-box">
          <div className="section-end-line" />
          <h1>Produtos relacionados</h1>
          <div className="section-end-line" />
        </div>
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
