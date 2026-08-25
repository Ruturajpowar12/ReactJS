import { useState } from "react";
function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className=" w-full h-screen duration-200 flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex bg-white  p-5 rounded-lg  gap-4 shadow-2xl text-white">
        <button
          onClick={() => setColor("red")}
          className="rounded px-4 py-2 shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="rounded px-4 py-2 shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="rounded px-4 py-2 shadow-lg"
          style={{ backgroundColor: "Yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("gray")}
          className="rounded px-4 py-2 shadow-lg"
          style={{ backgroundColor: "gray" }}
        >
          Gray
        </button>
        <button
          onClick={() => setColor("pink")}
          className="rounded px-4 py-2 shadow-lg"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
        <button
          onClick={() => setColor("green")}
          className="rounded px-4 py-2 shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default App;
