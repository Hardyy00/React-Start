import React, { useState } from "react";
import FormInput from "./Components/UserForm/FormInput";
import List from "./Components/List/List";

function App() {
  const [data, setData] = useState([]);

  const formHandler = (userData) => {
    setData((prevState) => [...prevState, userData]);
  };

  const deleteHandler = (userObj) => {
    const newArray = data.filter((item) => item.id !== userObj.id);
    setData(newArray);
  };
  return (
    <div>
      <FormInput onSubmitForm={formHandler} />

      {/* displaying a component conditionally */}
      {data.length > 0 && <List data={data} onDelete={deleteHandler} />}
    </div>
  );
}

export default App;
