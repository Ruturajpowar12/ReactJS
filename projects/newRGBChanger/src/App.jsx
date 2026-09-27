import { useState } from "react";
function App() {
  const [red, setRed] = useState(127);
  const [green, setGreen] = useState(127);
  const [blue, setBlue] = useState(127);

  const bgColor = `rgb(${red},${green},${blue})`;
  return (
    <div
      className="h-screen w- full  flex justify-center items-center flex-col gap-5"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-4xl font-extrabold">RGB Changer</h1>
      <div
        className="bg-white w-130 shadow-2xl rounded-xl  flex
      flex-col  px-8 py-9 gap-6  justify-center items-center "
      >
        <input
          type="range"
          min={0}
          max={255}
          defaultValue={127}
          className="w-full"
          value={red}
          onChange={(e) => setRed(e.target.value)}
        />
        <input
          type="range"
          min={0}
          max={255}
          defaultValue={127}
          className="w-full"
          value={green}
          onChange={(e) => setGreen(e.target.value)}
        />
        <input
          type="range"
          min={0}
          max={255}
          defaultValue={127}
          className="w-full"
          value={blue}
          onChange={(e) => setBlue(e.target.value)}
        />

        <h2 className="text-xl font-semibold">
          rgb({red},{green},{blue})
        </h2>
      </div>
    </div>
  );
}

export default App;
