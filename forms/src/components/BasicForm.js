import { useState } from "react";
import FormField from "../hooks/form-field";

const BasicForm = (props) => {
  const {
    fieldInput: firstName,
    fieldInputIsValid: firstNameIsValid,
    hasError: firstNameFieldHasError,
    fieldChangeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: fnameReset,
  } = FormField((name) => name.trim() !== "");

  const {
    fieldInput: lastName,

    fieldInputIsValid: lastNameIsValid,
    hasError: lastNameFieldHasError,
    fieldChangeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: lNameReset,
  } = FormField((name) => name.trim() !== "");

  const {
    fieldInput: email,
    fieldInputIsValid: emailIsValid,
    hasError: emailFieldHasError,
    fieldChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = FormField((email) => email.includes("@"));

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const submitForm = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    fnameReset();
    lNameReset();
    emailReset();
  };

  const firstNameClasses = `form-control ${
    firstNameFieldHasError ? "invalid" : ""
  }`;

  const lastNameClasses = `form-control ${
    lastNameFieldHasError ? "invalid" : ""
  }`;

  const emailClasses = `form-control ${emailFieldHasError ? "invalid" : ""}`;

  return (
    <form>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
          />
          {firstNameFieldHasError && (
            <p className="error-text">Field must not be empty</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
          />
          {lastNameFieldHasError && (
            <p className="error-text">Field must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />

        {emailFieldHasError && (
          <p className="error-text">Email must contain '@' symbol</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
