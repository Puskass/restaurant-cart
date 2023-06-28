import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const { meals } = useContext(CartContext);

  const total = meals.reduce((acc, meal) => acc + meal.price * meal.quantity, 0);

  return (
    <div>
      <h3>Your Cart</h3>
      <p>Total: ${total.toFixed(2)}</p>
      <div>
        {meals.map((meal) => (
          <CartProduct key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
