// shop.js
import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [enlargedProduct, setEnlargedProduct] = useState(null);

  const openEnlargedProduct = (product) => {
    setEnlargedProduct(product);
  };

  const closeEnlargedProduct = () => {
    setEnlargedProduct(null);
  };

  return (
    <div className="shop">
      <h1>Nutrition Sport Shop</h1>
      <h3>visita il nostro shop qui sotto!</h3>
      <hr />
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            data={product}
            onClick={() => openEnlargedProduct(product)}
          />
        ))}
      </div>
      {enlargedProduct && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={closeEnlargedProduct}>
              Chiudi
            </button>
            <h2>{enlargedProduct.name}</h2>
            <p>{enlargedProduct.description}</p>
            <img src={enlargedProduct.image} alt={enlargedProduct.name} />
          </div>
        </div>
      )}
    </div>
  );
};
