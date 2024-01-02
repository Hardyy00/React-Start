import TableRow from "./TableRow";
import "./DisplayTable.css";

export default function DisplayTable(props) {
  const fallBack = (
    <tbody>
      <tr>
        <td>YEAR NUMBER</td>
        <td>TOTAL SAVINGS END OF YEAR</td>
        <td>INTEREST GAINED IN YEAR</td>
        <td>TOTAL INTEREST GAINED</td>
        <td>TOTAL INVESTED CAPITAL</td>
      </tr>
    </tbody>
  );
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      {props.data.length == 0
        ? fallBack
        : props.data.map((info) => <TableRow key={info.key} yearInfo={info} />)}
    </table>
  );
}
