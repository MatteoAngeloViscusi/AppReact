import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName,brand, price,quantity, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <table>
        <tr style={{ textAlign: "center" }}>
          <td>
          <img src={productImage} />
          </td>
          <td>
            <div className="description">
              <p>
                <b>{productName}</b>
              </p>
              <p>Marca: {brand}</p>
              <p>Prezzo: €{price}</p>
              <p>Quantità disponibile: {quantity}</p>
              <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input
                  value={cartItems[id]}
                  onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                />
                <button onClick={() => addToCart(id)}> + </button>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};