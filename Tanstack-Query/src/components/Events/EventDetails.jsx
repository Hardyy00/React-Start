import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const { data, isPending, error } = useQuery({
    queryKey: ["events-desc", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  let date = null;

  if (data)
    date = new Date(data.date).toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const {
    mutate: deleteEventMutate,
    isPending: deletePending,
    error: deletionError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  function deleteHandler() {
    deleteEventMutate({ id });
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete this event? This action cannot be
            undone.
          </p>

          <div className="form-actions">
            {!deletePending && (
              <>
                <button onClick={handleStopDelete} className="button-text">
                  Cancel
                </button>
                <button onClick={deleteHandler} className="button">
                  Delete
                </button>
              </>
            )}

            {deletePending && <LoadingIndicator />}
          </div>
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {deletionError && (
          <ErrorBlock
            title="Something went wrong"
            message={
              deletionError.info?.message || "Could not delete the event."
            }
          />
        )}
        <header>
          <h1>{data?.title || ""}</h1>
          {!deletePending && (
            <button onClick={handleStartDelete}>Delete </button>
          )}

          <nav>
            {deletePending && <LoadingIndicator />}
            <Link to="edit">Edit</Link>
          </nav>
        </header>

        {isPending && (
          <div style={{ textAlign: "center" }}>
            {" "}
            <LoadingIndicator />
          </div>
        )}
        {error && (
          <ErrorBlock
            title="Failed to fetch the details"
            message={error.info?.message || "An error occurred"}
          />
        )}

        {data && (
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {date} @ {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        )}
      </article>
    </>
  );
}
