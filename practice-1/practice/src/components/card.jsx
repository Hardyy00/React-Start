import "./Card.css";

export default function Card(props) {
  return (
    <div>
      <li className="concept">
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </li>
    </div>
  );
}
