import React from "react";

const Meal = ({ meal }) => {
  return (
    <div>
      <h1>{meal.name}</h1>
      <ul>
        <li>{meal.ingredients}</li>
      </ul>
      <h2> {meal.price} </h2>

      <button>
        Add to Cart
      </button>
    </div>
  );
};

export default Meal;
