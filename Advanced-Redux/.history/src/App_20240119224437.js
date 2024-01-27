import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import Notification from "./components/Notification/Notification";

let initial = true;

function App() {
  const show = useSelector((state) => state.show.show);
  const cart = useSelector((state) => state.item);
  const dispatch = useDispatch();

  const notification = useSelector((state) => state.show.notification);

  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(
  //       showActions.showNotification({
  //         status: "pending",
  //         title: "sending",
  //         message: "Sending Cart Data",
  //       })
  //     );
  //     const response = await fetch(
  //       "https://react-http-25049-default-rtdb.firebaseio.com/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Sending Cart data failed.");
  //     }

  //     dispatch(
  //       showActions.showNotification({
  //         status: "success",
  //         title: "Success!",
  //         message: "Sent cart data successfully!",
  //       })
  //     );

  //     const responseData = await response.json();
  //   };

  //   if (initial) {
  //     initial = false;
  //     return;
  //   }

  //   sendCartData().catch((err) => {
  //     dispatch(
  //       showActions.showNotification({
  //         status: "error",
  //         title: "Error!",
  //         message: "Sent cart data successfully!",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // using action creator thunk
  useEffect(() => {
    // to avoid sending a request whenever the site is loaded
    if (initial) {
      initial = false;
      return;
    }
    // to not send the request when initially data is fetched
    if (cart.changed) {
      dispatch(
        sendCartData({ items: cart.items, totalQuantity: cart.totalQuantity })
      );
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
