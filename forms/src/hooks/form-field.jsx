import { useState } from "react";

export default function FormField(validationLogic) {
  const [fieldInput, setFieldInput] = useState("");
  const [fieldTouched, setFieldTouched] = useState(false);

  const fieldInputIsValid = validationLogic(fieldInput);

  const hasError = !fieldInputIsValid && fieldTouched;

  const fieldChangeHandler = (event) => {
    setFieldInput(event.target.value);
  };

  const blurHandler = (event) => {
    setFieldTouched(true);
  };

  const reset = () => {
    setFieldInput("");
    setFieldTouched(false);
  };

  return {
    fieldInput,
    fieldTouched,
    fieldInputIsValid,
    hasError,
    fieldChangeHandler,
    blurHandler,
    reset,
  };
}
