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
export default function App() {
  const routerDefinitions = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />, // to handle the error of all kinds,including errors thrown by the loaders
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
                { path: "edit", element: <EditEventPage />, action: action },
              ],
            },
          ],
        },
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: newsLetterAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={routerDefinitions} />;
}
