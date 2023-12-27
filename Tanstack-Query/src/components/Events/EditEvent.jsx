import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const { data, error } = useQuery({
    queryKey: ["events-desc", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    staleTime: 10000,
  });

  const {
    mutate,
    isPending: updatePending,
    error: updateError,
  } = useMutation({
    mutationFn: updateEvent,

    // optimistic updation
    onMutate: async ({ formData }) => {
      await queryClient.cancelQueries({ queryKey: ["events-desc", id] });

      const previousData = queryClient.getQueryData(["events-desc", id]);
      queryClient.setQueryData(["events-desc", id], formData);

      return { previousData };
    },

    onError: (error, data, context) => {
      console.log(context.previousData);
      queryClient.setQueryData(["events-desc", id], context.previousData);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["events-desc", id] });
    },
  });

  function handleSubmit(formData) {
    mutate({ formData, id });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  return (
    <Modal onClose={handleClose}>
      {error && (
        <ErrorBlock
          title={"Could not fetch the details"}
          message={error.info?.message || "Something went wrong"}
        />
      )}
      {data && (
        <EventForm inputData={data} onSubmit={handleSubmit}>
          {updatePending && <LoadingIndicator />}
          {updateError && (
            <ErrorBlock
              title={"Something went wrong."}
              message={
                updateError.info?.message ||
                "Could not edit the event.Try again later."
              }
            />
          )}
          {!updatePending && !updateError && (
            <>
              <Link to="../" className="button-text">
                Cancel
              </Link>
              <button type="submit" className="button">
                Update
              </button>
            </>
          )}
        </EventForm>
      )}
    </Modal>
  );
}

// export function loader({ params }) {
//   const { id } = params;
//   return queryClient.fetchQuery({
//     queryKey: ["events-desc", id],
//     queryFn: ({ signal }) => fetchEvent({ signal, id }),
//   });
// }

// export async function action({ request, params }) {
//   const formData = await request.formData();
//   const updatedEventData = Object.fromEntries(formData);

//   await updateEvent({ id: params.id, formData: updatedEventData });

//   await queryClient.invalidateQueries(["events"]);

//   return redirect("../");
// }
