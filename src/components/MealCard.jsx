import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import AnimatedCartIcon from "./AnimatedCart";

const MealCard = ({ meal }) => {
  const { addToCart } = useContext(CartContext);
  const [isCartAnimating, setIsCartAnimating] = useState(false);

  // Function to handle adding the meal to the cart
  const handleAdd = () => {
    addToCart(meal);
    setIsCartAnimating(true);
  };

  // Function to handle animation completion
  const handleAnimationComplete = () => {
    setIsCartAnimating(false);
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded-md mb-4">
      <div>
        <h1 className="text-xl font-bold mb-2">{meal.name}</h1>
        <div className="mb-4 text-gray-600">{meal.ingredients.join(", ")}</div>
        <h2 className="text-lg font-bold mb-4 text-yellow-600">
          ${meal.price.toFixed(2)}
        </h2>
      </div>
      <div className="pl-10">
        <button
          className="flex font-semibold items-center px-4 py-2 bg-yellow-900 text-white rounded-full hover:bg-yellow-600 transition-colors duration-300"
          onClick={handleAdd}
        >
          Add
          <span className="ml-1">
            {isCartAnimating ? (
              <AnimatedCartIcon onAnimationComplete={handleAnimationComplete} />
            ) : (
              <FaShoppingCart className="mr-2" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default MealCard;
