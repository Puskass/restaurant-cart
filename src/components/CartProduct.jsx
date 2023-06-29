import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const CartProduct = ({ meal }) => {
  const { updateQuantity } = useContext(CartContext);

  const handleDecreaseQuantity = () => {
    updateQuantity(meal, -1);
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(meal, 1);
  };

  return (
    <div className="max-w-4xl mx-auto border rounded-md p-4 mb-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold mr-32">{meal.name}</h4>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <button
              className="border border-yellow-900 text-yellow-900 rounded-md px-3 py-1 mr-2"
              onClick={handleDecreaseQuantity}
            >
              <FaMinus size={10} />
            </button>
            <button
              className="border border-yellow-900 text-yellow-900 rounded-md px-3 py-1"
              onClick={handleIncreaseQuantity}
            >
              <FaPlus size={10} />
            </button>
          </div>
        </div>
      </div>

      <span className="flex items-center justify-stretch mt-3.5 text-xs">
        <span className="font-bold text-yellow-900 text-base">
          ${meal.price.toFixed(2)}
        </span>
        <span className="ml-6 font-bold border rounded-sm border-gray-300 p-1">
          x {meal.quantity}
        </span>
      </span>
    </div>
  );
};

export default CartProduct;
