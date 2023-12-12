import React from "react";
import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import priceFormatter from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/use-http";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function CheckOut() {
  const ctx = useContext(CartContext);
  const userProgressCTX = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    resetData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const totalAmount = ctx.items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCTX.hideCheckOut();
  }

  function handlerFinish() {
    userProgressCTX.hideCheckOut();
    ctx.clearCart();
    resetData(); // to clear the http response
  }

  function handlerSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);

    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: ctx.items,
          customer: customerData,
        },
      })
    );

    // fetch("http://localhost:3000/orders", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     order: {
    //       items: ctx.items,
    //       customer: customerData,
    //     },
    //   }),
    // });
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (data && !error) {
    return (
      <Modal
        open={userProgressCTX.progress === "checkout"}
        onClose={handlerFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted Successfully</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes
        </p>
        <p className="modal-actions">
          <Button onClick={handlerFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  if (isSending) actions = <span>Confirming Order...</span>;
  return (
    <Modal open={userProgressCTX.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handlerSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : {priceFormatter.format(totalAmount)} </p>

        <Input label="Full Name" type="text" id="name" />

        <Input label="E-Mail Address" type="email" id="email" />

        <Input label="Street" type="text" id="street" />

        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <Error title={"Failed to submit order"} message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
