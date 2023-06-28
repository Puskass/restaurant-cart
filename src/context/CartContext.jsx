//
import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer.js";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (meal) => {
    const mealIndex = state.meals.findIndex((m) => m.id === meal.id);
    if (mealIndex !== -1) {
      const updatedMeals = [...state.meals];
      updatedMeals[mealIndex].quantity += 1;
      dispatch({ type: "UPDATE_MEALS", payload: updatedMeals });
    } else {
      const updatedMeals = [...state.meals, { ...meal, quantity: 1 }];
      dispatch({ type: "ADD", payload: updatedMeals });
    }
  };

  const removeFromCart = (meal) => {
    const updatedMeals = state.meals.filter((currentMeal) => currentMeal.id !== meal.id);
    dispatch({ type: "REMOVE", payload: updatedMeals });
  };

  const updatePrice = (meals) => {
    let total = 0;
    meals.forEach((meal) => {
      total += meal.price * meal.quantity;
    });
    dispatch({ type: "UPDATE_PRICE", payload: total });
  };

  const value = {
    total: state.total,
    meals: state.meals,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
