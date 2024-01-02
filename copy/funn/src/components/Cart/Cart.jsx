import Card from "../Card/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart() {
  return (
    <>
      <Card className={classes.cart}>
        <section>
          <h1>Your Items</h1>
          <ul>
            <CartItem item={{ item: "Food", price: 18, quantity: 3 }} />
            <CartItem item={{ item: "Food", price: 18, quantity: 3 }} />
          </ul>
        </section>
      </Card>
    </>
  );
}
