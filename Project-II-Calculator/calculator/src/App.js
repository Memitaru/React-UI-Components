import React from 'react';
import './App.css';
import Calc from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay text="0"/>
      <Calc />
    </div>
  );
};

export default App;
