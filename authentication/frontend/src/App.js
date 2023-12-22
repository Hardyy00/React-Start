import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import EventsPage, { loader } from "./Pages/Events";
import EventDetailsPage from "./Pages/EventDetail";
import NewEventPage from "./Pages/NewEvent";
import EditEventPage from "./Pages/EditEvent";
import RootLayout from "./Pages/Root";
import EventsRootLayout from "./Pages/EventsRoot";
import ErrorPage from "./Pages/Error";
import {
  loader as eventLoader,
  action as deleteEventAction,
} from "./Pages/EventDetail";
import { action } from "./components/EventForm";
import NewsletterPage from "./Pages/Newsletter";
import { action as newsLetterAction } from "./Pages/Newsletter";
import AuthenticationPage, {
  action as authAction,
} from "./Pages/Authentication";
import { action as logoutAction } from "./Pages/Logout";
import { checkAuthLoader, tokenLoader } from "./utils/auth";

export default function App() {
  const routerDefinitions = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />, // to handle the error of all kinds,including errors thrown by the loaders
      id: "root",
      loader: tokenLoader, // provide the token to whole application, (we can also use redux or context API for that)
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: loader,
            },
            {
              path: "new",
              element: <NewEventPage />,
              action: action,
              loader: checkAuthLoader,
            },
            {
              // wrapping all the path so supply a common loader function
              path: ":id",
              id: "event-detail", // giving a unique id to a unique route loader
              loader: eventLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailsPage />,
                  action: deleteEventAction,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: action,
                  loader: checkAuthLoader,
                },
              ],
            },
          ],
        },
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: newsLetterAction,
        },

        {
          path: "auth",
          element: <AuthenticationPage />,
          action: authAction,
        },
        {
          path: "logout",
          action: logoutAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={routerDefinitions} />;
}
