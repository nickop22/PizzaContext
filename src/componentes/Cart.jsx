import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useEffect } from "react";

const Cart = () => {
  const { cart, addToCart, getTotal, removeFromCart } = useContext(CartContext);
  console.log("cart en Cart", cart);

  return (
    <div className="container">
      <h2 className="my-4">Carrito de Compras</h2>
      <div className="list-group card">
        {cart.map((pizza) => (
          <div
            key={pizza.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <img
                src={pizza.img}
                alt={pizza.name}
                className="img-fluid mr-3"
                style={{ maxHeight: "100px", objectFit: "contain" }}
              />
              <div>
                <h5>{pizza.name}</h5>
                <p>Precio: ${pizza.price}</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-danger mr-2"
                onClick={() => removeFromCart(pizza.id)}
              >
                -
              </button>
              <span>Cantidad: {pizza.quantity}</span>
              <button
                className="btn btn-success ml-2"
                onClick={() => addToCart(pizza)}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <div className="list-group-item">
          <h3>Total: ${getTotal()}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
