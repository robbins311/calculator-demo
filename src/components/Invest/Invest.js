import React, { useState } from "react";

import styles from "./Invest.module.css";

const Invest = (props) => {
  // 빈칸 하나로 제출되면 해당 input style 변경

  const [currentSaving, setcurrentSaving] = useState("");
  const [yearlySaving, setYearlySaving] = useState("");
  const [returnInput, setReturnInput] = useState("");
  const [duration, setDuration] = useState("");

  const currentSavingHandler = (event) => {
    setcurrentSaving(event.target.value);
  };

  const yearlySavingHandler = (event) => {
    setYearlySaving(event.target.value);
  };

  const returnInputHandler = (event) => {
    setReturnInput(event.target.value);
  };

  const durationHandler = (event) => {
    setDuration(event.target.value);
  };

  const resetHandler = () => {
    setcurrentSaving("");
    setYearlySaving("");
    setReturnInput("");
    setDuration("");
    // props.onReset();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const investData = {
      currentSavings: currentSaving,
      yearlyInterest: yearlySaving,
      expectedReturn: returnInput,
      duration: duration,
    };

    props.onCalculate(investData);

    resetHandler();
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            value={currentSaving}
            onChange={currentSavingHandler}
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            value={yearlySaving}
            onChange={yearlySavingHandler}
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={returnInput}
            onChange={returnInputHandler}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={duration}
            onChange={durationHandler}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          onClick={resetHandler}
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Invest;
