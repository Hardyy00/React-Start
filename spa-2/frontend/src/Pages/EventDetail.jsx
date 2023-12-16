import {
  Await,
  json,
  redirect,
  useRouteLoaderData,
  defer,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventDetailsPage() {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense
        fallback={
          <p style={{ textAlign: "center" }}>Loading Event Details...</p>
        }
      >
        <Await resolve={event}>{(event) => <EventItem event={event} />}</Await>
      </Suspense>

      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading Events...</p>}
      >
        <Await resolve={events}>
          {(events) => <EventsList events={events} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  // error handling
  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };

    // throw { message: "Could not fetch elements." };

    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });

    // another way of returning response

    return json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  }
  const resData = await response.json();
  return resData.event;
}

export async function loader({ request, params }) {
  const id = params.id;
  return defer({
    event: loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ request, params }) {
  const eventId = params.id;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete the event" }, { status: 500 });
  }

  return redirect("/events");
}
