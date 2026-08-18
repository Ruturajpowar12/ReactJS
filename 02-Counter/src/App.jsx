import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const restValue = () => {
    setCounter(0);
  };
  return (
    <>
      <div className="box">
        <h1>Counter App</h1>
        <h2>Counter Value : {counter}</h2>
        <div className="btns">
          <button onClick={addValue}>Add</button>
          <button onClick={restValue}>Reset</button>
          <button onClick={removeValue}>Remove</button>
        </div>
      </div>
    </>
  );
}

export default App;
