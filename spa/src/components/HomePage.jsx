import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>My home page</h1>
      {/* <Link to={"/products"}>Go to products</Link> */}

      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}
