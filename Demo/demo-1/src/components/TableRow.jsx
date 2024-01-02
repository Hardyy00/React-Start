import "./TableRow.css";
export default function TableRow(props) {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <tbody>
      <tr>
        <td>{props.yearInfo.year}</td>
        <td>{formatter.format(props.yearInfo.savingsEndOfYear)}</td>
        <td>{formatter.format(props.yearInfo.yearlyInterest)}</td>
        <td>{formatter.format(props.yearInfo.totalInterest)}</td>
        <td>{formatter.format(props.yearInfo.totalInterest)}</td>
      </tr>
    </tbody>
  );
}
