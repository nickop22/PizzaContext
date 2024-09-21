import { createContext, useState, useEffect } from "react";

//1) Crear el contexto
export const CartContext = createContext();

//2) Crear el provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [pizza, setPizza] = useState();

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    console.log("cart en addToCart", cart);
    if (index === -1) {
      const newCart = product;
      setCart([...cart, { ...newCart, quantity: 1 }]);
    } else {
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
    }
  };

  const removeFromCart = (productId) => {
    const index = cart.findIndex((item) => item.id === productId);
    if (index === -1) return;

    let newCart = [...cart];

    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart = newCart.filter((item) => item.id !== productId);
    }
    setCart(newCart);
  };

  const getQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        getQuantity,
        getTotal,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
