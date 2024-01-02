import classes from "./Button.module.css";

export default function Button() {
  return (
    <>
      <button className={classes.but}>
        <div>
          <span className={classes.txt}>Your Cart</span>
          <span className={classes.quantity}>1</span>
        </div>
      </button>
    </>
  );
}
