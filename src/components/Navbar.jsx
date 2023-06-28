import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { meals } = useContext(CartContext);

  const totalQuantity = meals.reduce((acc, meal) => acc + meal.quantity, 0);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/cart">
        Cart
        {totalQuantity > 0 && <span>{totalQuantity}</span>}
      </Link>
    </div>
  );
};

export default Navbar;
