import { useEffect, useRef, useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "~!@#$%^&*()_+}{][";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-tl to-amber-300 from-pink-300">
      <div className="bg-white flex flex-col rounded-lg shadow-xl p-6 gap-2">
        <div className="top flex gap-4">
          <input
            type="text"
            placeholder="Password"
            value={password}
            className="bg-gray-200 p-2 rounded shadow w-full font-semibold outline-none"
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 p-3 rounded shadow text-white font-semibold cursor-pointer active:bg-blue-700"
          >
            Copy
          </button>
        </div>
        <div className="bottom flex gap-3 mt-3 items-center">
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />

          <h2 className="text-xl font-semibold text-blue-500">
            Length: {length}
          </h2>

          <div className="checkbox text-xl font-semibold text-blue-500 flex gap-1 items-center">
            <input
              type="checkbox"
              id="inputNum"
              className="cursor-pointer"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="inputNum" className="cursor-pointer">
              Number
            </label>
          </div>
          <div className="checkbox text-xl font-semibold text-blue-500 flex gap-1 items-center">
            <input
              type="checkbox"
              id="inputChar"
              checked={charAllowed}
              className="cursor-pointer"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="inputChar" className="cursor-pointer">
              Character
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
