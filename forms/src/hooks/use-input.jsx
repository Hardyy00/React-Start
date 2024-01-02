import { useState } from "react";
export default function useInput(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [fieldTouched, setFieldTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && fieldTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setFieldTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setFieldTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
}
