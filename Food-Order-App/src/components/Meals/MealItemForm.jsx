import { useRef, useState } from "react";

import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    setAmountIsValid(true);
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && (
        <p
          style={{
            fontSize: "10px",
            color: "red",
          }}
        >
          Please enter a valid amount
        </p>
      )}
    </form>
  );
}
