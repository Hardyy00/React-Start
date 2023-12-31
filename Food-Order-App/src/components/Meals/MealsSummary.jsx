import classes from "./MealsSummary.module.css";
export default function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to You</h2>

      <p>
        Choose your favorite meal from our broad Selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>

      <p>
        All out meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
}
