import { useState } from "react";
import "./FormInput.css";
export default function FormInput(props) {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const currentSavingHandler = (event) => {
    setCurrentSavings(event.target.value);
  };

  const yearlyContributionHandler = (event) => {
    setYearlyContribution(event.target.value);
  };

  const expectedReturnHandler = (event) => {
    setExpectedReturn(event.target.value);
  };

  const durationHandler = (event) => {
    setDuration(event.target.value);
  };

  const calculateHandler = (event) => {
    event.preventDefault();

    const yearlyData = [];

    let currentSavings = +event.target.form["current-savings"].value;
    let yearlyContribution = +event.target.form["yearly-contribution"].value;
    let expectedReturn = +event.target.form["expected-return"].value;
    let duration = +event.target.form["duration"].value;
    let totalInterest = 0;

    for (let i = 1; i <= duration; i++) {
      const yearlyInterest = expectedReturn * currentSavings * 0.01;
      currentSavings += yearlyInterest + yearlyContribution;

      totalInterest += yearlyInterest;

      yearlyData.push({
        year: i,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: totalInterest,
        investedCapital: currentSavings - totalInterest,
      });
    }

    props.onSubmitQuery(yearlyData);
  };

  const resetHandler = (event) => {
    setCurrentSavings("");
    setDuration("");
    setExpectedReturn("");
    setYearlyContribution("");

    props.onSubmitQuery([]);
  };

  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={currentSavingHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={yearlyContributionHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedReturn}
            onChange={expectedReturnHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={durationHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button" onClick={calculateHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
}
