import { useEffect, useState } from "react";
function App() {
  const [hour, setHour] = useState(00);
  const [mintue, setMintue] = useState(00);
  const [second, setSecond] = useState(00);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();

      const hours12 = hours % 12 || 12;

      setHour(String(hours12).padStart(2, "0"));
      setMintue(date.getMinutes().toLocaleString().padStart(2, "0"));
      setSecond(date.getSeconds().toLocaleString().padStart(2, "0"));
    }, 1000);
  }, []);
  return (
    <div className="h-screen bg-linear-to-br from-red-400 to-purple-400 flex justify-center items-center flex-col gap-10">
      <h1 className="font-extrabold text-white text-6xl">Digital Clock</h1>
      <div className="bg-white mx-4 p-7 rounded shadow-2xl flex justify-between gap-4 font-bold text-7xl text-purple-800">
        <div className="bg-purple-300 p-2 shadow-xl rounded-lg flex justify-center items-center h-[200px] w-[200px]">
          {hour}
        </div>
        <div className="bg-purple-300 p-2 shadow-xl rounded-lg flex justify-center items-center h-[200px] w-[200px]">
          {mintue}
        </div>
        <div className="bg-purple-300 p-2 shadow-xl rounded-lg flex justify-center items-center h-[200px] w-[200px]">
          {second}
        </div>
      </div>
    </div>
  );
}

export default App;
