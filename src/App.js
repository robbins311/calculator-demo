import React, { useState } from "react";

import Header from "./components/Header/Header";
import Invest from "./components/Invest/Invest";
import Table from "./components/Table/Table";

function App() {
  const [result, setResult] = useState([]);
  const resultReset = () => {
    setResult([]);
  };
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    // setResult([]);

    console.log(userInput);

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyInterest;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // console.log(yearlyContribution);
    // console.log(expectedReturn);
    // console.log(duration);
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setResult(yearlyData);
    console.log(result);
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />

      <Invest onCalculate={calculateHandler} onReset={resultReset} />

      <Table lists={result} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
