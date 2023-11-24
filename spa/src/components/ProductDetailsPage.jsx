import { useParams, Link } from "react-router-dom";

export default function ProductDetailsPage() {
  const params = useParams();

  const id = params.productid;

  return (
    <>
      <h1>Product Details Page</h1>
      <p>{id}</p>
      <Link to=".." relative="path">
        Go Back
      </Link>
    </>
  );
}
