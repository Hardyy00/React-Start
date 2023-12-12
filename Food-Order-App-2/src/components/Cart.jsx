import { useContext } from "react";
import React from "react";
import CartContext from "../store/CartContext";
import priceFormatter from "../util/formatting";

import Button from "../components/UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";
import CartItem from "./CardItem";

export default function Cart() {
  const ctx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = ctx.items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handlerProceed() {
    userProgressCtx.showCheckOut();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>

      <ul>
        {ctx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => ctx.removeItem(item.id)}
            onIncrease={() => ctx.addItem(item)}
          />
        ))}
      </ul>

      <p className="cart-total">Total = {priceFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {ctx.items.length > 0 && (
          <Button onClick={handlerProceed}>Proceed</Button>
        )}
      </p>
    </Modal>
  );
}
