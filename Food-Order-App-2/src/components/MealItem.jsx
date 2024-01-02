import React from "react";
import { useContext } from "react";
import priceFormatter from "../util/formatting.js";

import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

export default function MealItem({ meal }) {
  const cartCTX = useContext(CartContext);
  function handleMealToCart() {
    cartCTX.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img
          src={`https://react-food-backend-m6fy.onrender.com/${meal.image}`}
          alt={meal.name}
        />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{priceFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>

        <p className="meal-items-actions">
          <Button onClick={handleMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
