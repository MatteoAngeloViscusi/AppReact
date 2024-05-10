import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, orderCompleted } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount().toFixed(2); // Round total amount to 2 decimal places

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/ordine");
  };

  return (
    <div className="cart">
      <div className="carrello">
        <div>
          <h1>Il tuo carrello</h1>
        </div>
        <div className="centered-items">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} key={product.id} />; 
            }
            return null;
          })}
        </div>
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Prezzo totale: €{totalAmount} </p>
          <button onClick={() => navigate("/shop")}>Continua Shopping</button>
          <button onClick={handleCheckout}>Ordina</button>
        </div>
      ) : (
        <h1>è vuoto</h1>
      )}
    </div>
  );
};
