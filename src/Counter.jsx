import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  }

  return (
    <>
    <div className="counter-container">
        <hr></hr>
        <h1>Counter</h1>
        <p className="count-display">{count}</p>

        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>
        <hr></hr>
    </div>
    </>
  );
}

export default Counter;
