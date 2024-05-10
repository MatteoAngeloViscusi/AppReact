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

  const [filter, setFilter] = useState(""); 

  return (
    <div className="shop">
      <h1>Nutrition Sport Shop</h1>
      <h3>Visita il nostro shop qui sotto!</h3>
      <hr /><br />
      <div className="filter">
        <h2>Cerca i prodotti desiderati</h2>
        <input
          type="text"
          placeholder="Cerca..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="products">
        {PRODUCTS.filter((product) =>
          product.productName.toLowerCase().includes(filter.toLowerCase())
        ).map((product) => (
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
            <h2>{enlargedProduct.productName}</h2>
            <p>{enlargedProduct.description}</p>
            <img src={enlargedProduct.productImage}  alt={enlargedProduct.productName} />
          </div>
        </div>
      )}
    </div>
  );
  
};
