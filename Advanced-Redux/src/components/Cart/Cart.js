import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Cart = (props) => {
  const items = useSelector((state) => state.item.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart {items.length === 0 ? "is empty" : ""}</h2>
      <ul>
        {items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
