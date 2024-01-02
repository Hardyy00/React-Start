import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Takoyaki",
    description: "A japanese Dish",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Garlic Bread",
    description: "A Bread with Garlic",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Aloo ki Chat",
    description: "Fried Potato covered in Green Chutney",
    price: 18.99,
  },
];
export default function AvailableMeals() {
  const mealList = DUMMY_MEALS.map((item) => (
    <MealItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}
