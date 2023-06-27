import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { meals } = useContext(CartContext);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/cart">
        Cart
        <span>{meals.length}</span>
      </Link>
    </div>
  );
};

export default Navbar;
