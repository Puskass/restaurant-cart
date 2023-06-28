import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

// Component for the navigation bar
const Navbar = () => {
  const { meals } = useContext(CartContext);

  // Calculate the total quantity of all meals in the cart
  const cartItemCount = meals.reduce((total, meal) => total + meal.quantity, 0);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Menu
        </Link>
        <Link to="/cart" className="relative">
          <FaShoppingCart size={25} />
          {cartItemCount > 0 && (
            <span className="bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center absolute -top-1.5 -right-1 text-xs font-bold">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
