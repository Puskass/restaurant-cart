// components/Meal.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Meal = ({ meal }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(meal);
  };

  return (
    <div>
      <h1>{meal.name}</h1>
      <ul>
        <li>{meal.ingredients}</li>
      </ul>
      <h2>{meal.price}</h2>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default Meal;
