import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";

const CartModal = ({ onClose }) => {
  const { meals, total } = useContext(CartContext);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-md p-4 max-w-2xl mx-aut text-black">
        <div>
          {meals.map((meal, i) => (
            <CartProduct key={i} meal={meal} />
          ))}
        </div>
        <h1 className="flex justify-between text-lg font-bold mb-4">
          <span>Total Amount:</span>
          <span>${total.toFixed(2)}</span>
        </h1>
        <span className="flex justify-end">
          <button
            className="px-8 py-1 mr-4 font-bold border border-yellow-900 text-yellow-900 rounded-full"
            onClick={onClose}
          >
            Close
          </button>
          <button className="px-8 py-1 font-bold bg-yellow-900 text-white rounded-full">
            Order
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartModal;
