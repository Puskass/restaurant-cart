import React, { useContext } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

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
    <div className="max-w-xl mx-auto border rounded-md p-4 mb-4">
      <h1 className="text-xl font-bold">{meal.name}</h1>
      <p className="text-gray-600 mb-2">{meal.ingredients.join(", ")}</p>
      <h2 className="text-lg font-semibold">${meal.price.toFixed(2)}</h2>
      <div className="flex items-center mt-4">
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={handleDecreaseQuantity}
        >
          <FaMinus size={12} />
        </button>
        <span className="mx-3 font-semibold text-xl">{meal.quantity}</span>
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={handleIncreaseQuantity}
        >
          <FaPlus size={12} />
        </button>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={handleRemove}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartProduct;
