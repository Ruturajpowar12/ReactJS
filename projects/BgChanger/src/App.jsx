import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("yellow");

  const colors = ["yellow", "green", "aqua", "wheat", "blue", "black"];

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setTextColor(randomColor);
  }, [color]);
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full h-screen flex justify-center items-center flex-col gap-5  "
    >
      <h1 className="font-bold text-3xl" style={{ color: textColor }}>
        BG-CHANGER
      </h1>
      <div className="bg-white p-5 rounded shadow-blue-300 shadow-xl flex gap-5">
        <button
          onClick={() => setColor("red")}
          className="py-2 px-5 bg-red-500 rounded-lg shadow-lg cursor-pointer"
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="py-2 px-5 bg-blue-500 rounded-lg shadow-lg cursor-pointer"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("orange")}
          className="py-2 px-5 bg-orange-500 rounded-lg shadow-lg cursor-pointer"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("gray")}
          className="py-2 px-5 bg-gray-500 rounded-lg shadow-lg cursor-pointer"
        >
          Gray
        </button>
        <button
          onClick={() => setColor("pink")}
          className="py-2 px-5 bg-pink-500 rounded-lg shadow-lg cursor-pointer"
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default App;
