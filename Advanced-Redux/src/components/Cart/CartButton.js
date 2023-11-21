import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { showActions } from "../../store/show";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const size = useSelector((state) => state.item.totalQuantity);
  const showCartHandler = (event) => {
    dispatch(showActions.toggle());
  };
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{size}</span>
    </button>
  );
};

export default CartButton;
