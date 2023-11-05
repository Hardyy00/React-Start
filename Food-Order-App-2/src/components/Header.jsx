import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCTX = useContext(CartContext);
  const userProgressCTX = useContext(UserProgressContext);

  const totalQuantity = cartCTX.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  function handlerShowCart() {
    userProgressCTX.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>Food Site</h1>
      </div>

      <nav>
        <Button textOnly onClick={handlerShowCart}>
          Cart ({totalQuantity})
        </Button>
      </nav>
    </header>
  );
}
