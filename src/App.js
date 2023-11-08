import React, { useState } from "react";

import Header from "./components/Header/Header";
import Invest from "./components/Invest/Invest";
import Table from "./components/Table/Table";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    console.log(userInput);
    setUserInput(userInput);
  };
  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <Invest onCalculate={calculateHandler} />

      {!userInput && (
        <h2 style={{ textAlign: "center" }}>Found no Investment Calculated.</h2>
      )}
      {userInput && (
        <Table
          lists={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
