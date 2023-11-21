import { itemActions } from "./item";
import { showActions } from "./show";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-25049-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Kuch glt ho gya hai");
      }

      const content = await response.json();

      return content;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        itemActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
        })
      );
    } catch (err) {
      dispatch(
        showActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching Cart data failed!",
        })
      );
    }
  };
};

// action dispatcher thunk, for sending https requests
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showActions.showNotification({
        status: "pending",
        title: "sending",
        message: "Sending Cart Data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-25049-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        showActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (err) {
      dispatch(
        showActions.showNotification({
          status: "error",
          title: "Error!",
          message: err.message,
        })
      );
    }
  };
};
