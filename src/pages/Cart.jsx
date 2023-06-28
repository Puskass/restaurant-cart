import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const { meals } = useContext(CartContext);

  const total = meals.reduce((acc, meal) => acc + meal.price * meal.quantity, 0);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Your Cart</h3>
      <p className="text-lg font-semibold mb-4">Total: ${total.toFixed(2)}</p>
      <div>
        {meals.map((meal, i) => (
          <CartProduct key={i} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
