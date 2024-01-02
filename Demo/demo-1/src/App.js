import logo from "./assets/investment-calculator-logo.png";
import React, { useState } from "react";
import FormInput from "./components/FormInput";
import DisplayTable from "./components/DisplayTable";

export default function App() {
  const [data, setData] = useState([]);

  const dataHandler = (data) => {
    setData(data);
  };
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <FormInput onSubmitQuery={dataHandler} />

      <DisplayTable data={data} />
    </div>
  );
}
