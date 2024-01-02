import classes from "./CartItem.module.css";

const formatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});

export default function CartItem(props) {
  const { item, price, quantity } = props.item;
  const perPrice = price / quantity;
  return (
    <li className={classes.item}>
      <header>
        <h2>{item}</h2>
        <div className={classes.desc}>
          <span className={classes.price}>
            {formatter.format(price)} {"  "}
          </span>
          <span className={classes.per}>({perPrice}/item)</span>
        </div>
      </header>
      <footer>
        <p>x {quantity}</p>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </footer>
    </li>
  );
}
