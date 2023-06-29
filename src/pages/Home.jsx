import React from "react";
import { meals } from "../assets/data/meals";
import MealCard from "../components/MealCard";

const Home = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <div className="border rounded-md p-8">
        <div>
          {meals.map((meal, i) => (
            <MealCard key={i} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
