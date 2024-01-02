import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  // get all teh expenses amount
  const dataPointsValues = props.dataPoints.map((dp) => dp.value);

  // find the maximum among all the expenses amount
  const maxExpenseAmount = Math.max(...dataPointsValues);
  return (
    <div class="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxExpenseAmount}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
