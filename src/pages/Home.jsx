import React from "react";
import { meals } from "../assets/data/meals";
import MealCard from "../components/Meal";

const Home = () => {
  return (
    <div>
      <h1>Meals</h1>
      <section>
        {meals.map((meal, i) => 
          <MealCard key={i} meal={meal} />
        )}
      </section>
    </div>
  );
};

export default Home;
