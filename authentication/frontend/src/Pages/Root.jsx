import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../utils/auth";

export default function RootLayout() {
  const navigation = useNavigation();
  const submit = useSubmit();

  const token = useLoaderData(); // cuz this is main component in the path '/'

  // for automatic logout
  useEffect(() => {
    if (!token) return;

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    // console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration); // set the time to the same as set in the expiration of token in backend
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}

        <Outlet />
      </main>
    </>
  );
}
