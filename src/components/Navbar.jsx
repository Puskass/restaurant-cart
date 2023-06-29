import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import CartModal from "./CartModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { meals } = useContext(CartContext);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const cartItemCount = meals.reduce((total, meal) => total + meal.quantity, 0);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Menu
        </Link>
        <div className="relative cursor-pointer">
          <FaShoppingCart size={25} onClick={openCartModal} />
          {cartItemCount > 0 && (
            <span className="bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center absolute -top-1.5 -right-1 text-xs font-bold">
              {cartItemCount}
            </span>
          )}
        </div>
      </div>
      {isCartModalOpen && <CartModal onClose={closeCartModal} />}
    </nav>
  );
};

export default Navbar;
