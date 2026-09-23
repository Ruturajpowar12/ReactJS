import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="container">
        <h1>{count}</h1>
        <div className="btns">
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(0)} disabled={count === 0}>
            Reset
          </button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
      </div>
    </div>
  );
}

export default App;
