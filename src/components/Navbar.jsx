import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { meals } = useContext(CartContext);

  const cartItemCount = meals.reduce((total, meal) => total + meal.quantity, 0);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/cart">
        Cart
        {cartItemCount > 0 && <span> {cartItemCount} </span>}
      </Link>
    </div>
  );
};

export default Navbar;
