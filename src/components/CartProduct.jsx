import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Component for displaying a product in the cart
const CartProduct = ({ meal }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(meal);
  };

  const handleDecreaseQuantity = () => {
    updateQuantity(meal, -1);
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(meal, 1);
  };

  return (
    <div>
      <h1>{meal.name}</h1>
      <p>{meal.ingredients}</p>
      <h2>{meal.price.toFixed(2)}</h2>
      <div>
        <button onClick={handleDecreaseQuantity}>-</button>
        <span>{meal.quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartProduct;
