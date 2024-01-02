import "./cards.css";
import Card from "./card";
export default function Cards({ concepts }) {
  return (
    <ul id="concepts">
      <Card
        image={concepts[0].image}
        title={concepts[0].title}
        content={concepts[0].description}
      ></Card>

      <Card
        image={concepts[1].image}
        title={concepts[1].title}
        content={concepts[1].description}
      ></Card>

      <Card
        image={concepts[2].image}
        title={concepts[2].title}
        content={concepts[2].description}
      ></Card>
    </ul>
  );
}
