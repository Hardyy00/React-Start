import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
  const [btnIsHighLighted, setBtnIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);

  // count the all the items ,and their occurrences
  const numberOfCartItems = ctx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;

  const { items } = ctx;

  // used to produce a bump animation every time a new item is added
  useEffect(() => {
    if (items.length > 0) {
      setBtnIsHighlighted(true); // set to true, so that bump class can be added

      const timer = setTimeout(() => {
        setBtnIsHighlighted(false); // after a while remove this class so that it can be added after
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [items]);
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
