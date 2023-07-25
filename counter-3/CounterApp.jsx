import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const functionDecrement = () => {
    setCounter(counter - 1);
  };
  const functionReset = () => {
    setCounter(value);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={functionDecrement}>-1</button>
      <button onClick={functionReset}>reset</button>
    </>
  );
};
CounterApp.PropTypes = {
  value: PropTypes.number.isRequired,
};
