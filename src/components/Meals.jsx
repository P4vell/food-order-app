import { useState } from "react";
import { mealsData } from "../data/meals";
import MealCard from "./MealCard";

const Meals = () => {
  const [meals, setMeals] = useState(mealsData);

  const filterMeals = (category) => {
    if (category === "All") return setMeals(mealsData);
    setMeals(mealsData.filter((meal) => meal.category === category));
  };

  return (
    <div className="max-w-[1600px] px-4 mx-auto">
      <h1 className="text-4xl text-center">Meals</h1>
      <div className="py-4">
        <p className="pb-4 text-xl font-medium">Filter by category</p>
        <div className="flex items-center flex-wrap gap-2">
          <button
            className="bg-orange-600 text-white px-4 py-1 rounded-2xl hover:bg-orange-500"
            onClick={() => filterMeals("All")}
          >
            All
          </button>
          <button
            className="bg-orange-600 text-white px-4 py-1 rounded-2xl hover:bg-orange-500"
            onClick={() => filterMeals("Burger")}
          >
            Burgers
          </button>
          <button
            className="bg-orange-600 text-white px-4 py-1 rounded-2xl hover:bg-orange-500"
            onClick={() => filterMeals("Pizza")}
          >
            Pizza
          </button>
          <button
            className="bg-orange-600 text-white px-4 py-1 rounded-2xl hover:bg-orange-500"
            onClick={() => filterMeals("Salad")}
          >
            Salads
          </button>
          <button
            className="bg-orange-600 text-white px-4 py-1 rounded-2xl hover:bg-orange-500"
            onClick={() => filterMeals("Chicken")}
          >
            Chicken
          </button>
        </div>
      </div>
      <div className="grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
