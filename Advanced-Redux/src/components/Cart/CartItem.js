import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { itemActions } from "../../store/item";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, totalPrice, price, id } = props.item;

  const itemRemoveHandler = (event) => {
    dispatch(itemActions.remove(id));
  };

  const itemAddHandler = (event) => {
    dispatch(itemActions.add({ title, price, id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={itemRemoveHandler}>-</button>
          <button onClick={itemAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
