import { useEffect, useState } from "react";

import MealItem from "./MealItem";
import useHttp from "../hooks/use-http";
import Error from "./Error";

const requestConfig = {};
const url = "http:://localhost:3000/meals";

export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);
  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch("http://localhost:3000/meals");

  //     if (!response.ok) {
  //     }

  //     const meals = await response.json();

  //     setLoadedMeals(meals);
  //   }

  //   fetchMeals();
  // }, []); // run the fetch meal for the first time when this component is executed

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) return <p className="center">Data is being fetched...</p>;

  if (error) {
    return <Error title={"Failed to fetch meals"} message={error}></Error>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
