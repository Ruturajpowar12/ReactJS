import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };
  return (
    <div className=" bg-slate-700 rounded py-5 px-10 w-[700px] flex flex-col gap-3 shadow-2xl ">
      <input
        type="text"
        placeholder="Username"
        value={username}
        className="bg-slate-800 p-3 rounded-lg shadow-xl outline-none border border-cyan-600"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        className="bg-slate-800 p-3 rounded-lg shadow-xl outline-none border border-cyan-600"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-slate-900 p-3 rounded shadow font-semibold cursor-pointer hover:bg-slate-800 duration-700 active:scale-105 transition duration-500 "
      >
        Login
      </button>
    </div>
  );
}

export default Login;
