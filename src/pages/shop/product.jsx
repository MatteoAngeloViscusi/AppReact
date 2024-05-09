import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

export const Product = (props) => {
  const { id, productName, brand, price, quantity, description, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
  };
  

  return (
    <div className="product">
      <img src={productImage} onClick={toggleEnlarged} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Marca: {brand}</p>
        <p>Prezzo: €{price}</p>
        <p>Quantità disponibile: {quantity}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Aggiungi al carrello {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>

      {isEnlarged && (
        <div className="popup-container">
          <div className="popup-inner">
          <div className="container">
            <div className="description">
            <img src={productImage} alt={productName} />
              <p>
                <b>{productName}</b>
              </p>
              <p>Marca: {brand}</p>
              <p>Prezzo: €{price}</p>
              <p>Quantità disponibile: {quantity}</p>
              <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Aggiungi al carrello {cartItemCount > 0 && <> ({cartItemCount})</>}
              </button><br></br><br></br>
              <button className="close-btn" onClick={toggleEnlarged}>
                Chiudi
              </button>
            </div>
            <div className="desc">
              <h2>Descrizione</h2>
              <p>{description}</p>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};
