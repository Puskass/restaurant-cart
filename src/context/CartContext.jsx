import { createContext, useReducer } from "react";
import reducer, { initalState } from "./reducer.js";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const addToCart = (meal) => {
    const updatedCart = state.meals;
    updatedCart.push(meal);

    updatePrice(updatedCart);

    dispatch({
      type: "ADD",
      payload: updatedCart,
    });
  };

  const removeFromCart = (meal) => {
    const updatedCart = state.meals.filter((currentMeal) => currentMeal.name !== meal.name);

    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE",
      payload: updatedCart,
    });
  };

  const updatePrice = (meals) => {
    let total = 0;
    meals.forEach((meal) => {
      total += meal.price;
    });

    dispatch({
      type: "UPDATE_PRICE",
      payload: total,
    });
  };

  const value = {
    total: state.total,
    meals: state.meals,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
