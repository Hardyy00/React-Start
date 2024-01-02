import "./ListTile.css";
export default function ListTile(props) {
  const deleteHandler = () => {
    props.onDelete(props.userInfo);
  };
  return (
    <div className="list-tile" onClick={deleteHandler}>
      <p>{`${props.userInfo.name} (${props.userInfo.age} years old)`}</p>
    </div>
  );
}
