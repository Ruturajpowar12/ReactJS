import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="container">
        <h1>{count}</h1>
        <div className="btns">
          <button>Increase</button>
          <button>Reset</button>
          <button>Decrease</button>
        </div>
      </div>
    </div>
  );
}

export default App;
