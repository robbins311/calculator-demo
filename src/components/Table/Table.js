import React from "react";

import styles from "./Table.module.css";

const Table = (props) => {
  if (props.lists.length === 0) {
    return <h2>Found no Investment Calculated.</h2>;
  }

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.lists.map((result, idx) => {
          return (
            <tr key={idx}>
              <td>{result.year}</td>
              <td>${result.savingsEndOfYear}</td>
              <td>${result.yearlyInterest}</td>
              {/* <td>${result.}</td>
              <td>${result.}</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
