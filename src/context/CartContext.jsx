import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer.js";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (meal) => {
    const updatedCart = state.meals;
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.name === meal.name
    );

    if (existingItemIndex !== -1) {
      // Item already exists, update its quantity
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      // Item doesn't exist, add it to the cart
      updatedCart.push({ ...meal, quantity: 1 });
    }

    updatePrice(updatedCart);

    dispatch({
      type: "ADD",
      payload: updatedCart,
    });
  };

  const removeFromCart = (meal) => {
    const updatedCart = state.meals.filter(
      (currentMeal) => currentMeal.name !== meal.name
    );

    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE",
      payload: updatedCart,
    });
  };

  const updatePrice = (meals) => {
    let total = 0;
    meals.forEach((meal) => {
      total += meal.price * meal.quantity;
    });

    dispatch({
      type: "UPDATE_PRICE",
      payload: total,
    });
  };

  const updateQuantity = (meal, change) => {
    const updatedCart = state.meals
      .map((item) => {
        if (item.name === meal.name) {
          item.quantity += change;

          if (item.quantity === 0) {
            // Remove item from cart when quantity is 0
            return null;
          }
        }
        return item;
      })
      .filter(Boolean);

    updatePrice(updatedCart);

    dispatch({
      type: "UPDATE_QUANTITY",
      payload: updatedCart,
    });
  };

  const value = {
    total: state.total,
    meals: state.meals,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
