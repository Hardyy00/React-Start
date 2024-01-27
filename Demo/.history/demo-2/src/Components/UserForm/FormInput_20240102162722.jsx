import { useState, useRef } from "react";
import "./FormInput.css";
import Modal from "../Modal/Modal";
import { v4 as uuid } from "uuid";

export default function FormInput(props) {
  const inputNameRef = useRef();
  const inputAgeRef = useRef();
  const [isWrongInput, setWrongInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const buttonHandler = (event) => {
    event.preventDefault();

    const name = inputNameRef.current.value;
    const age = inputAgeRef.current.value;

    if (name.trim().length === 0 || age.trim().length === 0) {
      if (name.trim().length === age.trim().length) {
        setErrorMessage("Enter both the name and the age ( in years )..");
      } else if (name.trim().length === 0) {
        setErrorMessage("Enter the name...");
      } else {
        setErrorMessage("Enter the age...");
      }

      setWrongInput(true);
      return;
    } else if (+age < 0) {
      setErrorMessage("Entered Age must be > 0");
      setWrongInput(true);
      return;
    }

    props.onSubmitForm({ name, age, id: uuid() });
    inputNameRef.current.value = "";
    inputAgeRef.current.value = "";
  };

  const modalHandler = (state) => {
    setWrongInput(false);
  };

  return (
    <div>
      <div className={`${isWrongInput ? "hidden" : ""}`}></div>s
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            autoComplete="off"
            ref={inputNameRef}
          />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            placeholder="Age"
            autoComplete="off"
            ref={inputAgeRef}
          />
        </div>

        <button type="submit" onClick={buttonHandler}>
          Submit
        </button>
      </form>
      {isWrongInput && (
        <Modal content={errorMessage} onCloseModal={modalHandler} />
      )}
    </div>
  );
}
