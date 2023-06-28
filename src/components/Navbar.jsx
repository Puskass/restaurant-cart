import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

// Component for the navigation bar
const Navbar = () => {
  const { meals } = useContext(CartContext);

  // Calculate the total quantity of all meals in the cart
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
