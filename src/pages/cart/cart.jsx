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
    if (orderCompleted) {
      navigate("/checkout/order-completed");
    } else {
      checkout();
      navigate("/checkout");
    }
  };

  return (
    <div className="cart">
      <div>
        <h1>Il tuo carrello</h1>
      </div>
      <div className="carrello">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />; // Added key prop
          }
          return null; // Return null for products not in the cart
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Prezzo totale: €{totalAmount} </p>
          <button onClick={() => navigate("/shop")}>Continua Shopping</button>
          <button onClick={handleCheckout}>Ordina</button>
        </div>
      ) : (
        <h3>Carrello vuoto</h3>
      )}
    </div>
  );
};
