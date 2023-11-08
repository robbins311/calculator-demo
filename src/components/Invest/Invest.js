import React, { useState } from "react";

import styles from "./Invest.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const Invest = (props) => {
  // 빈칸 하나로 제출되면 해당 input style 변경
  const [userInput, setUserInput] = useState(initialUserInput);

  // generic event handler
  const changeHandelr = (identifier, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [identifier]: +value, // "+"는 문자열 값을 숫자로 변환함
      };
    });
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);

    resetHandler();
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            value={userInput["current-savings"]}
            onChange={(event) => {
              changeHandelr("current-savings", event.target.value);
            }}
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            value={userInput[""]}
            onChange={(event) => {
              changeHandelr("yearly-contribution", event.target.value);
            }}
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
            value={userInput["expected-return"]}
            onChange={(event) => {
              changeHandelr("expected-return", event.target.value);
            }}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          {/*  value={userInput.duration} 이것도 됨 */}
          <input
            value={userInput["duration"]}
            onChange={(event) => {
              changeHandelr("duration", event.target.value);
            }}
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
