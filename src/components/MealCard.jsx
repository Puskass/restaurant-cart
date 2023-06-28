import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const MealCard = ({ meal }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(meal);
  };

  return (
    <div className="p-4 border rounded-md mb-4">
      <h1 className="text-xl font-bold mb-2">{meal.name}</h1>
      <ul className="ml-2 mb-4 text-gray-600">
        {meal.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-lg font-semibold mb-4">${meal.price.toFixed(2)}</h2>
      <button
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
        onClick={handleAdd}
      >
        <FaShoppingCart className="mr-2" />
        Add to Cart
      </button>
    </div>
  );
};

export default MealCard;
