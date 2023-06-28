import React from "react";
import { meals } from "../assets/data/meals";
import MealCard from "../components/MealCard";

const Home = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals.map((meal, i) => (
          <MealCard key={i} meal={meal} />
        ))}
      </section>
    </div>
  );
};

export default Home;
