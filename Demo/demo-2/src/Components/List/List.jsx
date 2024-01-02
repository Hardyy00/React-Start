import ListTile from "./ListTile";
import "./List.css";
export default function List(props) {
  return (
    <div className="list">
      {props.data.map((userInfo) => (
        <ListTile
          key={userInfo.id}
          userInfo={userInfo}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
}
