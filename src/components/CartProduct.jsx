import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartProduct = ({ meal }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(meal);
  };

  return (
    <div>
      <h1>{meal.name}</h1>
      <p>{meal.ingredients}</p>
      <h2>{meal.price.toFixed(2)}</h2>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartProduct;
