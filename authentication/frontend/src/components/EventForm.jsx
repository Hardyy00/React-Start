import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  redirect,
  json,
} from "react-router-dom";

import classes from "./EventForm.module.css";
import { getAuthToken } from "../utils/auth";

export default function EventForm({ method, event }) {
  const data = useActionData(); // to get the action data related to validation errors
  const navigate = useNavigate();
  const navigation = useNavigation();

  // to check the state if the form is still submitting
  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
        {data && data.errors && data.errors.title && (
          <p style={{ color: "red" }}>{data.errors.title}</p>
        )}
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          defaultValue={event ? event.image : ""}
          required
        />
        {data && data.errors && data.errors.image && (
          <p style={{ color: "red" }}>{data.errors.image}</p>
        )}
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event ? event.date : ""}
          required
        />
        {data && data.errors && data.errors.date && (
          <p style={{ color: "red" }}>{data.errors.date}</p>
        )}
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          defaultValue={event ? event.description : ""}
          required
        />
        {data && data.errors && data.errors.description && (
          <p style={{ color: "red" }}>{data.errors.description}</p>
        )}
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save"}{" "}
        </button>
      </div>
    </Form>
  );
}

export async function action({ request, params }) {
  const method = request.method; // request.method is always capitalized

  // console.log(`Method : ${method}`);

  const data = await request.formData();
  const token = getAuthToken();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),

    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const id = params.id;
    url = "http://localhost:8080/events/" + id;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save the event." }, { status: 500 });
  }

  return redirect("/events");
}
