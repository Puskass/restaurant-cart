import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

const AnimatedCartIcon = ({ onAnimationComplete }) => {
  return (
    <motion.div
      className="cart-animation absolute top-0 right-0 mt-2 mr-2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onAnimationComplete={onAnimationComplete}
    >
      <FaShoppingCart className="cart-icon text-white" size={25} />
    </motion.div>
  );
};

export default AnimatedCartIcon;
