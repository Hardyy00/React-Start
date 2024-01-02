import "./Modal.css";
export default function Modal(props) {
  const buttonHandler = (event) => {
    props.onCloseModal(false);
  };
  return (
    <div className="modal-body">
      <div className="header">
        <h1>Invalid Input</h1>
      </div>
      <div className="content">
        <p>{props.content}</p>
      </div>

      <button type="button" onClick={buttonHandler}>
        Got it
      </button>
    </div>
  );
}
