import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartProduct = ({ meal }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(meal);
  };

  const handleAddQuantity = () => {
    updateQuantity(meal, meal.quantity + 1);
  };

  const handleSubtractQuantity = () => {
    if (meal.quantity > 1) {
      updateQuantity(meal, meal.quantity - 1);
    }
  };

  return (
    <div>
      <h1>{meal.name}</h1>
      <p>{meal.ingredients}</p>
      <h2>{meal.price.toFixed(2)}</h2>
      <div>
        <button onClick={handleSubtractQuantity}>-</button>
        <span>{meal.quantity}</span>
        <button onClick={handleAddQuantity}>+</button>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartProduct;
