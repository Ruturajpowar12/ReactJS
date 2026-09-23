import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(".....");
  const [category, setCategory] = useState("....");
  function calculateBMI() {
    if (!weight || !height || height <= 0) {
      setResult("Please enter valid numbers");
      return;
    }
    const BMI = Math.floor((weight / (height * height)) * 10000);
    setResult(BMI);
    if (BMI < 18) {
      setCategory("Underweight");
    } else if (BMI > 18 && BMI < 24) {
      setCategory("Healthy weight");
    } else if (BMI > 25 && BMI < 29) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }

    setHeight("");
    setWeight("");
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-10 bg-linear-to-bl to-pink-400 from-blue-400">
      <h1 className="text-white text-6xl font-extrabold">BMI CALCULATOR</h1>
      <div className="container bg-white shadow-2xl rounded-xl flex flex-col  justify-center  items-center p-5  gap-5 w-[600px]">
        <input
          type="text"
          placeholder="Enter Your Weight(Kg) "
          className="text-black font-semibold bg-gray-300 p-2 w-[550px] rounded shadow-lg pl-2 outline-none"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Height(centimeter) "
          className="text-black font-semibold bg-gray-300 p-2 w-[550px] rounded shadow-lg pl-2 outline-none "
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button
          className="bg-pink-400 text-blue-900 p-2 rounded shadow  w-full p-2 font-semibold text-lg
         hover:bg-pink-500 cursor-pointer"
          onClick={calculateBMI}
        >
          Calculate
        </button>

        <div className="display flex flex-col  w-full justify-center items-center border-t-1">
          <h2 className="text-lg mt-5 font-bold text-blue-900 bg-pink-300  w-full py-2 text-center  rounded ">
            Your BMI is {result}
          </h2>
          <h3 className="text-lg my-4 font-bold text-blue-900 bg-pink-300  w-full py-2 text-center  rounded">
            BMI Categories is {category}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
