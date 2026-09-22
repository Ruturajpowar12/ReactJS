import { useState } from "react";

function App() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-10 bg-linear-to-bl to-pink-400 from-blue-400">
      <h1 className="text-white text-5xl font-extrabold">BMI CALCULATOR</h1>
      <div className="container bg-white shadow-2xl rounded-xl flex flex-col  justify-center  items-center p-5  gap-3">
        <input
          type="text"
          placeholder="Enter Your Weight(Kg) "
          className=" bg-gray-800 p-2 text-white w-[550px] rounded shadow-lg pl-2"
        />
        <input
          type="text"
          placeholder="Enter Your Height(centimeter) "
          className=" bg-gray-800 p-2 text-white w-[550px] rounded shadow-lg pl-2 "
        />

        <button className="bg-pink-400 text-blue-900 p-2 rounded shadow">
          Calculate
        </button>

        <div className="display"></div>
      </div>
    </div>
  );
}

export default App;
