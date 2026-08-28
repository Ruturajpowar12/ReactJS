import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((prev) => prev + 1);
  }
  function restCount() {
    setCount(0);
  }
  function decreaseCount() {
    setCount((prev) => prev - 1);
  }

  return (
    <div
      className="w-full h-screen  flex 
      justify-center
      items-center flex-col gap-5 bg-linear-to-bl to-blue-400 from-green-400"
    >
      <h1 className="text-blue-800 text-6xl font-bold">Counter App</h1>
      <div className="flex justify-center items-center flex-col py-10 rounded-xl shadow-2xl w-140  gap-3 bg-white">
        <div className="top">
          <h2 className=" font-extrabold text-8xl text-blue-800">{count}</h2>
        </div>
        <div className="bottom w-full flex justify-around px-10 mt-10">
          <button
            className="p-4 bg-blue-900 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-800"
            onClick={increaseCount}
          >
            Increase
          </button>
          <button
            className="p-4 bg-blue-900 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-800"
            onClick={restCount}
          >
            Reset
          </button>
          <button
            className="p-4 bg-blue-900 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-800"
            onClick={decreaseCount}
            disabled={count <= 0}
          >
            Decrease
          </button>
        </div>
      </div>
      <h3 className="font-semibold">Created by Ruturaj</h3>
    </div>
  );
}

export default App;
