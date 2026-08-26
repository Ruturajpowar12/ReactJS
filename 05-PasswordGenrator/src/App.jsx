import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUWZVXYabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_+=[]{}';";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [charAllowed, numberAllowed, length, passwordGenerator]);

  return (
    <div className="w-full h-screen bg-pink-300  flex justify-center items-center flex-col gap-5">
      <h1 className="text-4xl font-bold text-pink-700">Password Generator</h1>
      <div className="bg-white p-5 rounded-lg shadow-xl ">
        <input
          type="text"
          className="w-100 px-5 outline-none py-3 bg-gray-300 rounded shadow-lg "
          value={password}
          placeholder="Password"
          ref={passwordRef}
          readOnly
        />
        <button
          className="ml-2 bg-blue-600 text-white py-3 px-5 rounded shadow-lg cursor-pointer"
          onClick={copyPasswordToClipbord}
        >
          Copy
        </button>
        <br />
        <div className="flex gap-5 mt-6">
          <input
            type="range"
            className=""
            value={length}
            min={6}
            max={50}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <p className=" text-xl text-blue-600 font-semibold">
            Length: {length}
          </p>

          <div>
            <input
              type="checkbox"
              id="numberInput"
              className="cursor-pointer"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label
              htmlFor="numberInput"
              className="text-xl text-blue-600 font-semibold ml-1"
            >
              Numbers
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="charInput"
              className="cursor-pointer"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label
              htmlFor="charInput"
              className="text-xl text-blue-600 font-semibold ml-1 "
            >
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
