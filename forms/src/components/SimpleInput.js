import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    valueIsValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput((name) => name.trim() !== ""); /// passing the validating function for each input

  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailInputReset,
  } = useInput((email) => email.includes("@"));

  const formIsValid = nameIsValid && emailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "" || !enteredEmail.includes("@")) return;

    nameInputReset();
    emailInputReset();
  };

  const nameInputClasses = `form-control ${nameInputHasError ? "invalid" : ""}`;
  const emailInputClasses = `form-control ${
    emailInputHasError ? "invalid" : ""
  }`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
      </div>

      {nameInputHasError && (
        <p className="error-text">Name must not be empty</p>
      )}

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
      </div>

      {emailInputHasError && (
        <p className="error-text">Email must include '@'</p>
      )}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
